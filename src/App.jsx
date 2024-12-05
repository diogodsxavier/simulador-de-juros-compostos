import { useState } from 'react';
import './App.css'
import Button from './components/Button';
import InitialValue from './components/InitialValue';
import InterestRate from './components/InterestRate';
import MonthlyValue from './components/MonthlyValue';
import Period from './components/Period';
import Tittle from './components/Tittle';

function App() {
  const [initialValue, setInitialValue] = useState();
  const [monthlyValue, setMonthlyValue] = useState();
  const [interestRate, setInterestRate] = useState();
  const [period, setPeriod] = useState(5);

  const calculateCompoundInterest = () => {
    const taxaDecimal = interestRate / 100;
    let montante = initialValue * Math.pow(1 + taxaDecimal, period);

    for (let i = 1; i <= period; i++) {
      montante += monthlyValue * Math.pow(1 + taxaDecimal, period - i);
    }

    return montante.toFixed(2);
  }

  return (
    <div>

      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <Tittle />

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">

            <InitialValue value={initialValue} onChange={(e) => setInitialValue(Number(e.target.value))} />
            <MonthlyValue value={monthlyValue} onChange={(e) => setMonthlyValue(Number(e.target.value))} />
            <InterestRate />
            <Period />
            <Button />

          </form>


        </div>
      </div>

    </div>
  )
}

export default App;
