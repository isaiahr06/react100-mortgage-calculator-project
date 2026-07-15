import {useState} from 'react';
import './App.css'

function App() {
  // Add your code here
    const [balance, setBalance] = useState("")
    const [rate, setRate] = useState("")
    const [term, setTerm] = useState("15")
    const [output, setOutput] = useState("")

    function calculate(balance,rate,term){
      const principal = Number(balance);
      const monthlyInterestRate = Number(rate / 100 / 12);
      const numberOfPayments = Number(term * 12);
      const monthlyPayment = principal * (monthlyInterestRate * (1 + monthlyInterestRate)** numberOfPayments) / ((1 + monthlyInterestRate)**numberOfPayments - 1)

      setOutput(`$${monthlyPayment.toFixed(2)} is your payment`)
    }

  return (
    <>
      <div className="calc">
      <h1>Mortgage Calculator</h1>

      <label>Loan Balance</label>
      <input 
      data-testid="balance"
      type="number"
      value={balance}
      onChange={(e) => setBalance(e.target.value)}
      />

      <label>Interest Rate</label>
      <input
      data-testid="rate"
      type="number"
      step="0.01"
      value={rate}
      onChange={(e) => setRate(e.target.value)}
      />

      <label>Loan Term</label>
      <select 
      data-testid="term"
      value={term}
      onChange={(e) => setTerm(e.target.value)}> 
      <option value="15">15</option>
      <option value="30">30</option>
      </select>

      <button data-testid="submit" onClick={() => calculate(balance, rate, term)}>Calculate</button>

      <div id="output" data-testid="output">{output}</div>
      </div>
    </>
  )
}

export default App
