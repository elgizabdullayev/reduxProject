
import React, {Component} from 'react';
import {ScrollView, View} from 'react-native';
import {Header, MainView} from './components'


export default class App extends Component {
  render(){
  return (
      <View>
        <Header/>
        <ScrollView>
        <MainView/>
        </ScrollView>
      </View>
  );
};
}

