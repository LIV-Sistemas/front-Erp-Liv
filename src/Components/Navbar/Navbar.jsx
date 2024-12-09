import React, { useState } from "react";
import "./Navbar.css"; // Arquivo CSS para os estilos

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isCadastroOpen, setCadastroOpen] = useState(false);
  const [isEstoqueOpen, setEstoqueOpen] = useState(false);
  const [isFrenteDeLojaOpen, setFrenteDeLojaOpen] = useState(false);


  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-logo">Menu</h1>
        <button
          className="navbar-toggle"
          onClick={() => setMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
        <ul className={`navbar-menu ${isMenuOpen ? "show" : ""}`}>
            {/*INICIO DROPDOWN FRENTE DE LOJA */}
            <li
            className="navbar-item dropdown"
            onMouseEnter={() => setFrenteDeLojaOpen(true)}
            onMouseLeave={() => setFrenteDeLojaOpen(false)}
          >
            Frente de Loja
            <ul
              className={`dropdown-menu ${
                isFrenteDeLojaOpen || isMenuOpen ? "show" : ""
              }`}
            >
              <li className="dropdown-item">Vendas</li>
              <li className="dropdown-item">Pedidos</li>
            </ul>
          </li>
            {/*FIM DROPDOWN FRENTE DE LOJA */}
          <li
            className="navbar-item dropdown"
            onMouseEnter={() => setCadastroOpen(true)}
            onMouseLeave={() => setCadastroOpen(false)}
          >
            Cadastro
            <ul
              className={`dropdown-menu ${
                isCadastroOpen || isMenuOpen ? "show" : ""
              }`}
            >
              <li className="dropdown-item">Clientes</li>
              <li className="dropdown-item">Funcionários</li>
              <li className="dropdown-item">Mercadorias</li>
            </ul>
          </li>
          <li
            className="navbar-item dropdown"
            onMouseEnter={() => setEstoqueOpen(true)}
            onMouseLeave={() => setEstoqueOpen(false)}
          >
            Estoque
            <ul
              className={`dropdown-menu-last-button ${
                isEstoqueOpen || isMenuOpen ? "show" : ""
              }`}
            >
              <li className="dropdown-item">Mercadorias</li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
