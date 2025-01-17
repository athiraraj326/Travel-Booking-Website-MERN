import React, { useState } from 'react'
import { FloatingLabel, Form } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { loginAPI, registerAPI } from '../../services/allAPI'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Auth = ({ insideRegister }) => {

  const navigate = useNavigate()
  const [inputData,setInputData] = useState({
    username:"",email:"",password:""
  })
  

  const handleRegister = async (e)=>{
    e.preventDefault()
    console.log('Inside handleRegister');
    if(inputData.username && inputData.email && inputData.password){
      try{
        const result = await registerAPI(inputData)
        console.log(result.data);
        if(result.status==200){
          alert(`Welcome ${result.data?.username}, Please login to explore our website!!!`)
          navigate('/login')
          setInputData({username:"",email:"",password:""})
        }else{
          if(result.response.status==406){
            alert(result.response.data)
            setInputData({username:"",email:"",password:""})
          }
        }
      }catch(err){
        console.log(err);
      }
    }else{
      alert("Please fill the form completely!!!")
    }
  }
  
  const handleLogin = async (e)=>{
    e.preventDefault()
    if(inputData.email && inputData.password){
      try{
        const result = await loginAPI(inputData)
        if(result.status==200){
          sessionStorage.setItem("user",JSON.stringify(result.data.user))
          sessionStorage.setItem("token",result.data.token)
          if(result.data.user.role == "admin"){
            setTimeout(()=>{
              setInputData({username:"",email:"",password:""})
              navigate('/admin/dashboard')
            },2000)
          }else{
            setTimeout(()=>{
              setInputData({username:"",email:"",password:""})
              navigate('/')
            },2000)
          }
        }else{
          if(result.response.status==404){
            alert(result.response.data)
          }
        }
      }catch(err){
        console.log(err);
      }
    }else{
      alert("Please fill the form completely!!!")
    }
  }

  return (
    <>
    <Header/>
      <div style={{ minHeight: '100vh',paddingTop:'80px'}} className='d-flex justify-content-center align-items-center'>
        <div className="container shadow w-75">
          <div className="row">
            <div className="col-lg-6 px-0">
              <img className='w-100' src="https://www.switrus.com/_next/image?url=%2Fimages%2Flogin%2Fbg.png&w=3840&q=100" alt="" />
            </div>
            <div className="col-lg-6 bg-warning text-center p-5">
              <i class="fa-solid fa-user fs-2 text-light"></i>
              <h5 className="mt-2 mb-4 fs-3 text-light"> {insideRegister ? 'Register' : 'Login'} </h5>
              {
                insideRegister &&
                <FloatingLabel controlId="floatingInputName" label="Username" className="mb-3">
                  <Form.Control value={inputData.username} onChange={(e)=>setInputData({...inputData,username:e.target.value})} type="text" placeholder="Username" className='rounded' />
                </FloatingLabel>
              }
              <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
                <Form.Control value={inputData.email} onChange={(e)=>setInputData({...inputData,email:e.target.value})} type="email" placeholder="name@example.com" className='rounded' />
              </FloatingLabel>
              <FloatingLabel controlId="floatingPassword" label="Password">
                <Form.Control value={inputData.password} onChange={(e)=>setInputData({...inputData,password:e.target.value})} type="password" placeholder="Password" className='rounded' />
              </FloatingLabel>
              {
                insideRegister ?
                  <div className="mt-4">
                    <button onClick={handleRegister} className="btn btn-dark mb-3 w-75 rounded">Register</button>
                    <p className='text-light'>Already A User? Please Click here to <Link to={'/login'} style={{color:'black'}}>Login</Link></p>
                  </div>
                  :
                  <div className="mt-4">
                    <button onClick={handleLogin} className="btn btn-dark mb-3 w-75 rounded">Login</button>
                    <p className='text-light'>New User? Please Click here to <Link to={'/register'} style={{color:'black'}}>Register</Link></p>
                  </div>
              }
            </div>
          </div>
        </div>
      </div>
    <Footer/>
    </>
  )
}

export default Auth