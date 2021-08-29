import React from 'react'

const Header = (props) => {
  console.log(props);
  return(
    <h1>{props.course}</h1>
  )
}

const Content = (props) => {
  return(
    <div>
      {props.parts.map(part => (
        <Part pNum={part.name} eNum={part.exercises} />
      ))}
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
  const total = props.exercises.map(exercise => exercise.exercises).reduce((a,b) => a+b)
  return(
    <div>
      <p>Number of exercises: {total}</p>
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total exercises={course.parts} />
    </div>
  )
}

export default App