import { OneFriend } from './OneFriend';
import { StyledList } from './FriendsList.styled';

export const FriendsList = ({ friends }) => {
  return (
    <StyledList>
      {friends.map(friend => {
        return <OneFriend {...friend} key={friend.id} />;
      })}
    </StyledList>
  );
};
