import s from "./Home.module.scss";
import { NavLink } from "react-router-dom";
import barber from "/assets/images/barber.png";

export const Home = () => {
  return (
    <div className={s.container}>
      <div className={s.header}>
        <section className={s.header__content}>
          <h1 className={s.header__content__hero}>
            Сеть барбершопов 
            <NavLink to="/" className={s.link}> BriskBarbers</NavLink>
          </h1>
          <p>Мы ничего не копировали, и не стремились ворваться в тренд. Мы искренне и увлеченно несли культуру западных барбершопов сперва в Москву, а затем и по всей стране. Рисковали, создавали и экспериментировали, год от года строя сильнейшую команду барберов.</p>
          <NavLink to="/login" className={s.sign}>Записаться</NavLink>
        </section>
      </div>
      <div className={s.history}>
        <section className={s.history__content}>
          <p>Наша парикмахерская появилась в 2013 году, когда даже самым прогрессивным и модным еще нужно было объяснять значение слова «барбершоп»</p>
        </section>
        <img src={barber} className={s.barberImg} />
      </div>
      <div className={s.history}>
        <section className={s.history__content}>
          <h1>Хорошо знаем свое дело</h1>
          <br />
          <p>О нашей истории пишут издания от StarHit до РБК, а «Афиша.Лучшее» еще в 2014 году добавило нас в список из 30 главных досуговых мест Москвы — нужно ли говорить, что мы действительно хорошо знаем свое дело?</p>
        </section>
      </div>
    </div>
  )
}
