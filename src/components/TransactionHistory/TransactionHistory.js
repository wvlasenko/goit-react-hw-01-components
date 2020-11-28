import PropTypes from 'prop-types';
import Transaction from './Transaction';
import s from './TransactionHistory.module.css';

function TransactionHistory({ items }) {
    return (
        <section className="task 4">
            <table className={s.transactionHistory}>
                <thead>
                    <tr>
                        <th>Type</th>
                        <th>Amount</th>
                        <th>Currency</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(item => (
                        <tr key={item.id}>
                            <Transaction
                                type={item.type}
                                amount={item.amount}
                                currency={item.currency}
                            />
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
}
TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({ id: PropTypes.string.isRequired }),
    ),
};

export default TransactionHistory;
