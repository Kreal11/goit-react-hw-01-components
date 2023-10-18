import { Profile } from './profile/profile';
import { Statistics } from './statistics/statistics';
import user from '../assets/user.json';
import data from '../assets/data.json';
// import friends from '../assets/friends.json';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics stats={data} title="Upload stats" />
    </div>
  );
};
