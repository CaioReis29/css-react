import './App.css';
import MyComponents from './components/MyComponents';
import { useState } from 'react';
import Title from './components/Title';

function App() {

  const n = 15;
  const [name] = useState('Caio');

  const redTitle = true;

  return (
    <div className="App">
      {/* css global */}
      <h1>Usando css no React</h1>
      {/* css de componentes */}
      <MyComponents/>
      <p>Paragrafo do app.js</p>
      <p className="my-comp-paragraph">Agora esse só vai funcionar no componente</p>
      {/* inline css */}
      <p style={{color: 'blue', padding: '25px', boderTop: '2px solid red'}}>Este texto está sendo estilizado de forma inline</p>
      {/* css inline dinamico */}
      <h2 style={n < 10 ? ({color: 'purple'}) : ({color: 'pink'})}>CSS dinamico</h2>
      <h2 style={n > 10 ? ({color: 'purple'}) : ({color: 'pink'})}>CSS dinamico</h2>
      <h2 style={name === 'Caio' ? ({color: 'green', backgroundColor: '#000'}) : null }>
        Teste nome
      </h2>
      <h2 style={name !== 'Caio' ? ({color: 'green', backgroundColor: '#000'}) : null }>
        Teste nome
      </h2>
      {/* classe dinamica */}
      <h2 className={redTitle ? 'red-title' : 'title'}>Esse titulo vai ter classe dinamica</h2>
      <h2 className={redTitle ? 'title' : 'red-title'}>Esses titulo vai ter classe dinamica</h2>
      {/* CSS modules */}
      <Title/> 
    </div>
    
  );
}

export default App;
