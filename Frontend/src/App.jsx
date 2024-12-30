import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Auth from './pages/Auth'
import Tours from './pages/Tours'
import ContactUs from './pages/ContactUs'
import ViewTours from './pages/ViewTours'
import Booking from './pages/Booking'
import Dashboard from './pages/Dashboard'
import UserProfile from './pages/UserProfile'
import Thankyou from './pages/Thankyou'

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
        <Route path='/tour/:id/view' element={<ViewTours/>}/>
        <Route path='/tour/booking' element={<Booking/>}/>
        <Route path='/profile' element={<UserProfile/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/booking-successfull' element={<Thankyou/>}/>
      </Routes>
    </>
  )
}

export default App
