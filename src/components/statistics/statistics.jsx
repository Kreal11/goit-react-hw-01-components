import { Onestatex } from './one-stat-ex';
import './statistics.css';

export const Statistics = ({ title, stats }) => {
  return (
    <section className="statistics">
      {title ? <h2 className="title">{title}</h2> : null}

      <ul className="stat-list">
        {stats.map(({ ...oneItem }) => {
          return <Onestatex {...oneItem} key={oneItem.id} />;
        })}
      </ul>
    </section>
  );
};
