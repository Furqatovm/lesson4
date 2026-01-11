import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/layout'
import Signup from './routes/signup'
import Login from './routes/login'
import Dashboard from './routes/dashboard'
import Students from './routes/students'
import Teachers from './routes/teachers'
import Profile from './routes/profile'
import Billing from './routes/billing'
import Exam from './routes/exam'

const App = () => {
  return (
    
    <Routes>
      <Route  path='/register' element={<Signup />}/>
      <Route  path='/login' element={<Login />}/>
      <Route path='/' element ={<Layout />}>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/students' element={<Students />} />
        <Route path='/teachers' element={<Teachers />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/billing' element={<Billing />} />
        <Route path='/exam' element={<Exam />} />
      </Route>
    </Routes>
      
  )
}

export default App