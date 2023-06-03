import { useState } from 'react'
import './App.css'



const Calculadora = () => {
  const [resultado, setResultado] = useState('');

  const Clicks = (value) => {
    setResultado(resultado + value)
  }


const CalcularResultado = () => {
  try {
    setResultado(eval(resultado).toString())
  }
  catch (error) {
    setResultado('Error')
  }
}

const eliminarUltimoCaracter = () => {
  setResultado(resultado.slice(0, -1));
};

const ClearResultado = () => {
  setResultado('')
}
return(
  <div className='calculadora'>
    <label>Fahiquer</label>
  <input type="text" value={resultado} readOnly />
  <div className='botones'>
  <button onClick={() => Clicks('1')}>1</button>
  <button onClick={() => Clicks('2')}>2</button>
  <button onClick={() => Clicks('3')}>3</button>
  <button onClick={() => Clicks('+')}>+</button>
  </div>
  <div className='botones'>
  <button onClick={() => Clicks('4')}>4</button>
  <button onClick={() => Clicks('5')}>5</button>
  <button onClick={() => Clicks('6')}>6</button>
  <button onClick={() => Clicks('-')}>-</button>
  </div>
  <div className='botones'>
  <button onClick={() => Clicks('7')}>7</button>
  <button onClick={() => Clicks('8')}>8</button>
  <button onClick={() => Clicks('9')}>9</button>
  <button onClick={() => Clicks('/')}>/</button>
  </div>
  <div className='botones'>
  <button onClick={() => Clicks('0')}>0</button>
  <button onClick={() => Clicks('*')}>*</button>
  <button onClick={eliminarUltimoCaracter}><i className="bi bi-backspace"></i></button>
  <button onClick={ClearResultado}>Clear</button>
  <button className='buttonClear' onClick={CalcularResultado}>=</button>
  </div>
  </div>
)
}
export default Calculadora

