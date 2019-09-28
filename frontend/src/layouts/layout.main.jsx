import React from 'react';
import {
  Header,
  SubHeader,
  Main,
  Footer,
} from 'frontend/src/components';

class Layout extends React.PureComponent {
  render() {
    return (
      <>
        <Header />
        {/*<SubHeader />*/}
        <Main />
        <Footer />
      </>
    );
  }
}

export default Layout;
