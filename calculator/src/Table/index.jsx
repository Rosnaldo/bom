import React, { useEffect, useRef } from 'react';

import './style.css';


const rezetTable = (tableRef, setMatriz) => {
  tableRef.current.querySelectorAll('*').forEach(n => n.remove());
  setMatriz([]);
}

function Table(props) {
  const { matriz, setMatriz, update } = props;
  const tableRef = useRef();

  useEffect(() => {
    rezetTable(tableRef, setMatriz)
    for (let i = 0; i < matriz.length; i++) {
      const tr = document.createElement("tr");
      const td = document.createElement("td");
      td.innerText = i;
      tableRef.current.appendChild(tr);
      tr.appendChild(td);
      for (let j = 0; j < matriz[0].length; j++) {
        const td = document.createElement("td");
        td.innerText = `R$ ${(matriz[i][j]).toFixed(2)}`;
        tableRef.current.querySelectorAll('tr')[i].appendChild(td);
      }
    }
    const tr = document.createElement("tr");
    const td_total = document.createElement("td");
    td_total.innerText = 'Totais';
    const td_pres = document.createElement("td");
    let prestacao = 0;
    const td_juros = document.createElement("td");
    let juros = 0;
    const td_amor = document.createElement("td");
    let amortizacao = 0;
    const td_saldo = document.createElement("td");
    td_saldo.innerText = '-';
    for (let i = 0; i < matriz.length; i++) {
      prestacao += matriz[i][0];
      td_pres.innerText = `R$ ${prestacao.toFixed(2)}`;
      juros += matriz[i][1];
      td_juros.innerText = `R$ ${juros.toFixed(2)}`;
      amortizacao += matriz[i][2];
      td_amor.innerText = `R$ ${amortizacao.toFixed(2)}`;
    }
    tr.appendChild(td_total);
    tr.appendChild(td_pres);
    tr.appendChild(td_juros);
    tr.appendChild(td_amor);
    tr.appendChild(td_saldo);
    tableRef.current.appendChild(tr);
  }, [update]);

  return (
    <div className="table">
      <table>
        <thead>
          <tr>
            <th>Nº</th>
            <th>Prestação</th>
            <th>Juros</th>
            <th>Amortização</th>
            <th>Saldo Devedor</th>
          </tr>
        </thead>
        <tbody ref={tableRef} />
      </table>
    </div>
  );
}

export default Table;
