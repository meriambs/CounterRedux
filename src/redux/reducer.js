
const initialState={
    counter:0,
    isVisibel:false,
}

function reducer(state=initialState,action){
    switch(action.type){
        case 'INCREMENT':
        return{ ...state, counter: state.counter + 1}
        case 'DECREMENT':
            return {...state, counter: state.counter > 0 ? state.counter - 1 : 0 }
        case 'RESET':
            return{...state, counter:0}
        case 'TOGGEL':
            return{...state , isVisible : !state.isVisible}
            default:
                return state;
    }
}
export default reducer