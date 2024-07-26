import {Component} from 'react'
import Clock from './components/Clock'

import './App.css'

class App extends Component {
  state = {showclock : false}
  onToggleClock = ()=>{
    this.setState(prv=>({
      showclock : prv.showclock ? false : true
    }))
  }
  render() {
    const {showclock} = this.state
    return (
      <div className="app-container">
        <button type="button" className="toggle-button" onClick={this.onToggleClock}>
          {showclock ? "Hide clock": "Show clock"}
        </button>
        {showclock && <Clock />}
      </div>
    )
  }
}

export default App
