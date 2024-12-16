import { NavLink } from "react-router-dom";

export const NavButton = ({path, text}) => {
  return (
    <NavLink to={path} className="navButton">
      <span className="navButton__text">{text}</span>
    </NavLink>
  )
}

