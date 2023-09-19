import { Prod_success, Prod_failure, Prod_loading } from "../slices/ProductSlice"
import axios from "axios"
export const getDatafromAPI = () => {
    return (dispatch) => {
        dispatch(Prod_loading());
        axios.get("https://fakestoreapi.com/products")
            .then((res) => {
                // console.log(res, res.data);
                dispatch(Prod_success(res.data))
            }).catch((e) => {
                console.log(e);
                dispatch(Prod_failure(e.message));
            })
    }
}