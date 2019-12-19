import styled from 'styled-components';
import {colors, mixins} from 'src/styles';

export const Root = styled.form`
  width: 350px;
  max-width: 100%;
`;

export const Title = styled.h1`
  display: block;
  text-transform: uppercase;
  text-align: center;
  ${mixins.font({
    size: '28px',
    weight: 500,
  })}
  border-bottom: 2px solid ${colors.primary};
  margin-top: 0;
  margin-bottom: 24px;
  padding-bottom: 10px;
`;

export const Rules = styled.div`
  display: flex;
`;

const getRuleViewColor = props => {
  if (props.$isInvalid) {
    return colors.common.red;
  }
  if (props.$isValid) {
    return colors.primary;
  }
  return '#606060';
};

export const RuleView = styled.div`
  ${mixins.font({
    size: '18px',
    weight: 700,
  })}
  transition: color 200ms linear;
`;

const getRuleTextColor = props => {
  if (props.$isInvalid) {
    return colors.common.red;
  }
  return '#606060';
};

export const RuleText = styled.div`
  transition: color 200ms linear;
`;

export const Rule = styled.div`
  flex: 0 0 25%;
  text-align: center;
  
  > ${RuleView} {
    color: ${getRuleViewColor};
  }
  
  > ${RuleText} {
    color: ${getRuleTextColor};
  }
`;
