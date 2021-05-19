import React, { Component } from 'react';
import PropType from 'prop-types';

export default class Formulario extends Component {

    state = {
        categoria: 'general'
    }


    //Handels

    handleCategory = e =>{

        this.setState({
            categoria: e.target.value
        }, () => {

            //pasarlo a la pagina principal
            //se coloca inmediatamente despues del state para que haga la ejecucion rapidamente
            this.props.consultarNoticias(this.state.categoria);
        });
        
       
        
    }

    render() {
        return (
            <div className="buscador row">
                <div className="col s12 m8 offset-m2">
                    <form action="">
                        <h2>Encuentra Noticias por Categoria</h2>

                        <div className="input-field col s12 m8 offset-m2">
                            <select 
                                onChange={this.handleCategory}
                            >


                                <option value="general">General</option>
                                <option value="business">Negocios</option>
                                <option value="entertainment">Entretenimiento</option>
                                <option value="health">Salud</option>
                                <option value="science">Ciencia</option>
                                <option value="sports">Deportes</option>
                                <option value="technology">Tecnologia</option>
                                
                            </select>
                        </div>
                    </form>
                </div>
                
            </div>
        )
    }
}

Formulario.propTypes = {
    consultarNoticias: PropType.func.isRequired
}
