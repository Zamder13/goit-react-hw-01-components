import PropTypes from 'prop-types';
import {
  Table,
  Head,
  HeadRow,
  HeadItem,
  Body,
  BodyRow,
  BodyItem,
} from './TransactionHistory.styled';
const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <Head>
        <HeadRow>
          <HeadItem>Type</HeadItem>
          <HeadItem>Amount</HeadItem>
          <HeadItem>Currency</HeadItem>
        </HeadRow>
      </Head>

      <Body>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <BodyRow key={id}>
              <BodyItem>{type}</BodyItem>
              <BodyItem>{amount}</BodyItem>
              <BodyItem>{currency}</BodyItem>
            </BodyRow>
          );
        })}
      </Body>
    </Table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ),
};

export default TransactionHistory;
