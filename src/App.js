import React from 'react';
import {Component, Fragment} from 'react';

//COMPONENTES
import Header from './Components/Header';
import ListaNoticias from './Components/ListaNoticias';
import Formulario from './Components/Formulario';

export default class App extends Component {
  
  state = {
    noticias: []

  }

  //EVENTOS DE LOS COMPONENTES
  
  componentDidMount(){
    this.consultarNoticias();
  }

  //FUNCIONES

  //Peticion asincrona para las noticias
  consultarNoticias = async  (categoria = 'general') =>{
    const url = `https://newsapi.org/v2/top-headlines?country=ve&category=${categoria}&apiKey=6aad10609efd45d3b1ed78a867add85c`;
    const respuesta = await fetch(url);
    const noticias = await respuesta.json();

    console.log(noticias.articles);
    
    this.setState({
      noticias: noticias.articles
    });
  }
  
  //Cuerpo de la pagian
  render() {
    return (
      <Fragment>
        <Header
          titulo = "Noticias React API"
        />

        <div className="container white contenedor-noticias">
        <Formulario 
          consultarNoticias = {this.consultarNoticias}
        />

          <ListaNoticias 
            noticias = {this.state.noticias}
          />

          
        </div>
      </Fragment>
    )
  }
}
