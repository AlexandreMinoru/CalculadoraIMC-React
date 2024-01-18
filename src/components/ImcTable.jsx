import React from 'react'
import Button from './Button'
import "./imcTable.css"


function ImcTable({data , imc, info, infoClass , action}) {

    console.log(imc);
  return (
    <div id='resultContainer'>
        <p id='imcNumber'>
            Seu IMC: <span className={infoClass}>{imc}</span>
        </p>
        <p id="imcInfo">
            Situação atual: <span className={infoClass}>{info}</span>
        </p>
        <h3>Confira as classificações: </h3>
        <div id="imcTable">
            <div className="tableHeader">
                <h4>IMC</h4>
                <h4>Classificação</h4>
                <h4>Obesidade</h4>
            </div>
            {data.map((item) =>(
                <div className="tableData" key={item.info}>
                    <p>{item.classification}</p>
                    <p>{item.info}</p>
                    <p>{item.obesity}</p>
                </div>
            ))}
        </div>
        <Button text={"Voltar"} id={"backBtn"} action={action}/>
    </div>
  )
}

export default ImcTable