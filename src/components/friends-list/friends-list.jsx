import './friends-list.css';
import { OneFriend } from './one-friend';

export const FriendsList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map(friend => {
        return <OneFriend {...friend} key={friend.id} />;
      })}
    </ul>
  );
};
