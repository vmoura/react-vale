import React, { Component, useState } from 'react';
import { render } from 'react-dom';
import redux from 'redux';
import Hello from './Hello';
import Blog from './Blog';
import './style.css';

let nombre = "Valeria";
/* Props: propiedades que componentes padres les pasan a sus hijos */
function A(props){
  return props.children;//(<p>Hola {props.name}!</p>); //JSX
}
function B(props){
  return (<p>{props.name}:10</p>);//JSX
}
/*******************************/
function MiComponente(){
  return (<p>Hola Mundo!</p>);
}

class MiComponenteClase extends Component{

   render() {
    return (<p>Hola! Clase Componente! </p>);
   }
}
/************ Tema: State ********************/

class Contador extends Component{
  constructor(props) {
    super(props);
    this.state = {
      contador: 0
    };
  }

  aumentar = ()=>{ this.setState({contador:this.state.contador+1}) }

  render(){
    return (<div>
    <p>{this.state.contador}</p>
    <button onClick={ this.aumentar }>  Aumentar </button>
    </div>);
  }
}

/************* FORMULARIOS *******************/

class Formulario extends Component{
 constructor(props) {
    super(props);
    this.state = {
      email: '',
      pass: ''
    };
  }

  syncEmailChanges(email){
    this.setState({email: email});
    console.log(this.state.email);
  }

  syncPassChanges(pass){
    this.setState({pass: pass});
  }
  //logica al iniciar sesion
  submitForm= ()=> {
    console.log(this.state);
  }

  render(){
    return (<form>
    <input type="email" 
    onChange= {(ev)=> {this.syncEmailChanges(ev.target.value)}}
    value={this.state.email} 
    placeholder="Email"/>

    <input type="password" 
    onChange= {(ev)=> {this.syncPassChanges(ev.target.value)}}
    value={this.state.pass} 
    placeholder="****"/>

    <div>
      <input onClick={this.submitForm()} type="submit"  value="Iniciar sesion" />
    </div>
    </form>)

  }
}


/*********** Hooks ****************/
function ContadorHooks(){ 
  
 const [contador, setContador] = useState(0); // =this.state = {  contador: 0  }; 
    return (<div>
    <p>Conteo: {contador}</p>
    <button onClick={ ()=> setContador(contador+1) }>  Aumentar </button>
    </div>);
  
}

/********************************/
class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Vale'
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <b>Componente funcion y componenete clase:</b>
        <MiComponente />
        <MiComponenteClase />
        <b>Elementos indepenientes - props para hacer independientes!</b>
        <A name="Catalina">
          <p>Hola Catalina!</p>        
          <p>Hola Olivia!</p> 
        </A>
        <B name="Olivia"/>
        <Contador />
        <br />
        <ContadorHooks />
        <br />
        <b> Formulario </b>
        <Formulario />
         <br />
        <b> Listas y arreglos </b>
        <Blog />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
