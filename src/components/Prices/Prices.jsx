import s from './Prices.module.scss';

export const Prices = ({price, service}) => {
  return (
    <li className={s.container}>
      <p>{service}</p>
      <h1>От {price} ₽</h1>
    </li>
  )
}
