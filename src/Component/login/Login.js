import React, { useEffect, useRef, useState } from 'react'
import Nav from '../fisrt/Nav'
import '../fisrt/heder.css'
import Footer from '../fisrt/Footer'
import './login.css'
import fire from '../../firebase'
import { useNavigate } from 'react-router-dom'
import Loading from './Loading'
import { BallTriangle } from  'react-loader-spinner'


export default function Login() {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailerr, setEmailerr] = useState('');
  const [passworderr, setPassworderr] = useState('');
  const [hasAccount, setHasAccount] = useState(false)
  const [disable, setDisable] = useState(true)
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()
  const clearInput = () => {
    setEmail("");
    setPassword("")
  }

  const clearError = () => {
    setEmailerr("");
    setPassworderr("");
  }
  const handleLogin = () => {
    clearError();
    fire.auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/use-disable":
          case "auth/user-not-found":
            setEmailerr(err.message);
            break;
          case "auth/wrong-password":
            setPassworderr(err.message);
        }
      })
  };

  const handleSignup = () => {
    clearError();
    fire.auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailerr(err.message);
            break;
          case "auth/weak-password":
            setPassworderr(err.message);
        }
      })

  }


  const authListner = () => {
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        setDisable(true)
        setLoading(true)
        setTimeout(() => {
          setLoading(false)
          navigate('/home')
        }, 4000);
        
      } else {
        setUser("");
      }
    })
  }

  useEffect(() => {
    authListner();
  }, []);

  // if(loading){
  //   return (
  //     <Loading />
  //   )
  // }
  return (
    <>
    
    <div className='h-[140vh] w-[100%] ' id='bg_image2'>

      <Nav login={false} />

      <div className='absolute w-[100%] h-[140vh] bg-black opacity-[.4] -z-999'></div>

      <div className='h-[100vh] w-[100%]
        flex items-center justify-center'>
        <div className='bg-[rgba(0,0,0,.7)] relative rounded-lg w-[80vw] md:w-[50vw] h-[80vh] 2xl:h-[50vh] z-999 flex flex-col items-center'>

          <h1 className='text-white font-bold text-2xl mr-[30%] mt-[10%]'>{hasAccount ? 'Sign Up' : 'Sign In'}</h1>

          <input placeholder="Email or Phone Number" id="login-input" type="text"
            onChange={(e) => setEmail(e.target.value)} />

          <input placeholder="Password" id="login-input" type="password"
            onChange={(e) => setPassword(e.target.value)} />
            {hasAccount ? 
          <button id="login-input" className='!bg-red-600 cursor-pointer'
          onClick={handleSignup}
        
          >Sign Up</button>
          :
          <button id="login-input" className='!bg-red-600 cursor-pointer'
          onClick={handleLogin} 
          >Sign In</button>
        }
          <div className='flex items-center justify-between w-[100%] md:w-[70%] mt-6 '>
            <div >
              <input type='checkbox' />
              <label className='text-gray-500'>Remeber me?</label>
            </div>
            <h1 className='text-gray-500'>Need help ?</h1>
          </div>
          <div className='w-[100%] md:w-[70%]'>
              {hasAccount ?
            <h1 className='text-gray-500 mr-[30%] mt-2 cursor-pointer' onClick={()=> setHasAccount(!hasAccount)}>
            <span className='text-blue-500'>Sign In</span> </h1>
              :
            <h1 className='text-gray-500 mr-[30%] mt-2 cursor-pointer' onClick={()=> setHasAccount(!hasAccount)}>
                New to Netflix?<span className='text-blue-500'>Sign Up</span> </h1>
            }
            <p className='text-gray-500 text-sm'>This page is protected by Google reCAPTCHA to ensure you're not a bot.<a className='text-blue-500'> Learn more.</a></p>
          </div>

        </div>
          {
            loading &&
        <div className='absolute flex items-center justify-center h-screen'>
            <BallTriangle
            height = "800"
            width = "100"
            radius = "5"
            color = 'pink'
            ariaLabel = 'three-dots-loading'     
            wrapperStyle
            wrapperClass
            />
    </div>
          }
      </div>
      <hr></hr>
      <Footer />
    </div>
    </>
  )
}
