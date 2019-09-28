import styled from 'styled-components';
import colors from '../colors';

const getSpacing = props => {
  const {$spacing = 16} = props;
  return `
    padding: ${$spacing}px;
  `;
};

const Paper = styled.div`
  ${getSpacing}
  width: 100%;
  background-color: ${colors.Paper.backgroundColor};
  border-radius: 4px;
`;

export default Paper;
