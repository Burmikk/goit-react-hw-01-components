import styled from 'styled-components';

export const Item = styled.li`
  background-color: white;

  padding-left: 15px;
  display: flex;
  gap: 20px;
  align-items: center;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
`;

function setBgColor({ flag }) {
  return flag ? 'green' : 'red';
}

export const Status = styled.span`
  display: block;
  width: 20px;
  height: 20px;
  background-color: ${setBgColor};
  border-radius: 50%;
`;

export const Image = styled.img`
  border-radius: 10px;
  background-color: grey;
`;
