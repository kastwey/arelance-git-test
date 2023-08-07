import { NavLink } from "react-router-dom";
export function Header() {
  return (
    <>
      <nav aria-label="Menú de navegación">
        <ul>
          <li>
            <NavLink to="/">Inicio</NavLink>
          </li>
          <li>
            <NavLink to="people/juanLuis">Juan Luis</NavLink>
          </li>
          <li>
            <NavLink to="people/juanjo">Juanjo</NavLink>
          </li>
          <li><NavLink to="about">Sobre el proyecto</NavLink></li>
        </ul>
      </nav>
    </>
  );
}
