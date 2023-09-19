import React, { useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../firebaseConfig'
import { useDispatch, useSelector } from 'react-redux';
import { getCartItemFromFirebase, myExampleGetData, myExampleSetData } from '../redux-toolkit-stote/actions/CartAction';
import Product from '../components/Product';

const Cart = () => {
    let [user, loading, error] = useAuthState(auth);
    let x = useSelector((state) => console.log(state))

    let cartArr = useSelector((state) => state.cart.cartArr)
    let allData = useSelector((state) => state.products.allData)
    // console.log(cartArr,allData)
    let dispatch = useDispatch();
    useEffect(() => {
        if (user) {
            // console.log(user,user.uid)

            dispatch(getCartItemFromFirebase(user.uid))
        }
    }, [])

    return (
        <div>
            <h2>Your Cart</h2>
            <div className='d-flex p-2 justify-content-evenly flex-wrap'>
                {
                    allData.map((obj) => {
                        if (cartArr.includes(obj.id)) {
                            return <Product obj={obj} page="cart" key={obj.id} />
                        }
                    })
                }
            </div>
            <button onClick={() => myExampleSetData(user.uid)}>myExampleSetData</button>
            <button onClick={() => myExampleGetData(user.uid)}>myExampleGetData</button>

        </div>
    )
}

export default Cart