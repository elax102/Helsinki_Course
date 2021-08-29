import React from 'react'

const Header = (props) => {
  return(
    <h1>{props.course}</h1>
  )
}

const Content = (props) => {
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return(
    <div>
      <Part pNum={part1} eNum={exercises1} />
      <Part pNum={part2} eNum={exercises2} />
      <Part pNum={part3} eNum={exercises3} />
    </div>
  )
}

const Part = (props) => {
  return(
    <p>
      {props.pNum}, {props.eNum}
    </p>
  )
}

const Total = (props) => {
  return(
    <div>
      <p>Number of exercises: {props.exercises}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content />
      <Total exercises={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

export default App