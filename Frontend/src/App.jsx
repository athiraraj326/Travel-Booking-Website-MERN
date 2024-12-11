import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Auth from './pages/Auth'
import Tours from './pages/Tours'
import ContactUs from './pages/ContactUs'
import Dashboard from './pages/Dashboard'
import UserProfile from './pages/UserProfile'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/tours' element={<Tours/>}/>
        <Route path='/contactinfo' element={<ContactUs/>}/>
        <Route path='/login' element={<Auth/>}/>
        <Route path='/register' element={<Auth insideRegister={true}/>}/>
        <Route path='/profile' element={<UserProfile/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
    </>
  )
}

export default App
