import './index.css'
const YourPasswords = (props)=>{
    const {PasswordDetails,DeleteFunction,IsShow} = props
    const {website,username,id,password} = PasswordDetails
    const passwordText = IsShow ? password : "*".repeat(password.length)
    const deleteitem = ()=>{
        DeleteFunction(id)
    }
    return(
        <li>
            <h2 >{website}</h2>
            <h3>{username}</h3>
            <h4>{passwordText}</h4>
            <button onClick={deleteitem}>
                <img src='https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png'
                    alt='delete-icon'/>
            </button>
        </li>
    )
}
export default YourPasswords


