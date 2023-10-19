import { StyledItem, StyledOnline } from './FriendsList.styled';

export const OneFriend = ({ avatar, name, isOnline }) => {
  return (
    <StyledItem>
      <StyledOnline $isOnline={isOnline}></StyledOnline>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </StyledItem>
  );
};
