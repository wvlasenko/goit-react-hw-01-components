import PropTypes from 'prop-types';
import Statistics from './Statistics';
import s from './Statistic.module.css';
function StatisticList({ items }) {
    return (
        <section className={s.statistics}>
            <h2 className={s.title}>Upload stats</h2>
            <ul className={s.statList}>
                {items.map(item => (
                    <li
                        className={s.item}
                        key={item.id}
                        style={{ backgroundColor: getColor() }}
                    >
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
function getColor() {
    var color = Math.floor(Math.random() * Math.pow(256, 3)).toString(16);
    while (color.length < 6) {
        color = '0' + color;
    }
    return '#' + color;
}

StatisticList.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({ id: PropTypes.string.isRequired }),
    ),
};
export default StatisticList;
