import { useState } from 'react'

import {data} from "./data/Data.js"

import './App.css'
import ImcCalc from './components/ImcCalc'
import ImcTable from './components/ImcTable.jsx';

function App() {
  const [imc, setImc] = useState("");
  const[info, setinfo] = useState("");
  const[infoClass , setInfoClass] = useState("");

  const calcImc = (e, height, weight) =>{
    e.preventDefault();

    if(!height || !weight) return;

    const weightFloat = weight.replace(",",".");
    const heightFloat = height.replace(",",".");

    const imcResult = (weightFloat /(heightFloat * heightFloat)).toFixed(1);

    setImc(imcResult);

    data.forEach((item) =>{
      if(imcResult >= item.min && imcResult <= item.max){
        setinfo(item.info);
        setInfoClass(item.infoClass)
      }
    })
  }

  const resetCalc = (e) =>{
    setImc("");
    setinfo("");
    setInfoClass("");
  }

  return (
    <>
      <div className='container'>
       {!imc ? <ImcCalc calcImc={calcImc}/>:<ImcTable data={data} imc={imc} info={info} infoClass={infoClass} action={resetCalc}/>}
      </div>
      
    </>
  )
}

export default App
