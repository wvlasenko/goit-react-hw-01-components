import Proptypes from 'prop-types';
import defaultImage from '../Profile/defaultAvatar.svg';
function Friend({ avatar = defaultImage, name }) {
    // const statusStyle =
    //     FriendStatus.status +
    //     '' +
    //     (isOnline ? FriendStatus.online : FriendStatus.offLine);
    return (
        <>
            <span className="status"></span>
            <img className="avatar" src={avatar} alt={name} width="48" />
            <p className="name">{name}</p>
        </>
    );
}
Friend.propTypes = {
    avatar: Proptypes.string,
    name: Proptypes.string.isRequired,
    // isOnline: Proptypes.bool.isRequired,
};

export default Friend;
