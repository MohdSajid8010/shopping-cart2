import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToCartAction } from '../redux-toolkit-stote/actions/CartAction';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebaseConfig';

const Product = ({ obj, page }) => {
    let [user, loading, error] = useAuthState(auth);
    // console.log(user, loading, error)
    let cartArr = useSelector((state) => state.cart.cartArr)
    let dispatch = useDispatch();

    function checkAlreadyInCart(prod_id) {
        return cartArr.includes(prod_id)
    }
    function handleAddTocart(prod_id) {
        console.log(prod_id);
        if (!user) {
            alert("Plaese login first")
            return;
        }
        if (checkAlreadyInCart(prod_id)) {
            alert("item already in cart")
        } else {

            // dispatch(addToCartAction(user.uid, prod_id))
            addToCartAction(user.uid, prod_id, dispatch)

        }
    }
    function handleRemoveTocart(prod_id) {

    }
    return (
        <div className="card" style={{ width: "18rem" }} >
            <img src={obj.image} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{obj.category}</h5>
                <p className="card-text">{obj.title}</p>
                <h5 className="card-title">{obj.price}$</h5>

                {page == "cart" ?
                    <button className="btn btn-primary" onClick={() => handleRemoveTocart(obj.id)}>Remove from cart</button> : checkAlreadyInCart(obj.id) ?
                        <button className="btn btn-primary" onClick={() => handleAddTocart(obj.id)}>Addedd in cart</button> :
                        <button className="btn btn-primary" onClick={() => handleAddTocart(obj.id)}>Add to cart</button>
                }
            </div>
        </div>
    )
}

export default Product