import { Container } from './App.styled';
import Profile from '../profile/Profile.jsx';
import Statistics from '../statistics/Statistics';
import FriendList from '../friendList/FriendList';
import TransactionHistory from '../transactionHistory/TransactionHistory';
import user from '../../data/user.json';
import data from '../../data/data.json';
import friends from '../../data/friends.json';
import transactions from '../../data/transactions.json';

function App() {
  return (
    <Container>
      <Profile data={user} />
      <Statistics data={data} />
      <FriendList data={friends} />
      <TransactionHistory items={transactions} />
    </Container>
  );
}

export default App;
