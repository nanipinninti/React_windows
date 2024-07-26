import './index.css'
import {Component} from 'react'
const intitalState = {
    isclockrunning : false,
    elapsedtime : 0,
    time : 1
}
class DigitalClock extends Component{
    state = intitalState
    componentWillUnmount() {
        this.clearTimerInterval()
      }
    
    incriment = ()=>{
        if (!this.state.isclockrunning){
            this.setState({
                time : this.state.time + 1
            })}
    }
    decriment = ()=>{
        if (!this.state.isclockrunning){
        this.setState({
            time : this.state.time!=0 ? this.state.time -1 : 0
        })}
    }
    timeDisplay = ()=>{
        const {time,elapsedtime} = this.state
        const remainingtime = time*60 - elapsedtime
        const minutes = Math.floor(remainingtime / 60)
        const seconds = Math.floor(remainingtime%60)
        const stringfiedMinutes = minutes > 9 ? minutes : `0${minutes}`
        const stringfiedSeconds = seconds > 9 ? seconds : `0${seconds}`
        return `${stringfiedMinutes} : ${stringfiedSeconds}`
        
    }
    clearTimerInterval = ()=>{
        clearInterval(this.intervalId)
    }
    increaseElapsedTime = ()=>{
        const {isclockrunning,elapsedtime,time} = this.state
        const isTimerCompleted = time*60 === elapsedtime
        if (isTimerCompleted){
            this.clearTimerInterval()
            this.setState({
                isclockrunning : false
            })
        }
        else{
            this.setState({elapsedtime: this.state.elapsedtime+1})
        }

    }
    startOrPause = ()=>{
        const {isclockrunning,elapsedtime,time} = this.state
        const isTimerCompleted = time*60 === elapsedtime
        if (isTimerCompleted) {
            this.setState({elapsedtime : 0})
        }
        if (isclockrunning){
            this.clearTimerInterval()
        }
        else{
            this.intervalId = setInterval(this.increaseElapsedTime,1000)
        }
        this.setState({isclockrunning : !this.state.isclockrunning })
    }
    onRestetTimer = ()=>{
        this.clearTimerInterval()
        this.setState(intitalState)
    }
    render(){
        const {date,isclockrunning,time} = this.state
        const start_text = isclockrunning ? "Pause" : "Start"
        const start_src = isclockrunning ? "https://assets.ccbp.in/frontend/react-js/pause-icon-img.png"
                                 : "https://assets.ccbp.in/frontend/react-js/play-icon-img.png"
        return(
            <div className='container'>
                <h1 className='heading'>Digital Timer</h1>
                <div className='timer'>
                    <div className='clock'>
                        <h1 className = 'time'>{this.timeDisplay()}</h1>
                        <h2 className = 'mode'>
                            {
                                (isclockrunning)?"Running" : "Paused"
                            }
                        </h2>
                    </div>
                    <div className='set-timer'>
                        <div className='start-reset'>
                            <div className='start'>
                                <button className='button start-button' onClick={this.startOrPause}>
                                    <img className='start-img'
                                        alt='start/pause' src={start_src}
                                    />
                                </button>
                                <h2 className='text'>
                                    {start_text}
                                </h2>
                            </div>
                            <div className='reset'>
                                <button className='button reset-button' onClick={this.onRestetTimer}>
                                    <img src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
                                        alt = "reset-img"/>                                    
                                </button>
                                <h2 className='text'>Reset</h2>
                            </div>
                        </div>

                        <h3 className='sub-text text'>Set Timer limit</h3>
                        <div className='settings'>
                            <button onClick={this.decriment}>
                                <h2 className='text'>-</h2>
                            </button>
                            <h1 className='settings-text'>
                                {time}
                            </h1>
                            <button onClick={this.incriment}>
                                <h2 className='text'>+</h2>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default DigitalClock