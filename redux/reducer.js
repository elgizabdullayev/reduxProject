let initialState = {
    name: 'Elgiz',
    number: '0707770339'
}
const reducers = (state = initialState, action) =>{
    switch(action.type){
        case "ADD": {
            return {
                ...state,
                name: action.name,
                number: action.number
            }
        }
        case "CLEAR":{
            return{
                name: 'Cavid',
                number: '05555555555'
            }
        }
        default: return state;
    }
}
export default reducers;