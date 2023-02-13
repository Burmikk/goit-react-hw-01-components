import styled from 'styled-components';

export const Box = styled.div`
  width: 250px;
  height: 380px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 20px;
  margin-bottom: 50px;
`;

export const UserProfile = styled.div`
  text-align: center;
  padding: 30px;
  background-color: white;
  border-radius: 10px 10px 0 0;
`;

export const UserImg = styled.img`
  display: block;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-left: auto;
  margin-right: auto;
  background-color: gray;
`;

export const UserName = styled.p`
  color: black;
  font-size: 26px;
`;

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
