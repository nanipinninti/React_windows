import './index.css'
const NavBar = (props)=>{
    const {top,score,isplaying} = props
    return(
    <div className='nav-glass'>
        <div className='nav-bar'>
            <div className='nav-left'>
                <img className='nav-logo' alt='logo'
                    src='https://assets.ccbp.in/frontend/react-js/game-logo-img.png'/>
                <h3 className='nav-title'>Emoji Game</h3>
            </div>
            <div className='nav-right'>
                {isplaying && <h2 className='score'>Score : {score}</h2>}
                {isplaying && <h2 className='top'>Top : {top}</h2>}
            </div>
        </div>
    </div>
    )
}
export default NavBar