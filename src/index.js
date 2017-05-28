import React from 'react';
import ReactDOM from 'react-dom';
import Notebook from './components/Notebook';
import registerServiceWorker from './registerServiceWorker';
import './styles/index.css';

ReactDOM.render(<Notebook />, document.getElementById('root'));
registerServiceWorker();
