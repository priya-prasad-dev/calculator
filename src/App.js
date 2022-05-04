import{useReducer} from 'react'
import './App.css';
function reducer(state,action){

}
function App() {
  const [{currentOpperand, previousOperand, Operation},dispatch] =useReducer(reducer, {})
  return (
    <div className="calculator-grid">
      <div className='output'>
        <div className='previous-operend'></div>
        <div className='current-operend'></div>

      </div>
      <button className='span-two'>CLEAR</button>
      <button >÷</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button>-</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>+</button>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button >=</button>
      
    </div>
  );
}

export default App;
