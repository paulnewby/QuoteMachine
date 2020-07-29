
import React from 'react';
import './App.css';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {ActionCreators} from './QuoteMachineState';
import {Button} from "@material-ui/core";
import {Container} from "@material-ui/core";

const paleBlue = {
  red : 146, 
  green : 183,
  blue : 254
}


const palePink = {
  red : 255,
  green : 232,
  blue : 233
}


function randomBetween(numOne, numTwo) {
 const min = Math.min(numOne, numTwo);
 const max = Math.max(numOne, numTwo);

 const diff = max - min;
 const random = Math.floor(Math.random() * diff);
 return min + random;
}
function colorBetween(colorOne, colorTwo) {
  return {
    red: randomBetween(colorOne.red, colorTwo.red),
    green: randomBetween(colorOne.green, colorTwo.green),
    blue: randomBetween(colorOne.blue, colorTwo.blue),
  }
} 

class QuoteMachine extends React.Component {
  
  randomColor() {
    const prettyColor = colorBetween(palePink, paleBlue);
    const color = `rgb(
      ${prettyColor.red},
      ${prettyColor.green},
      ${prettyColor.blue})`
    return color;
  }

    render () { 
      const randomColor = this.randomColor();
      //const html = document.documentElement;
      //html.style.backgroundColor = randomColor;

    return ( 
      <body style={{backgroundColor: randomColor}}>
      <Container fixed style={{ backgroundColor: randomColor}} className="QuoteMachineApp"
      id = 'wrapper'>
           <p id="quote">{this.props.quote}</p>
            <p id="name">
              -{this.props.name ? this.props.name : "Unknown"}-
            </p>
        <Container fixed 
          className="fadeIn"
          key={Math.random()}
          style={{ color: randomColor }}
          >
          </Container>
          <Button
            id="newquote"
            onClick={this.props.nextQuote}
            >
              New Quote
            </Button>
        </Container>

</body>     
    );
  }
}

QuoteMachine.propTypes = {
  quote: PropTypes.string,
  name: PropTypes.string,
  nextQuote: PropTypes.func,
}



QuoteMachine = connect(
  (state) => {
    const currentQuote = state.quotes[state.currentQuote] 
    return currentQuote
  }, 
  (dispatch) => {
    return {
      nextQuote: () => dispatch(ActionCreators.randomQuote())
    };
  }
)(QuoteMachine);
export default QuoteMachine;

