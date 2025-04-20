import Profile from '../Profile/Profile';
import FriendList from '../FriendList/FriendList';



import userData from '../Profile/userData.json';
import friends from '../FriendList/friends.json';

export default function App() {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />

      <FriendList friends={friends}/>
      {/* <TransactionHistory /> */}
    </>
  );
}
