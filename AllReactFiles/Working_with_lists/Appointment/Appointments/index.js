import { Component } from "react";
import "./index.css"
import {v4 as uuidv4} from 'uuid'
import AppointmentItem from "../AppointmentItem"; 
class Appointments extends Component{
    state = {
        appointmentsList : [
            {
                id : uuidv4(),
                appointmentname : "DBMS Class",
                date : new Date(),
                stared : false
            }
        ],
        appointmentname : "",
        date : "",
        filtermode : false
    }
    onAppointmentEnter = (event)=>{
        this.setState({
            appointmentname : event.target.value
        })
    }
    onDateEnter = (event)=>{
        this.setState({
            date : event.target.value
        })
    }
    onsubmit = (event)=>{
        event.preventDefault()
        const {appointmentname,date} = this.state
        const newappointment = {
            id : uuidv4(),
            appointmentname,
            date,
            stared : false

        }
        this.setState(prv=>({
            appointmentsList : [...prv.appointmentsList,newappointment],
            appointmentname : "",
            date : ""
        }))
    }

    toggleLike = (id)=>{
        this.setState(prv=>(
            {
                appointmentsList : prv.appointmentsList.map(obj=>{
                    if (obj.id===id){
                        return {...obj,stared : !obj.stared}
                    }
                    return obj
                })
            }
        ))
    }
    toggleFilterMode = ()=>{
        this.setState({
            filtermode : !this.state.filtermode
        })
    }
    render(){
        const {appointmentsList,appointmentname,date,filtermode} = this.state
        const modifiedappointmentList = !filtermode ? [...appointmentsList]
                                        : appointmentsList.filter(obj=>(obj.stared))
        const classname = filtermode ? "fill" : ""
        return(
            <div className="body">
                <div className="container">
                    <div className="top">
                        <form className="appointment-form" onSubmit={this.onsubmit}>
                            <h1 className="heading">Add Appointment</h1>
                            <h2 className="title-text">TITTLE</h2>
                            <input className="title-input input" placeholder="Title" type="text" onChange={this.onAppointmentEnter} value={appointmentname}/>
                            <h2 className="date-text">DATE</h2>
                            <input className="title-input input" placeholder="Title" type="date" onChange={this.onDateEnter} value={date} />
                            <button className="submit" type="submit">Add</button>
                        </form>
                        <img className="image" src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"/>
                    </div>
                    <hr className="separator"/>

                    {/* bottom */}
                    <div className="middle">
                        <h1 className="middle-heading">Appointments</h1>
                        <button className={`stared ${classname}`} onClick={this.toggleFilterMode}>
                            Stared
                        </button>
                    </div>
                    <ul className="appointments-list">
                        {
                            modifiedappointmentList.map(appointmentdetails=>(
                                <AppointmentItem
                                    key = {appointmentdetails.id}
                                    appointmentdetails = {appointmentdetails}
                                    toggleLike = {this.toggleLike}
                                />
                            ))
                        } 
                    </ul>
                </div>
            </div>
        )
    }
}
export default Appointments