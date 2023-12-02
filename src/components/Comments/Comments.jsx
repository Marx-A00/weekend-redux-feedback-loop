import { useHistory } from "react-router-dom";
function Comments(){

    const history = useHistory();

    const pushToReview = () =>{
        history.push("/review");
    }
    return(
        <div>
            <h1>Any Comments you want to leave?</h1>
            <button onClick={pushToReview}>NEXT</button>

        </div>
    )

}
export default Comments;