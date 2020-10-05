import React, { useState } from 'react';
import Table from './Table';
import Calculator from './Calculator';

import './App.css';


const handleClick = (n_par, entrada, value, juros, matriz, setMatriz, setUpdate) => {
  let inicio = value - entrada;
  const prestacao = pmt(n_par, juros, inicio);
  matriz.push([0, 0, 0, inicio]);
  
  while (inicio > 0) {
    const taxa_juros = Number((inicio * juros / 100).toFixed(2));
    const amortizacao = Number((prestacao - taxa_juros).toFixed(2));
    inicio = Number((inicio - amortizacao).toFixed(2));
    if (inicio < 1) {
      matriz[matriz.length - 1][3] = matriz[matriz.length - 1][3] - inicio;
      inicio = 0;
    }
    matriz.push([prestacao, taxa_juros, amortizacao, inicio]);
  }

  setMatriz(matriz);
  setUpdate(curr => curr + 1);
}

const pmt = (n_par, juros, inicio) => {
  const b = 1 - Math.pow((1 + (juros / 100)), -n_par);
  const a =  inicio * ((juros / 100) / b);
  return parseFloat(a.toFixed(2));
}

function App() {
  const [n_par, setN_par] = useState(4);
  const [entrada, setEntrada] = useState(0);
  const [value, setValue] = useState(2000);
  const [juros, setJuros] = useState(2);
  const [matriz, setMatriz] = useState([]);
  const [update, setUpdate] = useState(1);

  return (
    <div className="App">
      <h1>Calculador</h1>
      <Calculator
        setN_par={setN_par}
        setValue={setValue}
        setEntrada={setEntrada}
        setJuros={setJuros}
      />
      <div className="button">
        <button
          onClick={() => handleClick(n_par, entrada, value, juros, matriz, setMatriz, setUpdate)}
        >
          Calcular
        </button>
      </div>
      <Table
        matriz={matriz}
        update={update}
        setMatriz={setMatriz}
      />
    </div>
  );
}

export default App;
