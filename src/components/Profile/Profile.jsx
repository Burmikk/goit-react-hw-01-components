import PropTypes from 'prop-types';
import {
  UserProfile,
  UserImg,
  Box,
  UserName,
  List,
  ListItem,
  Label,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Box>
      <UserProfile>
        <UserImg src={avatar} alt="User avatar" />
        <UserName>{username}</UserName>
        <p class="tag">{tag}</p>
        <p class="location">{location}</p>
      </UserProfile>

      <List>
        <ListItem>
          <Label class="label">Followers</Label>
          <span class="quantity">{stats.followers}</span>
        </ListItem>
        <ListItem>
          <Label class="label">Views</Label>
          <span class="quantity">{stats.views}</span>
        </ListItem>
        <ListItem>
          <Label class="label">Likes</Label>
          <span class="quantity">{stats.likes}</span>
        </ListItem>
      </List>
    </Box>
  );
};

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.objectOf(PropTypes.number),
};
