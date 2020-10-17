import reducer from './reducer/reduxReducer';
import { createStore } from 'redux';

const store = createStore(reducer);

export default store;