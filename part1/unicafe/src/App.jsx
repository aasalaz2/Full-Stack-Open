import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.onClick}>
    {props.text}
  </button>
)

const StatisticLine = (props) => (
  <tr>
    <td>{props.text}</td>
    <td>{props.value}</td>
  </tr>
)

const Statistics = (props) => {
  const all = props.good + props.neutral + props.bad
  const average = (props.good - props.bad) / all
  let positive = (props.good / all) * 100
  positive = positive.toString() + ' %'

  if ((all) === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }
  return (
    <table>
      <tbody>
        <StatisticLine text={'good'} value={props.good} />
        <StatisticLine text={'neutral'} value={props.neutral} />
        <StatisticLine text={'bad'} value={props.bad} />
        <StatisticLine text={'all'} value={all} />
        <StatisticLine text={'average'} value={average} />
        <StatisticLine text={'positive'} value={positive} />
      </tbody>
    </table>
  )
}

const App = () => {
  // save clicks of each button on its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
    const updatedGood = good + 1
    setGood(updatedGood)
  }

  const handleNeutral = () => {
    const updatedNeutral = neutral + 1
    setNeutral(updatedNeutral)
  }

  const handleBad = () => {
    const updatedBad = bad + 1
    setBad(updatedBad)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={handleGood} text={'good'} />
      <Button onClick={handleNeutral} text={'neutral'} />
      <Button onClick={handleBad} text={'bad'} />
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
