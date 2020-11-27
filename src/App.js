import Profile from './components/Profile/Profile';
import user from './jsons/user.json';
import statisticalData from './jsons/statistical-data.json';
import StatisticList from './components/Statistics/StatisticList';
import FriendList from './components/FriendsList/FriendList';
import friends from './jsons/friends.json';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import transactions from './jsons/transactions.json';
export default function App() {
    return (
        <div>
            <Profile
                name={user.name}
                tag={user.tag}
                location={user.location}
                avatar={user.avatar}
                stats={user.stats}
            />
            <StatisticList title="Upload stats" items={statisticalData} />
            <FriendList friends={friends} />

            <TransactionHistory items={transactions} />
        </div>
    );
}
