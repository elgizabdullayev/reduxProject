import React, {Component} from 'react';
import {View, TextInput, Button , Text, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import {adding, clear} from '../redux/action'
class Display extends Component{
    constructor(props){
        super(props)
        this.state={
        nameA : '',
        numberA: 61616510
        }
    }
    render(){
        console.log(this.props.list)
        return(
            
         <View>
         <Text>Name</Text>
         <TextInput onChangeText={text=>(this.nameA = text)} placeholder={'write name'}></TextInput>
         <Text>Number</Text>
         <TextInput onChangeText={text=>(this.numberA = text)} placeholder={'write number'}></TextInput>
         <Button title="Add" onPress={()=>this.props.adding2(this.nameA, this.numberA)}></Button>
         <Button title="Clear" color='red' onPress={()=>this.props.clear()}></Button>

         <ScrollView>
         {this.props.list.map((item, index)=> {
        return<View key={index}>
            <Text>Name: {item.name}, Number: {item.number}</Text>
             </View>})}
          </ScrollView>
         </View>
         
    
        )
    }
    
}
const mapDispatchToProps=dispatch=>{
    return{    
    adding2: (name,number)=> dispatch(adding(name,number)) ,
    clear: ()=> dispatch(clear()),
    }
}
const mapStateToProps=(state)=>{
    return{
      list: state.list
      
    }
    
}
export default connect (mapStateToProps, mapDispatchToProps)(Display)