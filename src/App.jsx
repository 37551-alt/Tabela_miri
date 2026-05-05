import React from "react";
import "./App.css";
import imagem from "./assets/99.jpg";

export default function App() {
  return (
    <div className="container">
      
      <div className="left">
       <img
        src={imagem}
        alt="Tela snap"
       />
      </div>

      <div className="right">
        <div className="login-box">
          <h2>Snapchat</h2>
          <p>Fazer login</p>

          <input type="text" placeholder="Digite seu login" />
          <input type="password" placeholder="Digite sua senha" />

          <button>ENTRAR</button>

          <a href="#">Esqueceu a senha</a>
        </div>
      </div>

    </div>
  );
}