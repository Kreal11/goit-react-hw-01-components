export const OneFriend = ({ avatar, name, isOnline }) => {
  return (
    <li className="item">
      {isOnline ? (
        <span
          className="status"
          style={{
            backgroundColor: '#008000',
            width: 5,
            height: 5,
            borderRadius: '50%',
          }}
        >
          Online
        </span>
      ) : (
        <span className="status" style={{ backgroundColor: '#FF0000' }}>
          Offline
        </span>
      )}
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
};
