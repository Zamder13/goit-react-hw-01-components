import PropTypes from 'prop-types';
import StatiscticsList from '../statisticsList/StatisticsList';
import { Section, Title } from './Statistics.styled';

const Statistics = ({ title, data }) => {
  return (
    <Section>
      <Title>{title}</Title>
      <StatiscticsList array={data} />
    </Section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
};

Statistics.defaultProps = {
  title: 'Statistics',
};

export default Statistics;
