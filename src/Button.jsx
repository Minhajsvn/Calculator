import Styles from"./css/Button.module.css";
// import { useState } from "react";

export default function Button({ setResult, operand, setOperand }) {

    const handleClick = (val) => {
        if(val !== "="){
            setOperand((prevValue) => prevValue += val);
        }else{
            let result = eval(operand);
            if(operand == ""){
                result = "Error"
            }
            if(operand == "0/0"){
                result = "NaN";
            }
            setResult(result);
        }
       
    }
    const clearVal = () => {
            setOperand("");
            setResult()
    }
    return (
        <div className={Styles.divStyle}>
            <button className={Styles.button} onClick={() => handleClick(7)} >7</button>
            <button className={Styles.button} onClick={() => handleClick(8)} >8</button>
            <button className={Styles.button} onClick={() => handleClick(9)} >9</button>
            <button className={Styles.button} onClick={() => handleClick("+")} >+</button>
            <button className={Styles.button} onClick={() => handleClick(4)} >4</button>
            <button className={Styles.button} onClick={() => handleClick(5)} >5</button>
            <button className={Styles.button} onClick={() => handleClick(6)} >6</button>
            <button className={Styles.button} onClick={() => handleClick("-")} >-</button>
            <button className={Styles.button} onClick={() => handleClick(1)} >1</button>
            <button className={Styles.button} onClick={() => handleClick(2)} >2</button>
            <button className={Styles.button} onClick={() => handleClick(3)} >3</button>
            <button className={Styles.button} onClick={() => handleClick("*")} >*</button>
            <button className={Styles.button} onClick={clearVal} >C</button>
            <button className={Styles.button} onClick={() => handleClick(0)} >0</button>
            <button className={Styles.button} onClick={() => handleClick("=")} >=</button>
            <button className={Styles.button} onClick={() => handleClick("/")} >/</button>

        </div>
    )
}