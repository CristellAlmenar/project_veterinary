import React from 'react';
import { usePacientes } from './hooks/usePacientes';

function App() {
  const pacientes = usePacientes();
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Agenda de Citas Veterinarias</h1>
      <ul>
        {pacientes.map((p: any) => (
          <li key={p.id}>{p.nombre} - {p.especie}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
