import { Component } from "react";
import {v4 as uuidv4} from 'uuid'
import './App.css'
import CommentBox from "./components/CommentBox";
class App extends Component{
  state = {
    commentsList : [
      {
        id : uuidv4(),
        username:"Nani",
        comment :"This is so good video",
        date : new Date()
      }
    ],
    username : "",
    comment : ""
  }
  onUserNameEnter = event =>{
    this.setState({
      username : event.target.value
    })
  }
  onCommentEnter = event =>{
    this.setState({
      comment : event.target.value
    })
  }

  onCommentAdd = (event)=>{
    event.preventDefault()
    const {username,comment} = this.state
    const newcomment = {
      id : uuidv4(),
      username,
      comment,
      isliked : false,
      date : new Date()
    }
    this.setState(prv =>(
      {
        commentsList : [...prv.commentsList,newcomment],
        username : "",
        comment : ""
      }
    ))
  }
  toggleLike = id =>{
    this.setState(prv=>(
      {
        commentsList : prv.commentsList.map(current=>{
          if (current.id===id){
            return {...current,isliked : !current.isliked}
          }
          return current
        })
      }
    ))
  }

  deleteComment = id=>{
    this.setState(prv=>(
      {
        commentsList : prv.commentsList.filter(current =>(current.id !==id))
      }
    ))
  }
  render(){
    const {commentsList,username,comment} = this.state
    return(
      <div className="container">
        <div className="innercontainer">
          <h1 className="heading">Comments</h1>
          <div className="responsive-container">
              <img className="image" src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"/>
              <div className="comment-in-box">
                  <h3 className="subheading">Say something about 4.0 Technologies</h3>
                  <form className="comment-in-form" onSubmit={this.onCommentAdd}>
                    <input className="comment-in-name" type="text"  value={username}
                       placeholder="Your name" onChange={this.onUserNameEnter}/>
                    <textarea className="comment-in-comment" value={comment}
                       placeholder="Your comment" onChange={this.onCommentEnter}/>
                    <button type="submit" className="submit">Add comment</button>
                  </form>
              </div>
          </div>
          <hr className="separator"/>
          <div className="comment-out">
            <h1 className="comment-out-heading"> <span className="count">{commentsList.length}</span> Comments</h1>
            <ul className="comments">
            {
              commentsList.map(comment=>
                <CommentBox 
                  key = {comment.id}
                  commentdetails = {comment}
                  deleteComment = {this.deleteComment}
                  toggleLike = {this.toggleLike}
                />
              )
            }
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default App