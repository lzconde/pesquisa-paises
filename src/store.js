import {createStore} from 'redux';
import  combinedReducers from './store/pesquisaPaises/combinedReducers';
import {applyMiddleware} from 'redux'; //Aplica os Middlewares na Store
import promise from 'redux-promise-middleware'; // Separa a Requisição em Rejected, Pending e Fulfilled
import {createLogger} from 'redux-logger'; //Cria o Log das Requisições

const logger = createLogger({
    collapsed: true //Os Loggers são criados fechados para melhor visualização
});


const store = createStore(combinedReducers, applyMiddleware(promise, logger));

export default store;