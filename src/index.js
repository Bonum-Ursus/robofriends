import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Hello from './Hello.js';
import * as serviceWorker from './serviceWorker';
import 'tachyons';

ReactDOM.render(<Hello greeting={"Hi, Man!"}/>, document.getElementById('root'));

serviceWorker.unregister();
