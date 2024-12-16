import s from "./Contacts.module.scss";
import image from "/assets/images/contacts.png";

export const Contacts = () => {
  return (
    <div className={s.container}>
      <img src={image} className={s.image} />
      <div className={s.content}>
        <section className={s.content__adress}>
          <h1>Адреса в Москве</h1>
          <article>
            <h2>Угрешка</h2>
            <p>Угрешская улица 14с1</p>
          </article>
          <article>
            <h2>Волгоградская</h2>
            <p>Волгоградский проспект 32к5</p>
          </article>
          <article>
            <h2>Арбат</h2>
            <p>улица Новый Арбат 17</p>
          </article>
        </section>
        <section className={s.content__mode}>
          <article>
            <h2>Режим работы</h2>
            <p>10:00 - 22:00</p>
          </article>
          <article>
            <h3>+7 800 555 35 35</h3>
            <br />
            <h3>hello@Briskbarbers.ru</h3>
          </article>
        </section>
      </div>
    </div>
  )
}
