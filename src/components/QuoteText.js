import '../QuoteBox.css';
import { connect } from 'react-redux';

function QuoteText(props) {
  return (
    <div className='Quote'>
      <div className="QuoteText">
        <i className="fa fa-quote-left"> </i>
        <span className="text">{props.quote}</span>
        <i className="fa fa-quote-right"> </i>
      </div>
      <div className='QuoteAuthor'>   
        - {props.author}
      </div>
    </div>
  );
}

function mapState(state){
  return{
    quote: state.quote,
    author: state.author
  }
}


export default connect(mapState,null)(QuoteText);