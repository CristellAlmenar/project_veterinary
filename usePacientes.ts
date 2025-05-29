import { useEffect, useState } from 'react';

export function usePacientes() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/pacientes')
      .then(res => res.json())
      .then(setData);
  }, []);
  return data;
}
