import './index.css'
const AppItems = (props)=>{
    const {Appdetails} = props;
    const {appId,appName,imageUrl,category} = Appdetails
    return(
        <li className='box'>
            <img src={imageUrl} alt={category}/>
            <h1>{appName}</h1>
        </li>
    )
}
export default AppItems