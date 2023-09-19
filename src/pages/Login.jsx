import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
// import { getAuth signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebaseConfig';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  let navigate = useNavigate()

  const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);


  function handleLogin(e) {
    e.preventDefault()
    console.log(email, password)
    // signInWithEmailAndPassword(auth, email, password)
    //   .then((userCredential) => {
    //     // Signed in 
    //     const user = userCredential.user;
    //     console.log(user)
    // navigate("/profile")

    //     // ...
    //   })
    //   .catch((error) => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     console.log(errorCode, errorMessage)

    //   });


    signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user, user.email)
        navigate("/profile")
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
      })

  }

  if (error) { return <p>Error: {error.message}</p> }
  if (loading) { return <p>Loading...</p>; }
  // if (user) { return <p>Signed In User: {user.email}</p> }

  return (
    <form className="row g-3 login" >
      <div className="col-md-12">
        <label htmlFor="inputEmail4" className="form-label">Email</label>
        <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder='Enter Email' className="form-control" id="inputEmail4" />
      </div>
      <div className="col-md-12">
        <label htmlFor="inputPassword4" className="form-label">Password</label>
        <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder='Enter Password' className="form-control" id="inputPassword4" />
      </div>


      <div className="col-md-12">
        <button type="submit" onClick={handleLogin} className="btn btn-primary">Login in</button>
      </div>
      <div>dont have account <Link to={"/register"}>register here</Link></div>
    </form>
  )
}

export default Login