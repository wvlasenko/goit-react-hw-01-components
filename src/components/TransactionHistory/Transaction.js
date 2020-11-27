import Proptypes from 'prop-types';
function Transaction({ type, amount, currency }) {
    return (
        <>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
        </>
    );
}
Transaction.propTypes = {
    type: Proptypes.string.isRequired,
    amount: Proptypes.string.isRequired,
    currency: Proptypes.string.isRequired,
};
export default Transaction;
