import PropTypes from 'prop-types';
import { List, Item, Photo, Status, Name } from './FriendList.styled';

const FriendList = ({ data }) => {
  return (
    <List>
      {data.map(({ avatar, name, isOnline, id }) => {
        console.log(avatar, name, isOnline, id);
        return (
          <Item key={id}>
            <Status online={isOnline}>{isOnline}</Status>
            <Photo src={avatar} alt="User avatar" width="48" />
            <Name>{name}</Name>
          </Item>
        );
      })}
    </List>
  );
};

FriendList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }),
  ),
};

export default FriendList;
