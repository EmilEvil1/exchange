import React from 'react';
import {Switch, Route} from 'react-router-dom';
import routes from 'frontend/src/routes';
import * as CS from './style';

class Main extends React.PureComponent {
  render() {
    return (
      <CS.Root>
        <Switch>
          {routes.map((route, i) => (
            <Route {...route} key={i}/>
          ))}
        </Switch>
      </CS.Root>
    )
  }
}

export default Main;
