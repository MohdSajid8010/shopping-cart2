import { collection, addDoc, orderBy, limit } from "firebase/firestore";
import { auth, db } from "../../firebaseConfig";
import { addToCart, updataCart } from "../slices/CartSlice";
import { query, where, getDocs } from "firebase/firestore";
import { useDispatch } from "react-redux";


// export const addToCartAction = async (user_id, prod_id) => {
export const addToCartAction = async (user_id, prod_id, dispatch) => {

    // return async (dispatch) => {

    try {
        const docRef = await addDoc(collection(db, "cart"), {//"cart" is collection name: 
            user_id,
            prod_id,
        });
        console.log("Document written with ID: ", docRef.id);
        dispatch(addToCart(prod_id));

    } catch (e) {
        console.error("Error adding document: ", e);
    }
    // }
}



export const getCartItemFromFirebase = (user_id) => {
    return async (dispatch) => {

        // Create a query against the collection.
        const q = query(collection(db, "cart"), where("user_id", "==", user_id));

        const querySnapshot = await getDocs(q);
        let cartArr = []
        querySnapshot.forEach((doc) => {
            cartArr.push(doc.data().prod_id);
            // console.log(doc.id, " => ", doc.data());
        });
        console.log(cartArr)
        dispatch(updataCart(cartArr))
    }
}

export const myExampleSetData = async (user_id) => {
    try {
        const docRef = await addDoc(collection(db, "usersEx"), {
            last: "Lovelace50",
            wpm: 50,
            born: 1850,
            user_id: user_id,
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}
export const myExampleGetData = async (user_id) => {
    // const q = query(collection(db, "usersEx"), orderBy("wpm", "desc"), limit(2));
    const q = query(collection(db, "usersEx"), orderBy("wpm"));//default ascending order

    const querySnapshot = await getDocs(q);
    console.log(querySnapshot.docs);
    let arr = []
    querySnapshot.docs.map((doc) => {
        console.log("usersEx", doc.data())
        arr.push(doc.data())
    })
    console.log(arr)
}