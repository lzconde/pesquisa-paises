import {combineReducers} from 'redux';
import {paisesReducer} from "./paisesReducer"; //Exporta todos os Reducers para gerar o State Global

const combinedReducers = combineReducers({
    paisesReducer: paisesReducer
});


export default combinedReducers;