import React, {Component} from 'react';
import {connect} from "react-redux"; //Conectando o Novo Componente ao Store

class ContadorPaises extends Component {
    render() {
        return (
            <div>
                <h2> {this.props.listaPaises.length} </h2>
            </div>
        );
    }
}

const mapStateToProps = state => { //Buscando os valores da lista dentro da Store
    return {
        listaPaises: state.paisesReducer.listaPaises
    }
}


export default connect(mapStateToProps, null)(ContadorPaises);