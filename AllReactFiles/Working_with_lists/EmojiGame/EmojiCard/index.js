import './index.css'
const EmojiCard = (props)=>{
    const {Emojidetails,GameOverOrNot} = props
    const {emojiUrl,emojiName,id} = Emojidetails
    const gameoverornot = ()=>{
        GameOverOrNot(id)
    }
    return(
        <button onClick={gameoverornot}>
            <img src = {emojiUrl} alt = {emojiName}/>
        </button>
    )
}
export default EmojiCard