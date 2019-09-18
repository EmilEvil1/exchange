import styled from 'styled-components';

export const GlobalStyles = `
  .dropdown {
    z-index: 1000;
    position: fixed;
    transition: visibility 200ms linear, opacity 200ms linear;
    visibility: visible;
    opacity: 1;
    
    &_hidden {
      visibility: hidden;
      opacity: 0;
    }
  }
`;

export const Root = styled.div``;
