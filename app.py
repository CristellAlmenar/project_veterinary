from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
import os

app = Flask(__name__)
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:postgres@localhost:5432/veterinaria'
db = SQLAlchemy(app)
ma = Marshmallow(app)

class Paciente(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(100))
    especie = db.Column(db.String(50))
    raza = db.Column(db.String(50))
    edad = db.Column(db.Integer)

class PacienteSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Paciente

paciente_schema = PacienteSchema()
pacientes_schema = PacienteSchema(many=True)

@app.route('/pacientes', methods=['GET'])
def get_pacientes():
    all_pacientes = Paciente.query.all()
    return pacientes_schema.jsonify(all_pacientes)

@app.route('/pacientes', methods=['POST'])
def add_paciente():
    data = request.json
    paciente = Paciente(**data)
    db.session.add(paciente)
    db.session.commit()
    return paciente_schema.jsonify(paciente)

@app.route('/pacientes/<int:id>', methods=['PUT'])
def update_paciente(id):
    paciente = Paciente.query.get_or_404(id)
    data = request.json
    for key, value in data.items():
        setattr(paciente, key, value)
    db.session.commit()
    return paciente_schema.jsonify(paciente)

@app.route('/pacientes/<int:id>', methods=['DELETE'])
def delete_paciente(id):
    paciente = Paciente.query.get_or_404(id)
    db.session.delete(paciente)
    db.session.commit()
    return jsonify({"message": "Eliminado"})

if __name__ == '__main__':
    app.run(debug=True)
