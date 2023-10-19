import { StyledItem, StyledOnline } from './FriendsList.styled';

export const OneFriend = ({ avatar, name, isOnline }) => {
  return (
    <StyledItem>
      {isOnline ? (
        <StyledOnline $yes></StyledOnline>
      ) : (
        <StyledOnline $no></StyledOnline>
      )}
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </StyledItem>
  );
};
