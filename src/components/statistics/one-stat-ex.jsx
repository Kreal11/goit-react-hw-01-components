import css from './statistics.module.css';

export const OneStatEx = ({ label, percentage }) => {
  return (
    <li className={css.item}>
      <span className={css.label}>{label}</span>
      <span className="percentage">{percentage}%</span>
    </li>
  );
};
