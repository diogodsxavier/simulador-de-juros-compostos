import { useState } from 'react';
import './App.css'
import Button from './components/Button';
import InitialValue from './components/InitialValue';
import InterestRate from './components/InterestRate';
import MonthlyValue from './components/MonthlyValue';
import Period from './components/Period';
import Tittle from './components/Tittle';

function App() {
  const [initialValue, setInitialValue] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [monthlyValue, setMonthlyValue] = useState(0);
  const [period, setPeriod] = useState(0);

  const calculateCompoundInterest = () => {
    const taxaDecimal = interestRate / 100;
    let montante = initialValue * Math.pow(1 + taxaDecimal, period);

    // for (let i = 1; i <= period; i++)
  }

  return (
    <div>

      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <Tittle />

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">

            <InitialValue />
            <MonthlyValue />
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
