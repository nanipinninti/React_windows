import { Component } from "react";
import "./App.css"
const reviewsList = [
  {
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/wade-warren-img.png',
    username: 'Wade Warren',
    companyName: 'Rang',
    description:
      'The most important thing I learnt is that nothing is a failure, but what we learn from that is a rich and rewarding experience.',
  },
  {
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/adrian-williams-img.png',
    username: 'Adrian Williams',
    companyName: 'WheelO',
    description:
      'Coming to Startup School is the best thing that has happened to me. I wish every startup in the country should get this opportunity.',
  },
  {
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/sherry-jhonson-img.png',
    username: 'Sherry Johnson',
    companyName: 'MedX',
    description:
      'I am glad to have such experienced mentors guiding us in every step through out the 4 weeks. I have improved personally and developed many interpersonal skills.',
  },
  {
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/ronald-jones-img.png',
    username: 'Ronald Jones',
    companyName: 'Infinos Tech',
    description:
      'I am really loving the way how mentors are taking care of us, the way they are explaining big theories with lots of case studies and innovative methods.',
  },
]
const len = reviewsList.length
class App extends Component{
  state = {index:0}
  leftclick = ()=>{
    this.setState({index : ((this.state.index - 1)>=0)? this.state.index - 1 : len-1})
  }
  rightclick = ()=>{
    this.setState({index : ((this.state.index + 1)!==len)? this.state.index + 1 : 0})
  }
  render(){
    const {index} = this.state
    const {imgUrl,username,companyName,description} = reviewsList[index]
    
    return(
      <div className="external">
          <div className="container">
          <h1 className="heading">
            Reviews
          </h1>
          <div className="middle">
            <button className="button" onClick={this.leftclick}>
              <img alt="leftbutton" src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png" className="buttonimg"/>
            </button>
            <div className="profile">
                <img className="profilepic" alt="profilepic"
                    src={imgUrl}
                />
                <h1 className="name">{username}</h1>
                <h3 className="company">{companyName}</h3>
                    
            </div>
            <button className="button" onClick={this.rightclick}>
              <img alt="leftbutton" src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png" className="buttonimg"/>
            </button>
          </div>
          <h3 className="description">{description}</h3>
        </div>
      </div>
    )
  }
}
export default App