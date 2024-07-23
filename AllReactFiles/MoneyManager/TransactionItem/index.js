import './index.css'
const TransactionItem = (props)=>{
    const {transaction,deleteAction}  = props
    const {Title,Amount,type,id} = transaction
    const deleteaction = ()=>{
        deleteAction(id,type,Amount)
    } 
    return(
        <li className='history-list-item'>
            <h1 className='table-cell' >{Title}</h1>
            <h1 className='table-cell'>{Amount}</h1>
            <h1 className='table-cell'>{type}</h1>
            <button className='delete-button' onClick={deleteaction}>
                <img className='delete-icon' src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"/>
            </button>
        </li>
    )
}
export default TransactionItem