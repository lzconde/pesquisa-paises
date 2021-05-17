//Faz o Import das bibliotecas JS "React, Redux e etc..."
import React, {Component} from 'react';
import Lista from '../tarefa/lista';
import ContadorPaises from "../../store/pesquisaPaises/contadorPaises";
import {pesquisarPaises} from '../../store/pesquisaPaises/paisesAction';
import {connect} from "react-redux";


class Paises extends Component { //Geração do Componente React

    constructor(props) { //Inicializando as propriedades do componente
        super(props); //Chamando o construtor da Classe Pai

        this.state = { //Declaração dos States
            texto: "",
            listaPaises: []
        }
    }

    alterarTexto = (e) => {
        this.setState({
            texto: e.target.value
        });

    };

    pesquisarPaises = () => {
        this.props.pesquisarPaises(this.state.texto);
    };

    render() {
        if (this.props.error === 0) {

            if (this.props.loading) {
                return (
                    <h1> Carregando </h1>
                )
            }

            return ( //Renderização de elementos HTML via JSX
                <div>
                    <h1>Pesquisa de Paises</h1>
                    <input type="text"
                           value={this.state.texto}
                           onChange={(e) => {
                               this.alterarTexto(e)
                           }}/>
                    <div>
                        <button onClick={() => {
                            this.pesquisarPaises()
                        }}>
                            Pesquisar Paises
                        </button>
                    </div>
                    <div>
                        <Lista
                            elementos={this.props.listaPaises}
                        />
                    </div>

                    <div>
                        <ContadorPaises/>
                    </div>

                </div>
            )
        } else {
            return (
                <h1> Ocorreu um Erro!!</h1>
            )
        }
    }
}

    const mapDispatchToProps = dispatch => { //Transforma a Action em Props para acessarmos no Componente
        return {
            pesquisarPaises: (texto) => { //Passo a Action e o texto como parâmetro
                dispatch(pesquisarPaises(texto))
            }
        }
    }

    const mapStateToProps = state => { //Busca o Atributo na Store da Aplicação
        
        return {
            listaPaises: state.paisesReducer.listaPaises, //Acesso a store e busco o listaPaises dentro do paisesReducer
            loading: state.paisesReducer.loading,
            error: state.paisesReducer.error

        }
    }
    
    


export default connect(mapStateToProps, mapDispatchToProps)(Paises); //Conecta o Componente ao Store