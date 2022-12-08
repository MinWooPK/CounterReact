import './App.css';
import banderaSpain from './imagenes/Bandera_de_España.svg.png'
import Boton from './componentes/Boton.js'
import Contador from './componentes/Contador.js'
import { useState} from 'react'

function App() {

  const [numClics, setNumClics] = useState(0);
const manejarClick = () => {
setNumClics(numClics + 1);
}
const reiniciarContador = () => {
  setNumClics(numClics - 1);
}
  return (
    <div className="App">
     <div className ='imagen-contenedor'>
      <img className= 'imagen-logo'
      src ={banderaSpain}
      alt = 'imagen'
      />
     </div>
<div className= 'contenedor-principal'>
<Contador numClics={numClics}/>

<Boton 
texto= 'Gol!!!!'
esBotonDeClick={true}
manejarClick ={manejarClick}
/>
<Boton
texto= 'Fuera de Juego'
esBotonDeClick={false}
manejarClick ={reiniciarContador} />



</div>
    </div>
  );
}

export default App;
