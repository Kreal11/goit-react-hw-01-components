import './transactions-history.css';
import { OneItem } from './one-item';

export const Transactions = ({ items }) => {
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>{items.type}</th>
          <th>{items.amount}</th>
          <th>{items.currency}</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ ...item }) => {
          return <OneItem {...item} key={item.id} />;
        })}
      </tbody>
    </table>
  );
};
