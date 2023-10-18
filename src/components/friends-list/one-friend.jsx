export const OneFriend = ({ avatar, name, isOnline }) => {
  return (
    <li className="item">
      {isOnline ? (
        <span
          className="status"
          style={{
            backgroundColor: '#008000',
            display: 'block',
            width: '10px',
            height: '10px',
            borderRadius: '50%',
          }}
        ></span>
      ) : (
        <span
          className="status"
          style={{
            backgroundColor: '#FF0000',
            display: 'block',
            width: '10px',
            height: '10px',
            borderRadius: '50%',
          }}
        ></span>
      )}
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
};
