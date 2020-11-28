import PropTypes from 'prop-types';
import Statistics from './Statistics';
import s from './Statistic.module.css';
function StatisticList({ items }) {
    return (
        <section className={s.statistics}>
            <h2 className={s.title}>Upload stats</h2>
            <ul className={s.statList}>
                {items.map(item => (
                    <li className={s.item} key={item.id}>
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
