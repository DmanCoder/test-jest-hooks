import React, { useState, useEffect } from 'react';
import Notification from './Notification.jsx';

const AccountBalance = () => {
  const accounts = {
    balance: 1500,
    savingBalance: 1328,
  };

  const [balance, setBalance] = useState();
  const [savingBalance, setSavingBalance] = useState();

  useEffect(() => {
    setBalance(accounts.balance);
    setSavingBalance(accounts.savingBalance)
  }, [accounts.balance, accounts.savingBalance])

  const handleSavings = () => {
    if (balance > 1000) {
      setBalance(balance - 100);
      setSavingBalance(savingBalance + 100);
    }
  }

  const handleSpending = () => {
    setBalance(balance + 100);
    setSavingBalance(savingBalance - 100);
  }

  return (
    <div data-test="account-balance-component" className="columns">
      <div className="column">
        <div className="box">
          <h4 className="title is-4">Your account balance:</h4>
          <div className="amount balance">{balance}$</div>
          <button
            id="balance-button"
            className="button is-info"
            onClick={() => handleSavings()}
          >
            Send 100$
          </button>
        </div>
      </div>
      <div className="column">
        <div className="box">
          <h4 className="title is-4">Your savings balance:</h4>
          <div className="amount savings">{savingBalance}$</div>
          <button
            className="button is-info"
            onClick={() => handleSpending()}
          >
            Send 100$
          </button>
        </div>
      </div>
      <Notification balance={balance} />
    </div>
  )
}

export default AccountBalance;