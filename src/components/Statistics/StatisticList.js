import PropTypes from 'prop-types';
import Statistics from './Statistics';
function StatisticList({ items }) {
    return (
        <section className="statistics">
            <h2 class="title">Upload stats</h2>
            <ul className="stat-list">
                {items.map(item => (
                    <li className="item" key={item.id}>
                        <Statistics
                            label={item.label}
                            percentage={item.percentage}
                        />
                    </li>
                ))}
            </ul>
        </section>
    );
}

StatisticList.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({ id: PropTypes.string.isRequired }),
    ),
};
export default StatisticList;
