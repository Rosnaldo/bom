import React from 'react';
import Field from '../Field';

import './style.css'


function Calculator({ setN_par, setValue, setEntrada, setJuros }) {
  return (
    <div className="calculator">
      <Field campo="Valor" setVal={setValue} />
      <Field campo="Valor Entrada" setVal={setEntrada} />
      <Field campo="Número de Prestações" setVal={setN_par} />
      <Field campo="Taxa de Juros (% ao ano)" setVal={setJuros} />
    </div>
  );
}

export default Calculator;
