export const paisesReducer=(state={ //O Reducer recebe o estado inicial + o parâmetro Action
    listaPaises: [],
    loading: false,
    error:0
}, action) => {
    switch (action.type) {  //Action
        case "PESQUISA_PAISES_FULFILLED": //Recebe a Resposta da API
            return {...state, listaPaises: action.payload.data, loading: false}; //Recebe o valor default da Array e carrega os novos valores enviados via API
        case "PESQUISA_PAISES_PENDING":
            return {...state, loading: true};
        case "PESQUISA_PAISES_REJECTED":
            return {...state, error: action.error};
        default:
            return state;

    }
}