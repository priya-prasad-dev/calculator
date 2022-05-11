import React from 'react';
import {useState} from 'react';
import './calculator.style.scss';
// const ACTIONS ={
//     ADD_DIGIT:'add-digit',
//     CLEAR : 'clear',
//     CHOOSE_OPERATION:'choose-operation',
//     EVALUATE:'evaluate'
// }
// function reducer(state,{type, payload}){
//     switch(type) {
//         case ACTIONS.ADD_DIGIT:
//             return {
//                 ...state,
//                 currentOpperand:`${currentOpperand || ""}${payload.digit}`,

//             }
//     }

// }
const Calculator = () => {
//   const [{currentOpperand, previousOperand, Operation},dispatch] =useReducer(reducer, {})
  
//   dispatch({type: ACTIONS.ADD_DIGIT,payload: {digit:1}})
const [result,setResult] = useState("");

const clickHandler =(event) => {
    setResult(result.concat(event.target.value))
}
return (
    <div className='calculator-grid'>
      <div className='output' value={result}>
        <div className='previous-operend'>09</div>
        <div className='current-operend'></div>

      </div>
      <button value="clear" className='span-two' onClick={clickHandler}>CLEAR</button>
      <button  value="/" className='span-one' onClick={clickHandler}>÷</button>
      <button value="7" className="num" onClick={clickHandler}>7</button>
      <button value="8" className="num" onClick={clickHandler}>8</button>
      <button value="9" className="num" onClick={clickHandler}>9</button>
      <button value="-" className='span-one' onClick={clickHandler}>-</button>
      <button value="4" className="num" onClick={clickHandler}>4</button>
      <button value="5" className="num" onClick={clickHandler}>5</button>
      <button value="6" className="num" onClick={clickHandler}>6</button>
      <button value="+" className='span-one' onClick={clickHandler}>+</button>
      <button value="1" className="num" onClick={clickHandler}>1</button>
      <button value="2" className="num" onClick={clickHandler}>2</button>
      <button value="3" className="num" onClick={clickHandler}>3</button>
      <button value="+" className='span-one' onClick={clickHandler}>=</button>
      
    </div>
  );
}

export default Calculator;
