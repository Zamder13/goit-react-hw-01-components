import PropTypes from 'prop-types';
import { List, Item, Info } from './ProfileList.styled';

const ProfileList = ({ user }) => {
  return (
    <List>
      <Item>
        <Info info>Followers:&#32;</Info>
        <Info>{user.followers}</Info>
      </Item>
      <Item>
        <Info info>Views:&#32;</Info>
        <Info>{user.views}</Info>
      </Item>
      <Item>
        <Info info>Likes:&#32;</Info>
        <Info>{user.likes}</Info>
      </Item>
    </List>
  );
};

ProfileList.propTypes = {
  user: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
export default ProfileList;
