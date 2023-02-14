import styled from 'styled-components';

export const List = styled.ul`
  margin: 0;
  display: flex;
  background-color: #f4f6f9;
  border-radius: 0 0 10px 10px;
`;

export const ListItem = styled.li`
  width: 83px;
  display: flex;
  flex-direction: column;
  padding-top: 15px;
  padding-bottom: 15px;
  text-align: center;
  border-top: 1px solid #d8dbde;
  :not(:last-child) {
    border-right: 1px solid #d8dbde;
  }
`;
export const Label = styled.span`
  font-size: 12px;
  margin-bottom: 5px;
`;
