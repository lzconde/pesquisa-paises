import React, {Component} from 'react';

class Lista extends Component {
    render() {

        
        return (
            <div>
                <ul>
                    {
                        this.props.elementos.map((elemento, i) => { //Renderiza os elementos via Props
                            return(
                                <li key={i}>{elemento.name}</li> //todo filho em uma Lista deve conter uma Key
                            )
                        })
                    }
                </ul>
            </div>
        )
    }

}


export default Lista; //Exportando para que essa Lista possa ser utilizada em outra parte da Aplicação