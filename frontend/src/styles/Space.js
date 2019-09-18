import styled, {css} from 'styled-components';
import * as mixins from './mixins';

const Space = styled.div`
  ${props => props.$backgroundColor && `background-color: ${props.$backgroundColor};`}
  ${props => {
    const isEnabledXS = props.$xs !== undefined;
    const isEnabledSM = props.$sm !== undefined;
    const isEnabledMD = props.$md !== undefined;
    if (isEnabledXS && !isEnabledSM && !isEnabledMD) {
      return css`
        ${props.$xs.height && `height: ${props.$xs.height};`}
        ${props.$xs.width && `width: ${props.$xs.width};`}
      `;
    }
    if (isEnabledXS && isEnabledSM && !isEnabledMD) {
      return css`
        ${isEnabledXS && mixins.media('xs',css`
          ${props.$xs.height && `height: ${props.$xs.height};`}
          ${props.$xs.width && `width: ${props.$xs.width};`}
        `)}
        ${isEnabledSM && mixins.media('xs-up', css`
          ${props.$sm.height && `height: ${props.$sm.height};`}
          ${props.$sm.width && `width: ${props.$sm.width};`}
        `)}
      `;
    }
    return css`
      ${isEnabledXS && mixins.media('xs', css`
        ${props.$xs.height && `height: ${props.$xs.height};`}
        ${props.$xs.width && `width: ${props.$xs.width};`}
      `)}
      ${isEnabledSM && mixins.media('sm', css`
        ${props.$sm.height && `height: ${props.$sm.height};`}
        ${props.$sm.width && `width: ${props.$sm.width};`}
      `)}
      ${isEnabledMD && mixins.media('md', css`
        ${props.$md.height && `height: ${props.$md.height};`}
        ${props.$md.width && `width: ${props.$md.width};`}
      `)}
    `;
  }}
`;

export default Space;
