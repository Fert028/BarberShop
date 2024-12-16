import s from "./LogIn.module.scss";
import scissors from "/assets/icons/scissors.svg";
import pamazok from "/assets/icons/pamazok.svg";

import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUser } from "../../store/usersSlice";

export const LogIn = () => {
  const [tel, setTel] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");

  const users = useSelector(state => state.users);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(users));
  }, [users]);

  const dispatch = useDispatch();

  const signUp = () => {
    dispatch(addUser({ tel, name, surname }));
    setTel("");
    setName("");
    setSurname("");
  }

  return (
    <div className={s.wrapper}>
      <img className={s.scissors} src={scissors} alt="scissors" />
      <img className={s.pamazok} src={pamazok} alt="pamazok" />
      <div className={s.form}>
        <input 
          type="tel" 
          placeholder="Номер телефона" 
          className={s.input} 
          value={tel}
          onChange={(e) => setTel(e.target.value)}
        />
        <input 
          type="text" 
          placeholder="Имя" 
          className={s.input} 
          value={name}
          onChange={(e) => setName(e.target.value)}
          />
        <input 
          type="text" 
          placeholder="Фамилия" 
          className={s.input} 
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
        />
        <button 
          className={s.button}
          onClick={signUp}
        >
          Записаться
        </button>
      </div>
    </div>
  )
}
