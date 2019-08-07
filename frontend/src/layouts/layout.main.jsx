import React from 'react';
import {
  Header,
  SubHeader,
  Main,
  Footer,
} from 'frontend/src/components';
import {GlobalStyle} from 'frontend/src/styles';

class Layout extends React.PureComponent {
  render() {
    return (
      <>
        <Header />
        <SubHeader />
        <Main />
        <Footer />
        <GlobalStyle />
      </>
    );
  }
}

export default Layout;
