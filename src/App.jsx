import { useState } from 'react';
import './App.css'
import Button from './components/Button';
import InitialValue from './components/InitialValue';
import InterestRate from './components/InterestRate';
import MonthlyValue from './components/MonthlyValue';
import Period from './components/Period';
import Tittle from './components/Tittle';

function App() {
  const [initialValue, setInitialValue] = useState('');
  const [monthlyValue, setMonthlyValue] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [period, setPeriod] = useState('');

  const calculateCompoundInterest = () => {
    // Taxa de juros em decimal
    const decimalRate = interestRate / 100;

    // Montante das contribuições mensais com juros compostos

    const initialCapitalAmount = initialValue * Math.pow(1 + decimalRate, period);

    // Montante das contribuições mensais com juros compostos

    const amountContributions = monthlyValue * ((Math.pow(1 + decimalRate, period) - 1) / decimalRate)

    // Montante total

    const totalAmount = initialCapitalAmount + amountContributions;

    // Retorna o valor 

    console.log(totalAmount.toFixed(2));


    // Resolver a lógica
    
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
