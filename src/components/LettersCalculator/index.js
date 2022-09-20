// Write your code here.

import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {inputPhrase: ''}

  onEnterText = event => {
    const {inputPhrase} = this.state

    this.setState({inputPhrase: event.target.value})
  }

  render() {
    const {inputPhrase} = this.state
    return (
      <div className="bg-container">
        <div className="calculate-container">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <label htmlFor="input" className="label">
            Enter the phrase
          </label>
          <input
            type="text"
            id="input"
            className="input"
            placeholder="Enter the phrase"
            value={inputPhrase}
            onChange={this.onEnterText}
          />
          <p className="letters-count">No.of letters: {inputPhrase.length}</p>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          className="image"
          alt="letters calculator"
        />
      </div>
    )
  }
}

export default LettersCalculator
