import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.onClick}>
    {props.text}
  </button>
)

const Anecdote = (props) => {
  let max = props.points[0]
  let maxIndex = 0
  for (let i = 0; i < props.points.length; i++) {
    let curr = props.points[i]
    if (curr > max) {
      max = curr
      maxIndex = i
    }
  }

  if (max === 0) {
    return (
      <div>
        No votes yet
      </div>
    )
  }
  return (
    <div>
      {props.anecdotes[maxIndex]}
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const handleAnecdotes = () => {
    const num = Math.floor(Math.random() * anecdotes.length)
    setSelected(num)
  }

  const handleVote = () => {
    const copy = [...points]
    copy[selected] += 1
    setPoints(copy)
  }

  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(Array.from({ length: anecdotes.length }, () => 0))


  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]} 
      <br></br>
      has {points[selected]} votes
      <br></br>
      <Button onClick={handleVote} text={'vote'} />
      <Button onClick={handleAnecdotes} text={'next anecdote'} />
      <h1>Anecdote with most votes</h1>
      <Anecdote points={points} anecdotes={anecdotes} />
    </div>
  )
}

export default App
