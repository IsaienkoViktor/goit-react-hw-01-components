import { Profile } from './Profile/Profile.js';
import { Statistics } from './Statistics/Statistics.js';
import { FriendList } from './FriendList/FriendList.js';
import { TransactionHistory } from './TransactionHistory/TransactionHistory.js';

import transactions from '../data/transactions.json';
import friends from '../data/friends.json';
import data from 'data/data.json';
import user from 'data/user.json';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />;
      <TransactionHistory items={transactions} />;
    </>
  );
};
