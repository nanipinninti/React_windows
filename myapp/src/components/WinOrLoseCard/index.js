import './index.css'
const WinOrLose = (props)=>{
    const {Score,PlayAgain} = props
    const imgUrl = Score=== 12 ? 
                    "https://assets.ccbp.in/frontend/react-js/won-game-img.png"
                : "https://assets.ccbp.in/frontend/react-js/lose-game-img.png"

    const text = Score=== 12 ? "You Won" : "You Lose"
    const subtext = Score=== 12 ? "Best Score" : "Score"
    return(
        <div >
            <img alt={text} src={imgUrl}/>
            <h1 >{text}</h1>
            <h2>{subtext}</h2>
            <h1> {Score}/12</h1>
            <button onClick={PlayAgain}>
                PlayAgain
            </button>
        </div>
    )
}
export default WinOrLose