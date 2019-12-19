import React from 'react';
import {
  Footer,
  Header,
  Main,
} from 'src/components';

class Layout extends React.PureComponent {
  render() {
    return (
      <>
        <Header />
        <Main />
        <Footer />
      </>
    );
  }
}

export default Layout;
