import React from 'react';

import './style.css'

const handleChange = (e, setVal) => {
  setVal(e.target.value);
}

function Field({ campo, setVal }) {
  return (
    <div className="field">
      <strong>{campo}</strong>
      <div className="input">
        <div className="canto">
          <p>R$</p>
        </div>
        <input type="text" onChange={(e) => handleChange(e, setVal)} />
      </div>
    </div>
  );
}

export default Field;
