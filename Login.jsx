
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Login Veterinaria Infantil</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Comic+Neue:wght@700&display=swap');
    body {
      margin: 0;
      font-family: 'Comic Neue', cursive, sans-serif;
      background: linear-gradient(135deg, #a2d2ff 0%, #ffc8dd 100%);
      display: flex;
      height: 100vh;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
    .card {
      background: white;
      border-radius: 25px;
      box-shadow: 0 12px 25px rgba(0,0,0,0.2);
      padding: 30px 40px;
      width: 380px;
      text-align: center;
      position: relative;
    }
    h1 {
      color: #2c3e50;
      margin-bottom: 25px;
    }
    input {
      width: 100%;
      padding: 12px 15px;
      margin: 10px 0 20px 0;
      border-radius: 12px;
      border: 2px solid #ccc;
      font-size: 16px;
      outline: none;
      transition: border-color 0.3s ease;
    }
    input:focus {
      border-color: #ff7eb9;
    }
    button {
      background: #ff7eb9;
      color: white;
      border: none;
      padding: 12px 0;
      width: 100%;
      border-radius: 20px;
      font-size: 18px;
      cursor: pointer;
      transition: background 0.3s ease;
    }
    button:hover {
      background: #ff6a9c;
    }
    .image-container {
      margin-bottom: 20px;
      text-align: center;
    }
    .image-container img {
      width: 100%;
      max-width: 300px;
      border-radius: 20px;
      box-shadow: 0 8px 20px rgba(0,0,0,0.15);
    }
  </style>
</head>
<body>
  <div class="card">
    <div class="image-container">
      <img src="login_mejorado.png" alt="Login Veterinaria Infantil" />
    </div>
    <h1>Inicio de Sesión</h1>
    <input type="email" placeholder="Correo electrónico" />
    <input type="password" placeholder="Contraseña" />
    <button>Entrar</button>
  </div>
</body>
</html>
///Kelyn Marcela Cruz Alvarado