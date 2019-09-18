import {createGlobalStyle} from 'styled-components'
import * as mixins from './mixins';
import * as fonts from './fonts';
import colors from './colors';
import {GlobalStyles as NotifierGlobalStyles} from 'frontend/src/models/notifier/Notifier/style';
import {GlobalStyles as DropdownGlobalStyles} from 'frontend/src/components/Dropdown/style';

const GlobalStyle = createGlobalStyle`
  ${fonts.fontFace}

  *,
  *::before,
  *::after {
    position: relative;
    box-sizing: border-box;
    outline: none;
  }
  
  * {
    :first-child {
      margin-top: 0 !important;
    }

    :last-child {
      margin-bottom: 0 !important;
    }
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
  
  html {
    height: 100%;
    width: 100%;
    
    > *:not(body) {
      display: none !important;
    }
  }
  
  body {
    height: 100%;
    width: 100%;
    margin: 0;
    ${mixins.font()}
    color: ${colors.common.black};
    background-color: ${colors.bodyBackgroundColor};
  }
  
  button {
    ${mixins.font()}
  }
  
  .site-wrapper {
    display: flex;
    flex-flow: column;
    max-width: 1920px;
    min-width: 320px;
    overflow-x: hidden;
    margin: auto;
    min-height: 100%;
    ${mixins.media('(min-width: 1920px)', `
      border-left: 1px solid ${colors.common.border};
      border-right: 1px solid ${colors.common.border};
    `)}
  }
  
  ${NotifierGlobalStyles}
  ${DropdownGlobalStyles}
`;

export default GlobalStyle;
