import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './Student.css'
import Student from './components/Student'

function App() {

  return (
    <>
      <div className="app-container">
      <h1 className="main-heading">Student Information</h1>

      <Student name={'Rahul Sharma'} course={'Computer Science'} marks={85}/>
      <Student name={'Anita Verma'} course={'Information Technology'} marks={92}/>
      <Student name={'Rohan Gupta'} course={'Electronics'} marks={78}/>
      </div>
    </>
  )
}

export default App
