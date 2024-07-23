import { Component } from "react";
import './App.css'
const imglinks = [
  {
    id : 1,
    turn : "head",
    imgurl : "https://assets.ccbp.in/frontend/react-js/heads-img.png"
  },
  {
    id : 2,
    turn : "tail",
    imgurl : "https://assets.ccbp.in/frontend/react-js/tails-img.png"
  }
]
class App extends Component{
  state = {
    totalturns : 0,
    heads : 0,
    tails : 0,
    activeurl : imglinks[0].imgurl
  }
  getRandomNumber = ()=>(
    Math.floor(Math.random()*2)
  )
  tossing = ()=>{
    const index = this.getRandomNumber()
    if (index===0) {
      this.setState({totalturns : this.state.totalturns+1,
      heads : this.state.heads+1,
      activeurl : imglinks[0].imgurl
     })
    }
    else{
      this.setState({totalturns : this.state.totalturns+1,
        tails : this.state.tails+1,
        activeurl : imglinks[1].imgurl
       })
    }
  }
  render(){
    const {totalturns,heads,tails,activeurl} = this.state
    //console.log(this.getRandomNumber())
    return(
      <div className="container">
        <div className="inner-container">
          <h1 className="heading">Coin Toss Game</h1>
          <h1 className="subheading">Heads (or) Tails</h1>
          <img src={activeurl} alt="coin picture"/>
          <button type="button" onClick={this.tossing}>
            Toss Coin
          </button>
          <div className="bottom">
            <h1>Total : {totalturns}</h1>
            <h1>Heads : {heads}</h1>
            <h1>Tails : {tails}</h1>
          </div>
        </div>
      </div>
    )
  }
}
export default App;