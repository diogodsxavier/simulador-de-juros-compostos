import { useState } from 'react';
import './App.css'
import Button from './components/Button';
import InitialValue from './components/InitialValue';
import InterestRate from './components/InterestRate';
import MonthlyValue from './components/MonthlyValue';
import Period from './components/Period';
import Tittle from './components/Tittle';
import Big from 'big.js';
import ClearField from './components/ClearField';

function App() {
  const [initialValue, setInitialValue] = useState(100000);
  const [monthlyValue, setMonthlyValue] = useState(30000);
  const [interestRate, setInterestRate] = useState(8);
  const [period, setPeriod] = useState(1);

  const calculateCompoundInterest = () => {
    const initial = new Big(parseFloat(initialValue) || 0);
    const monthly = new Big(parseFloat(monthlyValue) || 0);
    const rate = new Big(parseFloat(interestRate) || 0).div(100).div(12);
    const months = (parseInt(period) || 0) * 12;

    const initialCapitalAmount = initial.times(rate.plus(1).pow(months));

    const amountContributions = rate.gt(0)
      ? monthly.times(rate.plus(1).pow(months).minus(1).div(rate))
      : monthly.times(months);

    const totalAmount = initialCapitalAmount.plus(amountContributions);

    console.log(totalAmount.toFixed(0));
  }

  const clearFields = () => {
    setInitialValue('');
    setMonthlyValue('');
    setInterestRate('');
    setPeriod('');
  };

  const handleInitialValueChange = (rawValue) => {
    setInitialValue(rawValue);
  };

  const handleMonthlyValueChange = (rawValue) => {
    setMonthlyValue(rawValue);
  }
  const handlePeriodValueChange = (rawValue) => {
    setPeriod(rawValue);
  }

  return (
    <div>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <Tittle />
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="space-y-6" method="POST">
            <InitialValue value={initialValue} onChange={handleInitialValueChange} />
            <MonthlyValue value={monthlyValue} onChange={handleMonthlyValueChange} />
            <InterestRate value={interestRate} onChange={(e) => setInterestRate(Number(e.target.value))} />
            <Period value={period} onChange={handlePeriodValueChange} />
            <Button result={calculateCompoundInterest} />
            <ClearField clearFields={clearFields} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
