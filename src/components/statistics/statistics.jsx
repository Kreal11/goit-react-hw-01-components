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
