import React, { Component, Fragment } from 'react';
import Header from './components/header';
import ListaNoticias from './components/ListaNoticias';

class App extends Component {
  state={
    noticias:[]
  }

  async componentDidMount(){

    const url = `https://newsapi.org/v2/top-headlines?country=ve&category=business&apiKey=38707eb90eee45faae2fdf6bcbd204a4`;

    const respuesta = await fetch(url);
    const noticias = await respuesta.json();

    //console.log(noticias);

    this.setState({
      noticias : noticias.articles
    })
  }
  render() {
    return( 
      <Fragment>
        <Header 
        titulo='Noticias API React'
        />

        <div className="container white contenedor-noticias">
          <ListaNoticias 
          noticias={this.state.noticias}
          />
        </div>
      </Fragment>
      );
  }
}

export default App;

