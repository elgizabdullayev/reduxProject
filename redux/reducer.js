let initialState = { list:[{
    name: 'Elgiz',
    number: 5514514552}]
}
const reducers = (state = initialState, action) =>{
    switch(action.type){
        case "ADD": {
            
            return {
              
              ...state, list:[...state.list, action.payload ]
            }
        }
        case "CLEAR":{
            return{
                list:[],
            }
        }
        default: return state;
    }
}
export default reducers;