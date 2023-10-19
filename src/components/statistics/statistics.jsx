import { OneStatEx } from './OneStatEx';
import css from './statistics.module.css';

export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {title ? <h2 className={css.title}>{title}</h2> : null}
      <ul className={css.statList}>
        {stats.map(oneItem => {
          return <OneStatEx {...oneItem} key={oneItem.id} />;
        })}
      </ul>
    </section>
  );
};

export function getRandomColor() {
  const r = Math.floor(Math.random() * 256); // Random value between 0 and 255 for red
  const g = Math.floor(Math.random() * 256); // Random value between 0 and 255 for green
  const b = Math.floor(Math.random() * 256); // Random value between 0 and 255 for blue
  return `rgb(${r},${g},${b})`;
}
