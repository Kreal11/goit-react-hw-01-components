import { OneFriend } from './one-friend';
import { StyledList } from './friends-list.styled';

export const FriendsList = ({ friends }) => {
  return (
    <StyledList>
      {friends.map(friend => {
        return <OneFriend {...friend} key={friend.id} />;
      })}
    </StyledList>
  );
};
