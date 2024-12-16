import s from "./Header.module.scss";
import logo from "/assets/icons/logo.svg";
import { NavButton } from "../NavButton/NavButton";
import { NavLink } from "react-router-dom";

export const Header = () => {
  const routes = [
    {
      id: 1,
      path: "/",
      text: "Главная"
    },
    {
      id: 2,
      path: "/services",
      text: "Услуги"
    },
    {
      id: 3,
      path: "/contacts",
      text: "Контакты"
    }
  ]

  return (
    <header className={s.header}>
      <NavLink to="/" className={s.logo__wrapper}>
        <img src={logo} className={s.logo} />
      </NavLink>
      <nav className={s.nav}>
        {routes.map(el => (
          <NavButton key={el.id} path={el.path} text={el.text} />
        ))}
      </nav>
      <nav className={s.sign__wrapper}>
        <NavLink to="/login" className={s.sign}>Записаться</NavLink>
      </nav>
    </header>
  )
}
