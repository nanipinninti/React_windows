import './index.css'
const MoneyDetails = (props)=>{
    const {moneydetails} = props
    const {Income,Expense} = moneydetails
    return(
        <ul className='moneydetails'>
            <li className='list-item balance'>
                <img src='https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png ' alt='balance-pic'/>
                <div className='list-item-right'>
                    <h2 className='list-item-heading'>Your Balance</h2>
                    <h1 className='amount'>Rs {parseInt(Income-Expense)}</h1>
                </div>
            </li>

            <li className='list-item income'>
            <img src='https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png ' alt='balance-pic'/>
            <div className='list-item-right'>
                <h2 className='list-item-heading'>Your Income</h2>
                <h1 className='amount'>Rs {parseInt(Income)}</h1>
            </div>
            </li>

        <li className='list-item expense'>
        <img src='https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png ' alt='balance-pic'/>
        <div className='list-item-right'>
            <h2 className='list-item-heading'>Your Expense</h2>
            <h1 className='amount'>Rs {parseInt(Expense)}</h1>
        </div>
        </li>
    </ul>
    )
}
export default MoneyDetails