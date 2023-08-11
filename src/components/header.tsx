import { NavLink } from "react-router-dom";
import React from "react";
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  return (
    <>
      <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-expanded={isMenuOpen}>{`${isMenuOpen ? "colapsar" : "expandir"} menú`}</button>
      {isMenuOpen && (
      <nav aria-label="Menú de navegación">
        <ul>
          <li>
            <NavLink to="/">Inicio</NavLink>
          </li>
          <li>
            <NavLink to="/people/juanLuis">Juan Luis</NavLink>
          </li>
          <li>
            <NavLink to="/people/juanjo">Juanjo</NavLink>
          </li>
          <li>
            <NavLink to="/people/agus">Agus</NavLink>
          </li>
          <li>
            <NavLink to="/people/georgiana">Georgiana</NavLink>
          </li>
          <li>
            <NavLink to="/people/moi">Moi</NavLink>
          </li>
          <li>
            <NavLink to="/about">Sobre el proyecto</NavLink>
          </li>
        </ul>
      </nav>
      )}

    </>
  );
}
