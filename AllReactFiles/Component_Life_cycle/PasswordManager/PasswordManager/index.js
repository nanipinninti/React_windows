import './index.css'
import { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {v4 as uuidv4} from 'uuid'
import YourPasswords from '../YourPasswords';
class PasswordManager extends Component{
    state = {
        passowrdlist : [
            {
                id : uuidv4(),
                website : "xnxx.com",
                username : "Dillu",
                password : "xxx"
            }
        ],
        website : '',
        username : '',
        password : '',
        show : false,
        search : ''
    }
    websiteEnter = (event)=>{
        this.setState({
            website : event.target.value
        })
    }
    usernameEnter = (event)=>{
        this.setState({
            username : event.target.value
        })
    }
    passwordEnter = (event)=>{
        this.setState({
            password: event.target.value
        })
    }
    addnewpassword = ()=>{
        const {username,website,password} = this.state
        return (<form className='form' onSubmit={this.onSubmit}>
            <h1 className=''>
                Add New Password
            </h1>
            <div className='input-field'>
                <img className='input-img'  src='https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png'/>
                <input type='text' placeholder='Enter website' value={website} onChange={this.websiteEnter}/>
            </div>
            <div className='input-field'>
                <img className='input-img'  src='https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png '/>
                <input type='text' placeholder='Enter Username' value={username} onChange={this.usernameEnter}/>
            </div>
            <div className='input-field'>
                <img className='input-img'  src='https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png'/>
                <input type='password' placeholder='Enter Password' onChange={this.passwordEnter} value={password} />
            </div>
            <button type='submit'>Add</button>
        </form>)
    }
    onSubmit = (event)=>{
        event.preventDefault()
        const {username,website,password} = this.state
        const newItem  = {
            id : uuidv4(),
            website,
            password,
            username
        }
        this.setState(prv=>({
            passowrdlist : [...prv.passowrdlist , newItem],
            website : '',
            username : '',
            password : ''
        }))
    }
    showToggle = ()=>{
        this.setState({
            show  : !this.state.show
        })
    }
    filteredDetails = ()=>{
        const {search,passowrdlist} = this.state
        const fitlereddetails = passowrdlist.filter(obj=>(
            obj.website.includes(search)
        ))
        return fitlereddetails
    }
    deleteItem = (id)=>{
        this.setState(prv=>({
            passowrdlist : prv.passowrdlist.filter(item=>(
                item.id!==id
            ))
        }))
    }
    searchEnter =(event)=> {
        this.setState({
            search : event.target.value
        })
    }
    render(){
        const filtereddetails = this.filteredDetails()
        const {username,website,password,passowrdlist,show} = this.state
        return(
            <div className='body fluid-container '>
                <img src='https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png'
                    alt='app-logo' className='app-logo' />
                <div >
                    {
                        this.addnewpassword()
                    }
                </div>
                <div>
                    <div className='bottom-head'>
                        <h3 className=''>Your Passwords <span>{passowrdlist.length}</span></h3>
                        <input type='search'  onChange={this.searchEnter}/>
                    </div>
                    <div>
                        <input type='checkbox' onClick={this.showToggle}></input>
                        <ul>
                            {
                                filtereddetails.map(obj=>(
                                    <YourPasswords
                                        key = {obj.id}
                                        PasswordDetails = {obj}
                                        DeleteFunction = {this.deleteItem}
                                        IsShow = {show}
                                    />
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
export default PasswordManager