import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'; /*react component*/
import {createStore} from 'redux'; /*createStore is a function*/

import App from './Components/App';
import reducers from './reducers';

ReactDOM.render(
<Provider store={createStore(reducers)}>
    <App/>
</Provider>, document.querySelector('#root'));