<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Mascotas Veterinaria Infantil</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Comic+Neue:wght@700&display=swap');
    body {
      margin: 0;
      font-family: 'Comic Neue', cursive, sans-serif;
      background: linear-gradient(135deg, #ffc8dd 0%, #a2d2ff 100%);
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 40px 20px;
      color: #2c3e50;
    }
    h1 {
      font-size: 2.5rem;
      margin-bottom: 30px;
      text-align: center;
    }
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
      gap: 25px;
      width: 100%;
      max-width: 900px;
    }
    .card {
      background: white;
      border-radius: 25px;
      box-shadow: 0 12px 25px rgba(0,0,0,0.15);
      padding: 25px 20px;
      text-align: center;
      transition: box-shadow 0.3s ease;
      cursor: pointer;
    }
    .card:hover {
      box-shadow: 0 20px 35px rgba(0,0,0,0.25);
    }
    .icon {
      font-size: 48px;
      margin-bottom: 15px;
      color: #ff7eb9;
    }
    .name {
      font-weight: 700;
      font-size: 1.3rem;
      margin-bottom: 5px;
    }
    .type {
      font-size: 1rem;
      color: #6b7280;
      margin-bottom: 15px;
    }
    button {
      background: #6c63ff;
      color: white;
      border: none;
      padding: 10px 25px;
      border-radius: 20px;
      font-size: 1rem;
      cursor: pointer;
      transition: background 0.3s ease;
    }
    button:hover {
      background: #574fd6;
    }
    .image-container {
      margin-top: 30px;
      text-align: center;
    }
    .image-container img {
      width: 100%;
      max-width: 400px;
      border-radius: 20px;
      box-shadow: 0 8px 20px rgba(0,0,0,0.15);
    }
  </style>
</head>
<body>
  <h1>Nuestras Mascotas</h1>
  <div class="grid">
    <div class="card">
      <div class="icon">🐶</div>
      <div class="name">Milo</div>
      <div class="type">Perro</div>
      <button>Ver Perfil</button>
    </div>
    <div class="card">
      <div class="icon">🐱</div>
      <div class="name">Luna</div>
      <div class="type">Gato</div>
      <button>Ver Perfil</button>
    </div>
    <div class="card">
      <div class="icon">🐰</div>
      <div class="name">Toby</div>
      <div class="type">Conejo</div>
      <button>Ver Perfil</button>
    </div>
    <div class="card">
      <div class="icon">🐦</div>
      <div class="name">Kiwi</div>
      <div class="type">Pájaro</div>
      <button>Ver Perfil</button>
    </div>
  </div>
  <div class="image-container">
    <img src="mascotas_mejorado.png" alt="Mascotas Veterinaria Infantil" />
  </div>
</body>
</html>
///Kelyn Marcela Cruz Alvarado