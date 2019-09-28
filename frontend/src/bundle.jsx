import 'frontend/utils/domPolyfills';
import React from 'react';
import {render} from 'react-dom';
import getDOMroot from 'frontend/utils/getDOMroot';
import {App} from 'frontend/src/models/app';

render(<App />, getDOMroot());
