import './index.css'
import { format } from "date-fns";
const AppointmentItem = (props)=>{
    const {appointmentdetails,toggleLike}= props
    const {appointmentname,date,stared,id} = appointmentdetails
    const like = ()=>{
        toggleLike(id)
    }
    const imgsrc = stared
                    ? "https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png"
                    : "https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png"
    const displayDate = format(new Date(date), 'dd MMMM yyyy, EEEE')
    return(
        <li className='list-item'>
            <div className='list-item-top'>
                <h2 className='appointment-name'>{appointmentname}</h2>
                <button className='star-button' onClick={like}>
                    <img src={imgsrc} alt='star' className='star-img' />
                </button>
            </div>
            <h2 className='date-display'>{displayDate}</h2>
        </li>
    )
}
export default AppointmentItem
