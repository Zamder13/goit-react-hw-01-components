import PropTypes from 'prop-types';
import { List, Item, Info } from './ProfileList.styled';

const ProfileList = ({ user }) => {
  //   //   console.log(user);
  return (
    <List>
      <Item>
        <Info>Followers:&#32;</Info>
        <Info>{user.followers}</Info>
      </Item>
      <Item>
        <Info>Views:&#32;</Info>
        <Info>{user.views}</Info>
      </Item>
      <Item>
        <Info>Likes:&#32;</Info>
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
