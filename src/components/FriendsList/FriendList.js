import PropTypes from 'prop-types';
import Friend from './Friend';
import s from './FriendList.module.css';
export default function Friendlist({ friends }) {
    return (
        <section className="task 3">
            <ul className={s.friendList}>
                {friends.map(friend => (
                    <li className={s.item} key={friend.id}>
                        <Friend
                            avatar={friend.avatar}
                            name={friend.name}
                            isOnline={friend.isOnline}
                        />
                    </li>
                ))}
            </ul>
        </section>
    );
}

Friend.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({ id: PropTypes.string.isRequired }),
    ),
};
