import React, { useEffect } from 'react'
import Product from './Product'
import { getDatafromAPI } from '../redux-toolkit-stote/actions/ProductAction';
import { useSelector, useDispatch } from 'react-redux'
import { getCartItemFromFirebase } from '../redux-toolkit-stote/actions/CartAction';
import { auth } from '../firebaseConfig';
import { useAuthState } from 'react-firebase-hooks/auth';

const Products = () => {
    let [user, loading, error] = useAuthState(auth)
    let dispatch = useDispatch();
    let x = useSelector((state) => console.log(state))
    let state = useSelector((state) => state)

    useEffect(() => {

        dispatch(getDatafromAPI())
        console.log(auth.currentUser)

    }, [])
    useEffect(() => {
        // if (auth.currentUser) {
        if (user) {
            // console.log(auth.currentUser)
            dispatch(getCartItemFromFirebase(user.uid))
        }
    }, [loading])


    if (state?.products?.loading) { return <h1>Loading...</h1> }
    if (state?.products?.error) { return <h1>Error...{state.error}</h1> }

    // const prodStyle = { display: "flex", flexWrap: "wrap" }
    const prodStyle = { display: "flex" }

    return (
        <div>
            <h2>All Products</h2>


            {/* style={prodStyle} */}
            {state?.products?.data && (
                <div className='d-flex p-2 justify-content-evenly flex-wrap'>
                    {
                        state?.products?.data?.map((obj, i) => {
                            return <Product obj={obj} page="product" key={i} />
                        })
                    }
                </div>
            )}

        </div>

    )
}

export default Products