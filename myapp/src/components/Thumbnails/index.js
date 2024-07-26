import './index.css'
const Thumbnails = (props)=>{
    const {ThumbnailDetails,ThumbnailClickCheck} = props
    const {thumbnailUrl,id} = ThumbnailDetails
    const thumbnailCheck = ()=>{
        ThumbnailClickCheck(id)
    }
    return(
        <li className='thumbnail-list-item'>
            <button type='button' onClick={thumbnailCheck} className='thumbnail-button'>
                <img src={thumbnailUrl} className='thumbnail-img' />
            </button>
        </li>
    )
    
}
export default Thumbnails


