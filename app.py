
from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity

app = Flask(__name__)
app.config["JWT_SECRET_KEY"] = "clave-secreta"
CORS(app)
jwt = JWTManager(app)

USUARIOS = {"admin": "1234"}

@app.route('/api/login', methods=['POST'])
def login():
    data = request.json
    usuario = data.get('usuario')
    clave = data.get('clave')
    if USUARIOS.get(usuario) == clave:
        access_token = create_access_token(identity=usuario)
        return jsonify({"mensaje": "Acceso correcto", "token": access_token}), 200
    return jsonify({"mensaje": "Credenciales inválidas"}), 401

@app.route('/api/mascotas', methods=['GET'])
@jwt_required()
def get_mascotas():
    mascotas = [
        {"id": 1, "nombre": "Max", "tipo": "Perro"},
        {"id": 2, "nombre": "Misu", "tipo": "Gato"}
    ]
    return jsonify(mascotas), 200

if __name__ == '__main__':
    app.run(debug=True)


///Cristell Stephanie Almenar Gonzalez