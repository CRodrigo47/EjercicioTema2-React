/* eslint-disable react/prop-types */
import { useState } from "react";

export default function CalcDatos() {
  const [datos, setDatos] = useState({
    altura: 0,
    peso: 0,
  });

  const [imc, setImc] = useState(0)

  const handleImc = (e) => {
    e.preventDefault()
    setImc(datos.peso / (datos.altura * datos.altura))
  }
  const handleAlturaChange = (e) =>
    setDatos({ ...datos, altura: e.target.value });

  const handlePesoChange = (e) => setDatos({ ...datos, peso: e.target.value });

  return (
    <>
      <form className="calculadora">
          <h1>CALCULADORA DE IMC</h1>
          <p>Introduce tu altura en metros (ej. 1.80)</p>
          <input onChange={(e) => handleAlturaChange(e)} value={datos.altura} />
          <p>Introduce tu altura en kilos (ej. 90.6)</p>
          <input onChange={(e) => handlePesoChange(e)} value={datos.peso} />
        <br />
        <button onClick={handleImc}>
            CALCULAR
        </button>
        <CalcResultado imc = {imc}></CalcResultado>
      </form>

    </>
  );
}

const CalcResultado = ({imc}) => {

    let categoria = () => {
        if(imc >= 25){
            return "Sobrepeso"
        }else if(imc<18.5){
            return "Bajo peso"
        }else{
            return "Peso adecuado"
        }
    }

    let categoriaCSS = () => {
        if(imc >= 25){
            return "peso_superior"
        }else if(imc<18.5){
            return "peso_inferior"
        }else{
            return "peso_ideal"
        }
    }

    return(
        <>
        <div className={"resultado " + categoriaCSS()}>
            <p>Tu IMC es: {imc.toFixed(2)}</p>
            <p>Tu categoria es: {categoria()}</p>
        </div>
        </>
    )
}
