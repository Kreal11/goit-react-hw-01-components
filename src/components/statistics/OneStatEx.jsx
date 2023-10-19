import css from './Statistics.module.css';

export const OneStatEx = ({ label, percentage }) => {
  return (
    <li className={css.item} style={{ backgroundColor: getRandomColor() }}>
      <span className={css.label}>{label}</span>
      <span className="percentage">{percentage}%</span>
    </li>
  );
};

function getRandomColor() {
  const r = Math.floor(Math.random() * 256); // Random value between 0 and 255 for red
  const g = Math.floor(Math.random() * 256); // Random value between 0 and 255 for green
  const b = Math.floor(Math.random() * 256); // Random value between 0 and 255 for blue
  return `rgb(${r},${g},${b})`;
}
