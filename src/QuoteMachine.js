import React from "react";
import "./App.css";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { ActionCreators } from "./QuoteMachineState";
import { fab, faTwitterSquare } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";

const paleBlue = {
  red: 10,
  green: 189,
  blue: 254,
};

const palePink = {
  red: 243,
  green: 104,
  blue: 227,
};

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
  };
}

class QuoteMachine extends React.Component {
  randomColor() {
    const prettyColor = colorBetween(palePink, paleBlue);
    const color = `rgb(
      ${prettyColor.red},
      ${prettyColor.green},
      ${prettyColor.blue})`;
    return color;
  }

  render() {
    const randomColor = this.randomColor();
    //const html = document.documentElement;
    //html.style.backgroundColor = randomColor;

    return (
      <body style={{ backgroundColor: randomColor }}>
        <div className="QuoteMachineApp" id="wrapper">
          <p style={{ color: randomColor }} id="quote">
            <FontAwesomeIcon icon={faQuoteLeft} />
            &nbsp;&nbsp;&nbsp;&nbsp;
            {this.props.quote}
            &nbsp;&nbsp;&nbsp;&nbsp;
            <FontAwesomeIcon icon={faQuoteRight} />
          </p>
          <p id="name" style={{ color: randomColor }}>
            -{this.props.name ? this.props.name : "Unknown"}-
          </p>
          <div
            fixed
            className="fadeIn"
            key={Math.random()}
            style={{ color: randomColor }}
          ></div>
          <div className="buttons">
            <button
              className="button"
              id="newquote"
              onClick={this.props.nextQuote}
              style={{ color: randomColor }}
            >
              New Quote
            </button>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <a 
            href="https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="
            >
              <FontAwesomeIcon
                className="fa-4x"
                style={{ color: randomColor }}
                icon={faTwitterSquare}
              />
            </a>
          </div>
        </div>
      </body>
    );
  }
}

QuoteMachine.propTypes = {
  quote: PropTypes.string,
  name: PropTypes.string,
  nextQuote: PropTypes.func,
};

QuoteMachine = connect(
  (state) => {
    const currentQuote = state.quotes[state.currentQuote];
    return currentQuote;
  },
  (dispatch) => {
    return {
      nextQuote: () => dispatch(ActionCreators.randomQuote()),
    };
  }
)(QuoteMachine);
export default QuoteMachine;
