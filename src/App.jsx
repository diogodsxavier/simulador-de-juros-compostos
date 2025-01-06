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
  const [period, setPeriod] = useState(2);
  const [result, setResult] = useState(null);

  const calculateCompoundInterest = () => {
    // const initial = new Big(parseFloat(initialValue) || 0);
    // const monthly = new Big(parseFloat(monthlyValue) || 0);
    // const annualrate = new Big(parseFloat(interestRate) || 0);
    // const years = parseInt(period) || 0;

    const initial = new Big(parseFloat(initialValue) / 100 || 0);
    const monthly = new Big(parseFloat(monthlyValue) / 100 || 0);
    const annualrate = parseFloat(interestRate) || 0;
    const years = parseInt(period) || 0;

    const monthlyRate = annualrate / 100 / 12;
    
    const totalMonths = years * 12;

    const initialCapitalAmount = initial * Math.pow(1 + monthlyRate, totalMonths);

    const amountContributions = 
      monthlyRate > 0
        ? monthly * (Math.pow(1 + monthlyRate, totalMonths) - 1) / monthlyRate
        : monthly * totalMonths;

    const totalAmount = initialCapitalAmount + amountContributions;

    const totalInvested = initial + monthly * totalMonths;

    const compoundInterest = totalAmount - totalInvested;

    const formattedTotalAmounnt = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2,
    }).format(totalAmount);

    const formattedTotalInvested = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2,
    }).format(totalInvested);

    const formattedCompoundInterest = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2,
    }).format(compoundInterest);

    console.log(`Montante total ${formattedTotalAmounnt}`);
    console.log(`Total investido ${formattedTotalInvested}`);
    console.log(`Juros compostos ${formattedCompoundInterest}`);
    
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