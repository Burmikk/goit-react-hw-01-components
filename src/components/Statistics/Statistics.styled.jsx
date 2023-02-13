import styled from 'styled-components';

export const Section = styled.section`
  width: 400px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50px;
`;

export const Title = styled.h2`
  margin: 0;
  padding-top: 30px;
  padding-bottom: 30px;
  text-align: center;
  background-color: white;
  border-radius: 10px 10px 0 0;
`;

export const List = styled.ul`
  margin: 0;

  display: flex;
  justify-content: space-between;
  text-align: center;
`;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function getColor(props) {
  switch (props.number) {
    case 'id-1':
      return '#4CC6FA';
    case 'id-2':
      return '#AB38F6';
    case 'id-3':
      return '#E64C67';
    case 'id-4':
      return '#22B8C2';
    case 'id-5':
      return 'gold';
  }
}
export const Item = styled.li`
  width: 80px;
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  text-align: center;
  background-color: ${getColor};
  :first-child {
    border-radius: 0 0 0 10px;
  }
  :last-child {
    border-radius: 0 0 10px 0;
  }
`;

export const FileFormat = styled.span`
  margin-bottom: 10px;
  color: white;
`;

export const Percentage = styled.span`
  font-size: 18px;
  font-weight: 700;
  color: white;
`;
