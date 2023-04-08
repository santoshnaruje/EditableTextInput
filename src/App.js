import React, {Component} from 'react'
import './App.css'

class App extends Component {
  state = {
    inputVal: '',
    isSaved: false,
    buttonText: 'Save',
  }

  handleInputChange = event => {
    this.setState({inputVal: event.target.value})
  }

  handleButtonClick = () => {
    const {isSaved} = this.state

    if (isSaved) {
      this.setState({isSaved: false, buttonText: 'Save'})
    } else {
      this.setState({isSaved: true, buttonText: 'Edit'})
    }
  }

  render() {
    const {inputVal, isSaved, buttonText} = this.state

    return (
      <div className="container">
        <div className="card">
          <h1>Editable Text Input</h1>
          {isSaved ? (
            <div className="sub-card">
              <p>{inputVal}</p>
              <button onClick={this.handleButtonClick}>{buttonText}</button>
            </div>
          ) : (
            <div className="sub-card">
              <input
                type="text"
                value={inputVal}
                onChange={this.handleInputChange}
              />
              <button onClick={this.handleButtonClick}>{buttonText}</button>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default App
