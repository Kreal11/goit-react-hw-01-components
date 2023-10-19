import {
  StyledItem,
  StyledIsNotOnline,
  StyledIsOnline,
} from './friends-list.styled';

export const OneFriend = ({ avatar, name, isOnline }) => {
  return (
    <StyledItem>
      {isOnline ? (
        <StyledIsOnline></StyledIsOnline>
      ) : (
        <StyledIsNotOnline></StyledIsNotOnline>
      )}
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </StyledItem>
  );
};
