import PropTypes from 'prop-types';
export default function Statistics({ label, percentage }) {
    return (
        <>
            <span className="label"> {label}</span>
            <span className="percentage"> {percentage}%</span>
        </>
    );
}

Statistics.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
};
