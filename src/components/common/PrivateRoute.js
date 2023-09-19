import { useState } from "react"
import { Navigate, Outlet } from "react-router-dom"
import { useAuthState } from 'react-firebase-hooks/auth';
// import { auth } from "../../../";
import { auth } from '../../firebaseConfig'

const PrivateRoute = () => {
    const [user, loading, error] = useAuthState(auth);
    if (error) { return <p>Error: {error.message}</p> }
    if (loading) { return <p>Loading...</p>; }
    console.log(user)
    if (user) {
        return <Outlet />
    } else {
        return <Navigate to={"/login"} />
    }
}

export default PrivateRoute