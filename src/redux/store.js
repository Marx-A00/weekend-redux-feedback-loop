import {createStore, combineReducers,applyMiddleware} from 'redux';
import logger from 'redux-logger';

const ratingInput = (state =[],action)=>{
    if(action.type === `SET_FEELING`){
        const feelingInputToAdd = action.payload;
        return [...state,...feelingInputToAdd]
    }


    return state;
}



const store = createStore(
    combineReducers({
        ratingInput
    }),
    applyMiddleware(logger),
);
export default store;