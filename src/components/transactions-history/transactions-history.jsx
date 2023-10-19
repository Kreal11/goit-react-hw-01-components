import './transactions-history.module.css';
import { OneItem } from './one-item';

export const Transactions = ({ items }) => {
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => {
          return <OneItem {...item} key={item.id} />;
        })}
      </tbody>
    </table>
  );
};
