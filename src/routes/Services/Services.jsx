import s from './Services.module.scss'
import image from '/assets/images/services.png'
import { Prices } from '../../components/Prices/Prices'


const services = [
  {price: 2500, service: 'Мужская стрижка'},
  {price: 1500, service: 'Стрижка усов и бороды'},
  {price: 1400, service: 'Камуфляж бороды'},
  {price: 1800, service: 'Бритье головы'},
  {price: 2500, service: 'Стрижка машинкой'},
  {price: 1500, service: 'Моделирование бороды'},
  {price: 1400, service: 'Бритье опаснной бритвой'},
  {price: 1800, service: 'Детская стрижка'},
]

export const Services = () => {
  return (
    <div className={s.container}>
      <div className={s.content}>
        <div className={s.content__header}>
          <h1>Услуги</h1>
          <p>Здесь вы можете ознакомиться с нашими услугами</p>
        </div>
        <div className={s.content__prices}>
          <ul>
            {services.map((service) => <Prices key={service.service} {...service} />)}
          </ul>
        </div>
      </div>
      <img className={s.image} src={image} alt="services" />
    </div>
  )
}
