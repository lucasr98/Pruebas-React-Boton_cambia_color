import React, {useState} from 'react';
import logo from './assets/images/logo.svg';
import './assets/styles/App.css';
import Logo from './components/Logo';
import Input from './components/Input'

function App() {

  const [color, setColor] = useState('')

  const logoSrc = "https://lucasr98.github.io/LR_Dibuja.github.io/imagenes/recursos/LR%202021.svg";

  const codigoColor = ["a","b","c","d","f","0","1","2","3","4","5","6"];

  const cambiarColor = (e)=>{
    let colorNuevo;
    let valorAleatorio = codigoColor[Math.floor(Math.random() * codigoColor.length)];
    
    if(e.target.className == "mascara" || e.target.id == "logo-img"){

      for(let i = 0; i < 5; i++){
        valorAleatorio += codigoColor[Math.floor(Math.random() * codigoColor.length)];
      }

      colorNuevo = `#${valorAleatorio}`;
      document.querySelector(".color-input").value = `${colorNuevo}`;
    }
    else if(e.target.className == "color-input"){
      colorNuevo = e.target.value;
    }

    document.querySelector(".logo-container").style.backgroundColor = `${colorNuevo}`;
    setColor(colorNuevo);
    return animacion();

  }

  function animacion(){
    const animacion = document.querySelector(".logo-container").animate([
      {transform: "scale(1.0)"},
      {transform: "scale(1.05)"},
      {transform: "scale(1.0)"}
      ],{
      easing: "ease-in-out",
      iterations: 1,
      duration: 400
      }
    );
    return animacion.finished;
  }

  return (
    <main>
      <Logo logoSrcPr={logoSrc} cambiarColorPr={cambiarColor} animacionPr={animacion} />
      <Input cambiarColorPr={cambiarColor} />
    </main>
  );
}

export default App;
