import styled from 'styled-components';

export const GlobalStyles = `
  .notifier {
    z-index: 9999;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    display: flex;
    flex-flow: column-reverse wrap-reverse;
    align-items: flex-start;
    align-content: flex-start;
    padding: 10px;
  }
`;

export const Root = styled.div``;

export const Item = styled.div`
  width: 350px;
  padding: 10px;
`;
