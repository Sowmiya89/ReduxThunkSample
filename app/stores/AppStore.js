import {createStore,applyMiddleware} from 'redux';
import AppReducer from '../reducers/AppReducer';
import thunk from 'redux-thunk';

export let store = createStore(AppReducer,applyMiddleware(thunk));

store.subscribe( () => {
    console.log('currentstate', store.getState().productList);
  });