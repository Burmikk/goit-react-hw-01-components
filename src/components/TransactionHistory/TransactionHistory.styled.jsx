import styled from 'styled-components';

export const Table = styled.table`
  width: 700px;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 20px;
`;

export const Thead = styled.thead`
  background-color: #02bdd5;
  height: 50px;
  color: white;
  text-transform: uppercase;
`;

export const BodyRow = styled.tr`
  height: 40px;
  background-color: white;
  text-align: center;
  color: #7f8184;
  :nth-child(2n) {
    background-color: #ecf1f3;
  }
`;

export const TableType = styled.td`
  text-transform: capitalize;
`;
