import styled from 'styled-components';
import Color from 'color';
import {colors} from 'frontend/src/styles';
// import {Button as BaseButton} from 'src/components';

const getRootStyle = (props) => {
  switch (props.$type) {
    case 'notify': {
      return `
        color: ${colors.notifier.notifyText};
        background-color: ${colors.notifier.notify};
      `;
    }
    case 'warning': {
      return `
        color: ${colors.notifier.warningText};
        background-color: ${colors.notifier.warning};
      `;
    }
    case 'error': {
      return `
        color: ${colors.notifier.errorText};
        background-color: ${colors.notifier.error};
      `;
    }
    case 'success': {
      return `
        color: ${colors.notifier.successText};
        background-color: ${colors.notifier.success};
      `;
    }
    default: {
      return `
        color: ${colors.notifier.bodyText};
        background-color: ${colors.white};
      `;
    }
  }
};

const isHiddenRoot = (props) => {
  if (props.$isHidden) {
    return `opacity: 0;`;
  }
  return undefined;
};

export const Root = styled.div`
  border-radius: 4px;
  box-shadow: 0 2px 4px 0 ${Color(colors.secondaryText).alpha(0.1).string()};
  pointer-events: auto;
  transition: opacity 0.2s linear;
  ${getRootStyle}
  ${isHiddenRoot}
`;

export const Header = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 5px 5px 5px 15px;
`;

export const Title = styled.div`
  flex: 1 1 auto;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 12px;
  padding: 10px 15px 0 0;
  word-break: break-word;
`;

export const Message = styled.div`
  word-break: break-word;
  padding: 0 15px 15px;
`;

// export const Button = styled(BaseButton)`
//   color: inherit;
//   font-size: 12px;
//   height: auto;
//   line-height: inherit;
//   padding: 8px;
//
//   :hover,
//   :active {
//     color: inherit;
//     opacity: 0.8;
//   }
// `;
