import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../firebaseConfig';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    let navigate = useNavigate()

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    function rejisterUser(e) {
        console.log(email, password)
        e.preventDefault();
        // createUserWithEmailAndPassword(auth, email, password).then()
        createUserWithEmailAndPassword(email, password)
            .then((user) => {
                console.log(user)
                navigate('/profile')
            }).catch((e) => {
                console.log(e)
            })
    }

    if (error) { return (<p>Error: {error.message}</p>); }
    if (loading) { return <p>Loading...</p>; }
    // if (user) { return <p>Registered User: {user.user.email}</p> }

    return (
        <form className="row g-3 rejister">
            <div className="col-md-12">
                <label htmlFor="inputEmail4" className="form-label">Email</label>
                <input type="email" onChange={(e) => setEmail(e.target.value)}placeholder='Enter Email' className="form-control" id="inputEmail4" />
            </div>
            <div className="col-md-12">
                <label htmlFor="inputPassword4" className="form-label">Password</label>
                <input type="password" onChange={(e) => setPassword(e.target.value)}placeholder='Enter Password' className="form-control" id="inputPassword4" />
            </div>


            <div className="col-12">
                <button type="submit" className="btn btn-primary" onClick={rejisterUser}>Register</button>
            </div>
            <div>Already have account? <Link to={"/login"}>Login here</Link></div>
        </form>
    )
}

export default Register