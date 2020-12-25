import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';

export class MainView extends Component{
    constructor(props){
        super(props)
     console.log(this.props.name);
    }
    
    componentDidMount=()=>(
     console.log(this.props.name)
    )

    render(){
        return(
            <View>
            <Text>{this.props.name}</Text>
            <Text>{this.props.number}</Text>
            
            </View>
        )
    }

}
const mapStateToProps=(state)=>(
    {
      name: state.reducers, 
        
    

})
export default connect(mapStateToProps)(MainView);