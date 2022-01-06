import PropTypes from 'prop-types';
import { Container, Photo, Info } from './ProfileBox.styled';

export const ProfileBox = ({ props }) => {
  return (
    <Container>
      <Photo src={props.avatar} alt="User avatar" />
      <Info>{props.username}</Info>
      <Info>&#64;{props.tag}</Info>
      <Info>{props.location}</Info>
    </Container>
  );
};

ProfileBox.propTypes = {
  props: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
  }),
};

export default ProfileBox;
