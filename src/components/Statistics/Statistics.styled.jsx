import styled from 'styled-components';
import { getRandomHexColor } from 'helpers/helpers';

export const Section = styled.section`
  width: 500px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50px;
  overflow: hidden;
  border-radius: 20px;
`;

export const Title = styled.h2`
  margin: 0;
  padding-top: 30px;
  padding-bottom: 30px;
  text-align: center;
  background-color: white;
`;

export const List = styled.ul`
  margin: 0;
  width: inherit;
  display: flex;
  justify-content: space-between;
  text-align: center;
`;

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
    default:
      return getRandomHexColor();
  }
}
export const Item = styled.li`
  width: inherit;
  padding: 10px 0px;
  display: flex;
  flex-direction: column;
  text-align: center;
  background-color: ${getColor};
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
