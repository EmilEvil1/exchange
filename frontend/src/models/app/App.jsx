import React from 'react';
import {Provider} from 'react-redux';
import {I18nextProvider} from 'react-i18next';
import {Router} from 'react-router-dom';
import {store, history} from 'src/redux/store';
import {main as MainLayout} from 'src/layouts';
import actions from 'src/redux/actions';
import i18n from 'src/i18n';
import hot from 'src/utils/hot';
import {GlobalStyle} from 'src/styles';

@hot(module)
class App extends React.PureComponent {
  componentDidMount() {
    store.dispatch(actions.app.init());
  }

  render() {
    return (
      <>
        <Provider store={store}>
          <I18nextProvider i18n={i18n}>
            <Router history={history}>
              <MainLayout />
            </Router>
          </I18nextProvider>
        </Provider>
        <GlobalStyle />
      </>
    );
  }
}

export default App;
