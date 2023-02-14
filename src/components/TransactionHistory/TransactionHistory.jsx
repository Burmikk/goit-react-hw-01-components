import PropTypes from 'prop-types';
import { Thead, Table, BodyRow, TableType } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <Thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </Thead>
      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <BodyRow key={id}>
            <TableType>{type}</TableType>
            <td>{amount}</td>
            <td>{currency}</td>
          </BodyRow>
        ))}
      </tbody>
    </Table>
  );
};

TransactionHistory.protoType = {
  item: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
