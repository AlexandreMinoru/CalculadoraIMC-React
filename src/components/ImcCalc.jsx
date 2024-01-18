import Button from "./Button"
import "./ImcCalc.css"

import { useState } from "react"

const ImcCalc = ({calcImc}) => {

    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");

    const clearForm = (e) =>{
        e.preventDefault();
        setHeight("");
        setWeight("");
    }

    const validDigits = (text) =>{
        return text.replace(/[^0-9,]/g, "");
    }

    const handleWeight = (e) =>{
        const updatedValue = validDigits(e.target.value);

        setWeight(updatedValue);
    }

    const handleHeight = (e) =>{
        const updatedValue = validDigits(e.target.value);

        setHeight(updatedValue);
    }

  return (
    <div className="calcContainer">
        <h2>Calculadora IMC</h2>
        <form id="imcForm">
            <div id="formInput">
                <div id="formControl">
                    <label htmlFor="height">Altura: </label>
                    <input type="text" name="height" id="height" placeholder="Exemplo 1,75" onChange={handleHeight} value={height}/>
                </div>
                <div id="formControl">
                    <label htmlFor="weight">Peso: </label>
                    <input type="text" name="weight" id="weight" placeholder="Exemplo 70,5" onChange={handleWeight} value={weight}/>
                </div>
            </div>
            <div className="actionControl">
               <Button id={"cleanBtn"} text={"Limpar"} action={clearForm}/>
                <Button id={"calcBtn"} text={"Calcular"} action={(e) => calcImc(e, height, weight)}/>
            </div>
        </form>
    </div>
  )
}

export default ImcCalc