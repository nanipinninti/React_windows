import './index.css'
import { Component } from 'react'
const PLUS_IMAGE =
  'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
const MINUS_IMAGE =
  'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
class FaqItem extends Component{
    state = {
        isActive : false
    }
    renderActiveImage = ()=>{
        const {isActive} = this.state
        const imgSrc = !isActive ? {PLUS_IMAGE} : {MINUS_IMAGE}
        const altText = !isActive ? "Plus image" : "Minus image"
        return (
            <button onClick={this.toggle}>
                <img alt={altText} src={imgSrc}/>
            </button>
        )
    }
    toggle = ()=>{
        this.setState({
            isActive : !this.state.isActive
        })
    }
    renderAnswer = ()=>{
        const {Itemdetails} = this.props
        const {isActive} = this.state
        const {answerText} = Itemdetails
        if (isActive){
            return (
                <div>
                    <hr/>
                    <h4 className='answer'>{answerText}</h4>
                </div>
            )
        }
    }
    render(){
        const {Itemdetails} = this.props
        const {questionText} = Itemdetails
        return(
            <li className='list-item'>
                <div className='question'>
                    <h2 className='question-text'>{questionText}</h2>
                    {
                        this.renderActiveImage()
                    }
                </div>
                {
                    this.renderAnswer()
                }
            </li>
        )
    }
}
export default FaqItem


