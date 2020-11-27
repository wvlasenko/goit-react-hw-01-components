import PropTypes from 'prop-types';
import Friend from './Friend';

export default function Friendlist({ friends }) {
    return (
        <ul>
            {friends.map(friend => (
                <li key={friend.id}>
                    <Friend avatar={friend.avatar} name={friend.name} />
                </li>
            ))}
        </ul>
    );
}

Friend.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({ id: PropTypes.string.isRequired }),
    ),
};
