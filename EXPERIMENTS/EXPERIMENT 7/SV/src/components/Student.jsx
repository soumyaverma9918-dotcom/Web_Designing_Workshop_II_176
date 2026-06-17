import React from 'react'

function Student({name, course, marks}) {
  return (
    <div>
      <div className="student-card">
      <h1 className="student-name"> {name} </h1>
      <p className="student-info">Course: {course} </p>
      <p className="student-info">Marks: {marks} </p>
    </div>
    </div>
  )
}

export default Student
