import Profile from './components/Profile/Profile';
import user from './jsons/user.json';
import Statistics from './components/Statistics/Statistics';
import statisticalData from './jsons/statistical-data.json';
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
            <Statistics
                title="Upload stats"
                label={statisticalData[0].label}
                percentage={statisticalData[0].percentage}
            />
            <Statistics
                title="Upload stats"
                label={statisticalData[1].label}
                percentage={statisticalData[1].percentage}
            />
            ;
        </div>
    );
}
