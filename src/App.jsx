import { useState } from 'react';
import './App.css'
import Button from './components/Button';
import InitialValue from './components/InitialValue';
import InterestRate from './components/InterestRate';
import MonthlyValue from './components/MonthlyValue';
import Period from './components/Period';
import Tittle from './components/Tittle';
import Big from 'big.js';

function App() {
  const [initialValue, setInitialValue] = useState('');
  const [monthlyValue, setMonthlyValue] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [period, setPeriod] = useState('');

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

    console.log(totalAmount.toFixed(2));
  }

  return (
    <div>

      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">

        <Tittle />

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="space-y-6" method="POST">

            <InitialValue value={initialValue} onChange={(e) => setInitialValue(Number(e.target.value))} />
            <MonthlyValue value={monthlyValue} onChange={(e) => setMonthlyValue(Number(e.target.value))} />
            <InterestRate value={interestRate} onChange={(e) => setInterestRate(Number(e.target.value))} />
            <Period value={period} onChange={(e) => setPeriod(Number(e.target.value))} />
            <Button result={calculateCompoundInterest} />

          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
