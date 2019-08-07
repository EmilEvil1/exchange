import styled from 'styled-components';
import colors from 'frontend/src/styles/colors';

const getPadding = props => {
  const {padding = 16} = props;
  return `
    padding: ${padding}px;
  `;
};

const Paper = styled.div`
  ${getPadding}
  width: 100%;
  background-color: ${colors.Paper.backgroundColor};
  border-radius: 4px;
`;

export default Paper;
