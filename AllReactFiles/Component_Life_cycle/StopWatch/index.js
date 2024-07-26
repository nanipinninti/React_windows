import './index.css'
import { Component } from 'react'
class StopWatch extends Component{
    state = {elapsedtime : 0,
        running : false
    }
    componentWillUnmount(){
        this.clearTimeInterval()
    }
    clearTimeInterval = ()=>{
        clearInterval(this.intervalId)
    }
    timerDisplay = ()=>{
        const {elapsedtime} = this.state
        const minutes = Math.floor(elapsedtime/60)
        const seconds = Math.floor(elapsedtime % 60)
        const stringfiedMinutes = minutes>9 ? minutes : `0${minutes}`
        const stringfiedSeconds = seconds>9 ? seconds : `0${seconds}`
        return `${stringfiedMinutes} : ${stringfiedSeconds}`
    }
    increseTime = ()=>{
        this.setState({
            running : true,
            elapsedtime : this.state.elapsedtime +1
        })
    }
    start = ()=>{
        if (!this.start.running){
            this.intervalId= setInterval(this.increseTime,1000)
        }
    }
    stop = ()=>{
        this.clearTimeInterval()
        this.setState({
            running : false
        })
    }
    reset = ()=>{
        this.clearTimeInterval()
        this.setState({
            elapsedtime : 0,
            running : false
        })
    }

    render(){
        return(
            <div className='body'>
                <h1 className='heading'>Stop Watch</h1>
                <div className='container'>
                    <div className='head'>
                        <img className='head-img img' src='https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png'/>
                        <h1 className='head-text'>Timer</h1>
                    </div>
                    <h1 className='timer-text'>{this.timerDisplay()}</h1>
                    <div className='bottom'>
                        <button className='button button-start' onClick={this.start}>
                            Start
                        </button>
                        <button className='button button-stop' onClick={this.stop}>
                            Stop
                        </button>
                        <button className='button button-reset' onClick={this.reset}>
                            Reset
                        </button>
                    </div>
                </div>
            </div>
        )
    }
    

}
export default StopWatch