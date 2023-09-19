import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebaseConfig';
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const [user, loading, error] = useAuthState(auth);
    let navigate = useNavigate();

    if (error) { return <p>Error: {error.message}</p> }
    if (loading) { return <p>Loading...</p>; }
    console.log(user)
    function handleLogOut() {
        signOut(auth)
            .then(() => {
                console.log("sign uout succ")
                navigate('/login')

            }).catch((e) => {
                console.log("err occured insign uout")

            })
    }
    return (
        <div className="card profile">
            <div className="card-header">
                User Profile
            </div>
            <div className="card-body">
                <h5 className="card-title">Email = {user.email}</h5>
                <p className="card-text">uid = {user.uid}</p>
                <button onClick={handleLogOut} className="btn btn-primary">Logout</button>
            </div>
        </div>
    )
}

export default Profile