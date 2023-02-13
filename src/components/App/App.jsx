import { Profile } from '../Profile/Profile';
import user from 'data/user';
import { Statistics } from '../Statistics/Statistics';
import data from 'data/data';
import { FriendList } from '../FriendList/FriendList';
import friends from 'data/friends';
import { TransactionHistory } from '../TransactionHistory/TransactionHistory';
import transactions from 'data/transactions';
import css from './app.module.css';

export const App = () => {
  return (
    <div className={css.container}>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      ></Profile>
      <Statistics stats={data} title="Upload stats"></Statistics>
      <FriendList friends={friends}></FriendList>
      {/* <TransactionHistory items={transactions}></TransactionHistory> */}
    </div>
  );
};
