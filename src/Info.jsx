import React from 'react';

const Info = ({ amount, duration,monthlyInstallment }) => {
  return (
    <div className="col m6 s12">
      <div className="card">
        <div className="card-content">
          <div className="card-data">
            <span>monthly installment: {monthlyInstallment}</span>
            <div>
              amount: {amount}
            </div>
              duration: {duration}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
