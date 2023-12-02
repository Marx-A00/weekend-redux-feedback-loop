import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useState } from "react";


function Support(){

    const history = useHistory();

    const [support,setSupport] = useState(0);
    const dispatch = useDispatch();

    const handleSupportInput = (e)=>{
        setSupport(e.target.value);
    }

    const handleNextSubmit = (e)=>{
        e.preventDefault();

        dispatch({
            type:`SET_SUPPORT`,
            payload: support

        })
        history.push("/comments");
    }

    return (
        <div>
        <h1>How well are you being supported?</h1>
        <form onSubmit={handleNextSubmit}>
            <input
            value = {support}
            onChange={handleSupportInput}
            type="number"/>
            <button>NEXT</button>
        </form>
    </div>
    )
}

export default Support;