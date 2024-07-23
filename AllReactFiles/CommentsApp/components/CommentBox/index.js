import './index.css'
import { formatDistance } from 'date-fns';
const CommentBox = (props)=>{
    const {commentdetails,deleteComment,toggleLike} = props
    const {username,comment,isliked,date,id} = commentdetails
    const deletecomment = ()=>{
        deleteComment(id)
    }
    const likebutton = ()=>{
        toggleLike(id)
    }
    const now = new Date();
    const elapsedTime = formatDistance(date, now, { addSuffix: true });
    const likesrc = isliked 
                            ? "https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png "
                            : "https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png"
    const classname = isliked ? "liked" : ""
    return(
        <li className='comment-out-listitem'>
            <div className='top'>
                <div className='top-left'>
                    <button className='profilepic'>{username[0]}</button>
                </div>
                <div className='top-right'>
                    <div className='top-right-top'>
                        <h3 className='username'>{username}</h3>
                        <h4 className='time'>{elapsedTime}</h4>
                    </div>
                    <div className='top-right-bottom'>
                        <p className='comment'>{comment}</p>
                    </div>
                </div>                
            </div>            
            <div className='bottom'>
                <div className='bottom-left'>
                    <button className='like-button button' onClick={likebutton}>
                        <img className='like' alt='likeimg' src={likesrc}/>
                    </button>
                    <h3 className={`like-text ${classname}`} >Like</h3>
                </div>
                <button className='delete-button button' onClick={deletecomment}>
                    <img className='delete' alt='delete-icon' src='https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png' /> 
                    
                </button>
            </div>
            <hr className='separator'/>
        </li>
    )

}
export default CommentBox