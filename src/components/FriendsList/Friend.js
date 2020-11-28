import Proptypes from 'prop-types';
import defaultImage from '../Profile/defaultAvatar.svg';
import s from './FriendList.module.css';
function Friend({ avatar = defaultImage, name, isOnline }) {
    // console.log(isOnline);
    return (
        <>
            <span
                className={s.status}
                style={{ backgroundColor: isOnline ? 'green' : 'red' }}
            ></span>
            <img className={s.avatar} src={avatar} alt={name} width="48" />
            <p className={s.name}>{name}</p>
        </>
    );
}
Friend.propTypes = {
    avatar: Proptypes.string,
    name: Proptypes.string.isRequired,
    isOnline: Proptypes.bool.isRequired,
};

export default Friend;
