import PropTypes from 'prop-types';
import ProfileList from '../profileList/ProfileList';
import ProfileBox from '../profileBox/ProfileBox';
import { Wrapper } from './Profile.styled';

const Profile = ({ data }) => {
  console.log(data);
  return (
    <Wrapper>
      <ProfileBox props={data} />
      <ProfileList user={data.stats} />
    </Wrapper>
  );
};

Profile.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Profile;
