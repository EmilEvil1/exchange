import 'src/utils/domPolyfills';
import React from 'react';
import {render} from 'react-dom';
import getDOMroot from 'src/utils/getDOMroot';
import App from 'src/models/app/App';

render(<App />, getDOMroot());
