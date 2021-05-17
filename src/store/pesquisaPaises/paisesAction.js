import axios from "axios";
    

export function pesquisarPaises(texto) {
    return {
        type: "PESQUISA_PAISES",
        payload: axios.get(`https://restcountries.eu/rest/v2/name/${texto}`) //Solicitação HTTP via Axios

    }
    
}