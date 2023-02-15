import PropTypes from 'prop-types';
import { Item, Status, Image } from './FriendListItem.styled';

export const FriendListItem = ({ friends }) =>
  friends.map(({ avatar, name, id, isOnline }) => (
    <Item key={id}>
      <Status flag={isOnline} />
      <Image src={avatar} alt="User avatar" width="48" />
      <p>{name}</p>
    </Item>
  ));

FriendListItem.protoTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
