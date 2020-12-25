import React, {Component} from 'react';
import {View, TextInput, Button} from 'react-native';
import {connect} from 'react-redux';
import {adding, clear} from '../redux/action'
export class Header extends Component{
    constructor(props){
        super(props)
        name2 = ''
        number = 0

    }
    
    render(){
        return(
            
         <View>
         <TextInput onChangeText={text=>(this.name2 = text)} placeholder={'write name'}></TextInput>
         <TextInput onChangeText={text=>(this.number = text)} placeholder={'write number'}></TextInput>
         <Button title="Sign" onPress={()=>this.props.adding(this.name2)}></Button>
         </View>
        )
    }
    
}
const mapDispatchToProps=dispatch=>{
    return{    
    adding: (name)=> dispatch(adding(name)) ,
    clear: ()=> dispatch(clear()),
    dispatch
    }
}
export default connect (null, mapDispatchToProps)(Header)