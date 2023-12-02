import { HashRouter as Router,Route,Provider,Link } from "react-router-dom";
import { useHistory } from "react-router-dom";


function Support(){

    const history = useHistory();


    const pushToComments = ()=>{
        history.push("/comments");
    }

    return (
        <div>
        <h1>How well are you being supported?</h1>
          <button onClick={pushToComments}>NEXT</button>
       
        </div>
    )
}

export default Support;