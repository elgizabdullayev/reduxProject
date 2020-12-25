/**
 * @format
 */
import React from 'react'
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './redux/reducer';
const myStore=createStore(reducers);
const MyApp = () =>(<Provider store={myStore}><App/></Provider>);
AppRegistry.registerComponent(appName, () => MyApp);
console.log(myStore.getState());
