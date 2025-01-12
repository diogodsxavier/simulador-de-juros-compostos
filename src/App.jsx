import { useState } from 'react';
import './App.css'
import InitialValue from './components/InitialValue';
import InterestRate from './components/InterestRate';
import MonthlyValue from './components/MonthlyValue';
import Period from './components/Period';
import Tittle from './components/Tittle';
import Big from 'big.js';
import ResultStyle from './components/ResultStyle';

function App() {
  const [initialValue, setInitialValue] = useState(100000);
  const [monthlyValue, setMonthlyValue] = useState(30000);
  const [interestRate, setInterestRate] = useState(8);
  const [period, setPeriod] = useState(1);

  const handleInitialValueChange = (rawValue) => setInitialValue(rawValue);
  const handleMonthlyValueChange = (rawValue) => setMonthlyValue(rawValue);
  const handlePeriodValueChange = (rawValue) => setPeriod(rawValue);

  const calculateCompoundInterest = () => {
    const initial = new Big(initialValue);
    const monthly = new Big(monthlyValue);
    const annualRate = new Big(parseFloat(interestRate) / 100);
    const years = parseInt(period) || 0;
    const monthlyRate = annualRate.div(12);
    const totalMonths = years * 12;

    // Montante do capital inicial com juros compostos
    const initialCapitalAmount = initial.times(
      new Big(Math.pow(1 + monthlyRate.toNumber(), totalMonths))
    );

    // Montante das contribuições mensais com juros compostos
    let amountContributions;
    if (monthlyRate.gt(0)) {
      const factor = new Big(Math.pow(1 + monthlyRate.toNumber(), totalMonths) - 1);
      amountContributions = monthly.times(factor).div(monthlyRate);
    } else {
      amountContributions = monthly.times(totalMonths);
    }

    // Montante total
    const totalAmount = initialCapitalAmount.plus(amountContributions);

    // Total investido (capital inicial + contribuições mensais)
    const totalInvested = initial.plus(monthly.times(totalMonths));

    // Juros compostos (montante total - capital investido)
    const compoundInterest = totalAmount.minus(totalInvested);

    const formattedTotalAmounnt = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2,
    }).format(totalAmount.div(100).toNumber());

    const formattedTotalInvested = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2,
    }).format(totalInvested.div(100).toNumber());

    const formattedCompoundInterest = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2,
    }).format(compoundInterest.div(100).toNumber());

    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="flex flex-col items-center gap-y-16 text-center lg:flex-row lg:gap-x-12 lg:justify-center">
            <ResultStyle dt={'Valor Final'} dd={formattedTotalAmounnt} />
            <ResultStyle dt={'Total Investido'} dd={formattedTotalInvested} />
            <ResultStyle dt={'Juros Compostos'} dd={formattedCompoundInterest} />
          </dl>
        </div>
      </div>
    );
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
            {/* <Button result={calculateCompoundInterest} /> */}
            {calculateCompoundInterest()}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;