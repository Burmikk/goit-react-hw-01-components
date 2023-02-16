import { FriendListItem } from './FriendListItem/FriendListItem';
import { List } from './FriendList.styled';
import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
  const markupItems = friends.map(({ avatar, name, id, isOnline }) => (
    <FriendListItem name={name} key={id} isOnline={isOnline} avatar={avatar} />
  ));
  return <List>{markupItems}</List>;
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
