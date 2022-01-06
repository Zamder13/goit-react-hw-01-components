import PropTypes from 'prop-types';
import { List, Item, Label, Percentage } from './StatisticsList.styled';

const StatiscticsList = ({ array }) => {
  return (
    <List>
      {array.map(({ id, label, percentage }) => {
        return (
          <Item color={id} key={id}>
            <Label>{label}</Label>
            <Percentage>{percentage}&#37;</Percentage>
          </Item>
        );
      })}
    </List>
  );
};

StatiscticsList.propTypes = {
  array: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};

export default StatiscticsList;
