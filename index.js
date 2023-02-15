import React from 'react';
import ReactDOM from 'react-dom/client';

const Header = (props) => {
  console.log(props.course.name);
  return <h1>{props.course.name}</h1>
}

const Part = (props) => {
  return(
  <div>
    <p>{props.parts} {props.exercises}</p>
  </div>)
}

const Content = (props) =>{
  console.log(props.course.parts[0].name);
  console.log(props.course.parts[1].name);
  console.log(props.course.parts[2].name);
  console.log(props.course.parts[0].exercises);
  console.log(props.course.parts[1].exercises);
  console.log(props.course.parts[2].exercises);
  return(
    <div>
      <Part parts = {props.course.parts[0].name} exercises = {props.course.parts[0].exercises} />
      <Part parts = {props.course.parts[1].name} exercises = {props.course.parts[1].exercises} />
      <Part parts = {props.course.parts[2].name} exercises = {props.course.parts[2].exercises} />
    </div>
  )
}

const Total = (props) =>{
  const total =  props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises
  return(
    <div>
        <p>Number of exercises {total} </p>

    </div>
  )
}

const App = () =>{
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
  } ]
}
  return(
    <div>
      
      <Header course = {course} />
      <Content course = {course} />
      <Total course = {course} />

      
    </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
