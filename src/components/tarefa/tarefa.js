import React, {Component} from 'react';
import Lista from "./lista";

class Tarefa extends Component{
    constructor(props) {
        super(props);

        this.state = {
            texto: "",
            listaTarefas: []
        }
    }
    
    alterarTexto = (e) => {
        this.setState({
            texto: e.target.value
        });

    };

    adicionarTarefa = (e) => {
        this.setState({
            listaTarefas: [...this.state.listaTarefas, this.state.texto]
        });

    }
  

    render() {
        return (
            <div>
               <h1>Meu App</h1>
               <input type="text" 
                      value={this.state.texto}
                      onChange={(e) => {
                          this.alterarTexto(e)
                       }} />
                <div>
                    <button onClick={()=>{this.adicionarTarefa()}}>
                        Adicionar Tarefa
                    </button>
                </div>
                <div>
                    <Lista
                        tarefas={this.state.listaTarefas}
                    />
                </div> 
            </div>
        )
    }
}

export default Tarefa;