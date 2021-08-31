import React, { useState } from 'react'

const Hello = (props) => {
  const {name, age} = props
  const bornYear = () => new Date().getFullYear() - age

  return (
    <div>
      <p>
        Hello {name}, you are {age} years old
      </p>
      <p>You were probably born in {bornYear()}</p>
    </div>
  )
}

const Counter = (props) => {
  const [counter, setCounter] = useState(0)
  const increaseByOne = () => setCounter(counter + 1)
  const setToZero = () => setCounter(0)

  return (
    <div>
      <div>Count: {counter}</div>
      <button onClick={increaseByOne}>Add Count</button>
      <button onClick={setToZero}>Reset Count</button>
    </div>
  )
}

const App = () => {
  const name = 'Peter'
  const age = 30
  let counter = 1

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age} />
      <Counter counter={counter} />
    </div>
  )
}

export default App;
