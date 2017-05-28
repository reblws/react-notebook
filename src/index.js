import React from 'react';
import ReactDOM from 'react-dom';
import Notebook from './components/Notebook';
import registerServiceWorker from './registerServiceWorker';
import './styles/normalize.css';
import './styles/index.css';

ReactDOM.render(<Notebook />, document.getElementById('root'));
registerServiceWorker();
