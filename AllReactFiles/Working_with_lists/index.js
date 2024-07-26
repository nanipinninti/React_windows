import {Component} from 'react'
import './index.css'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLose from '../WinOrLoseCard'
const emojisList = [
    {
      id: 0,
      emojiName: 'Face with stuck out tongue',
      emojiUrl:
        'https://assets.ccbp.in/frontend/react-js/face-with-stuck-out-tongue-img.png',
    },
    {
      id: 1,
      emojiName: 'Face with head bandage',
      emojiUrl:
        'https://assets.ccbp.in/frontend/react-js/face-with-head-bandage-img.png',
    },
    {
      id: 2,
      emojiName: 'Face with hugs',
      emojiUrl: 'https://assets.ccbp.in/frontend/react-js/face-with-hugs-img.png',
    },
    {
      id: 3,
      emojiName: 'Face with laughing',
      emojiUrl:
        'https://assets.ccbp.in/frontend/react-js/face-with-laughing-img.png',
    },
    {
      id: 4,
      emojiName: 'Laughing face with hand in front of mouth',
      emojiUrl:
        'https://assets.ccbp.in/frontend/react-js/face-with-laughing-with-hand-infront-mouth-img.png',
    },
    {
      id: 5,
      emojiName: 'Face with mask',
      emojiUrl: 'https://assets.ccbp.in/frontend/react-js/face-with-mask-img.png',
    },
    {
      id: 6,
      emojiName: 'Face with silence',
      emojiUrl:
        'https://assets.ccbp.in/frontend/react-js/face-with-silence-img.png',
    },
    {
      id: 7,
      emojiName: 'Face with stuck out tongue and winked eye',
      emojiUrl:
        'https://assets.ccbp.in/frontend/react-js/face-with-stuck-out-tongue-and-winking-eye-img.png',
    },
    {
      id: 8,
      emojiName: 'Grinning face with sweat',
      emojiUrl:
        'https://assets.ccbp.in/frontend/react-js/grinning-face-with-sweat-img.png',
    },
    {
      id: 9,
      emojiName: 'Smiling face with heart eyes',
      emojiUrl:
        'https://assets.ccbp.in/frontend/react-js/smiling-face-with-heart-eyes-img.png',
    },
    {
      id: 10,
      emojiName: 'Grinning face',
      emojiUrl: 'https://assets.ccbp.in/frontend/react-js/grinning-face-img.png',
    },
    {
      id: 11,
      emojiName: 'Smiling face with star eyes',
      emojiUrl:
        'https://assets.ccbp.in/frontend/react-js/smiling-face-with-star-eyes-img.png',
    },
  ]
class EmojiGame extends Component{
    state = {
        visited : [],
        score : 0,
        top : 0,
        isplaying : true
    }
    shuffledArray = (array)=>{
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    }
    gameOverOrNot = (id)=>{
      this.setState(prv=>{
        if (!prv.visited.includes(id)){
          if (prv.score!==11) {
            return ({
              visited : [...prv.visited,id],
              score : prv.score + 1
            })
          }
          return ({
            score : prv.score + 1,
            isplaying : false,
            visited : [...prv.visited,id]
          })
          
        }
        else {
          return ({
            visited : [],
            isplaying : false
          })
        }
      })
    }
    gameWin = () =>{
      this.setState({
        isplaying : false
      })
    }
    playAgain = ()=>{
      this.setState(prv=>(
        {
          score : 0,
          top : prv.score > prv.top ? prv.score : prv.top,
          isplaying : true
        }
      ))
    }
    render(){
        const {visited,score,top,isplaying} = this.state
        this.shuffledArray(emojisList)
        return(
            <div className='body'>
                <NavBar 
                    score = {score}
                    top = {top}
                    isplaying = {isplaying}
                />
                {
                isplaying &&
                emojisList.map(emoji=>(
                  <EmojiCard
                    id = {emoji.id}
                    Emojidetails = {emoji}
                    GameOverOrNot = {this.gameOverOrNot}
                   />
                ))
                }
                {
                  !isplaying && 
                  <WinOrLose 
                    Score = {score}
                    PlayAgain = {this.playAgain}
                  />
                }
            </div>
        )
    }
}
export default EmojiGame