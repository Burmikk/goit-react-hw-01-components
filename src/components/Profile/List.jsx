import { ListItem, Label, List } from './List.styled';
import PropTypes from 'prop-types';

export const ListInfo = ({ stats }) => {
  return (
    <List>
      <ListItem>
        <Label>Followers</Label>
        <span>{stats.followers}</span>
      </ListItem>
      <ListItem>
        <Label>Views</Label>
        <span>{stats.views}</span>
      </ListItem>
      <ListItem>
        <Label>Likes</Label>
        <span>{stats.likes}</span>
      </ListItem>
    </List>
  );
};

List.propTypes = {
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
