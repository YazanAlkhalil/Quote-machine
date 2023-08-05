import { connect } from "react-redux";
import addQuote from "../redux/addQuote";

function Button(props){

    function generateNewQuote(){
        fetch("https://api.quotable.io/quotes/random").then(res => res.json()).then(json => props.addQuote(json[0].content,json[0].author))    
    }
    
    return(
        <button type="button" className="btn btn-primary" onClick={generateNewQuote}>new quote</button>
    );
    

    
}
function mapDispatch(dispatch){
    return{
        addQuote: (q,a) => dispatch(addQuote(q,a))
    }
}



export default connect(null,mapDispatch)(Button);