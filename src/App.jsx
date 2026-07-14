import './App.css'

function App() {
  // Add your code here
    const [balance, setBalance] = useState("")
    const [rate, setRate] = useState("")
    const [term, setTerm] = useState(0)
    const [output, setOutput] = useState("")

  return (
    <>
      <h1>Mortgage Calculator</h1>

      <input 
      data-testid="balance"
      type="number"
      value={balance}
      onChange={(e) => setBalance(e.target.value)}
      />

      <input
      data-testid="rate"
      type="number"
      step="0.01"
      value={rate}
      onChange={(e) => setRate(e.target.value)}
      />

      <select 
      data-testid="term"
      value={term}
      onChange={(e) => setTerm(e.target.value)}> 
      <option value="15">15</option>
      <option value="30">30</option>
      </select>

      <button data-testid="submit">Calculate</button>

      <div id="output" data-testid="output">{output}</div>

    </>
  )
}

export default App
