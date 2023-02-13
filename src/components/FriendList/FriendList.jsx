import css from './FriendList.module.css';
import PropTypes from 'prop-types';
export const FriendList = ({ friends }) => {
  const friendsMarkup = friends.map(({ avatar, name, id, isOnline }) => (
    <li className={css.item} key={id}>
      <span className={isOnline ? css.online : css.status}></span>
      <img className={css.img} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  ));
  return <ul className={css.friend_list}>{friendsMarkup}</ul>;
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
