import {createStore, combineReducers,applyMiddleware} from 'redux';
import logger from 'redux-logger';

const ratingInput = (state =[],action)=>{
    if(action.type === `SET_FEELING`){
        const feelingInputToAdd = action.payload;
        return [...state,feelingInputToAdd];
    }
    else if(action.type === `SET_UNDERSTANDING`){
        const understandingInputToAdd = action.payload;
        return [...state,understandingInputToAdd];
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