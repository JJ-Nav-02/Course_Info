import React from 'react';

const Header = ({course}) =><h2>{course}</h2>

const Total = ({suma}) => {
    const total = suma.reduce((s,p) => {
        return s + p.exercises
    }, 0)

    return <h3>Total of exercises {total}</h3>
}

const Part = ({name,exercises}) => (
    <p>
        {name} {exercises}
    </p>
)

const Content = ({parts}) => (
    parts.map(({name,exercises,id}) =>
    <Part key =  {id} name = {name} exercises = {exercises} />
    )
)


const Course = ({course, parts}) => {
    return(
        <div>
            <Header course={course}/>
            <Content parts={parts} />
            <Total suma={parts} />
        </div>
    )
}

export default Course