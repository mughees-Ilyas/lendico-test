import React, { useState } from 'react';
import './App.css';
const uuidv1 = require('uuid/v4');

const Form = ({ change }) => {
  const [state, setState] = useState({
    amount: '',
    installment: '',
  });

  const handleChange = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value,

    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (state.amount === '' || state.installment === '') return;
    setState({
      ...state,
      id: uuidv1()
    });
    change(state);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col m6 s12">
          <label htmlFor="amount">amount</label>
          <input
            id="amount"
            name="amount"
            type="tel"
            placeholder="50"
            value={state.amount}
            onChange={handleChange}
          />
        </div>

        <div className="col m6 s12">
          <label htmlFor="installment">duration</label>
          <input
            id="installment"
            name="installment"
            type="tel"
            maxLength="1"
            placeholder="1"
            value={state.installment}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="center">
        <button className="calculate-btn" type="submit">
          Calculate installment
        </button>
      </div>
    </form>
  );
};

export default Form;
