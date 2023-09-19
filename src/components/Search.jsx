import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Prod_filtered } from '../redux-toolkit-stote/slices/ProductSlice';

const Search = () => {
    const [searchStr, setSearchstr] = useState("");
    let dispatch = useDispatch();

    useEffect(() => {
        dispatch(Prod_filtered(searchStr ?? ""))
    }, [searchStr])
    return (

        <form className="d-flex" role="search">
            <input className="form-control me-2" value={searchStr} onChange={(e) => setSearchstr(e.target.value)}
                type="search" placeholder="Search Products.." aria-label="Search " />
        </form>
    )
}

export default Search