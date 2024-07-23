import { Component } from "react";
import './index.css'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from "../MoneyDetails";
import TransactionItem from "../TransactionItem";
class MoneyManager extends Component{
    state = {
        History : [{
            id : 1,
            Title : "Nani",
            Amount : 50000,
            type : "Income"
        }],
        Title : "",
        Income : 50000,
        Expense : 0,
        type : "Income",
        Amount : 0
    }
    onTitleEnter = (event)=>{
        this.setState({
            Title : event.target.value
        })
    }
    onAmountEnter = (event)=>{
        this.setState({
            Amount : event.target.value 
        })
    }
    onTypeEnter = (event)=>{
        this.setState({
            type : event.target.value
        })
    }
    onsubmit = (event)=>{
        event.preventDefault()
        const {Title,type,Amount,Income,Expense} = this.state
        const newtransaction = {
            id : uuidv4(),
            Title,
            Amount,
            type

        }
        const newincome = (type==="Income") ? Income + Amount : Income
        const newexpense = (type==="Expense") ? Expense + Amount : Expense
        this.setState(prv=>({
            History : [...prv.History,newtransaction],
            Title : "",
            Amount : "",
            type : "Income",
            Income : newincome,
            Expense : newexpense
        }))
    }
    deleteAction = (id,type,amount)=>{
        this.setState(prv=>({
            History : prv.History.filter(obj=>(obj.id!=id)),
            Income : type ==="Income" ? prv.Income - amount : prv.Income ,
            Expense : type ==="Expense" ? prv.Expense - amount : prv.Expense
        }))
    }
    render(){
        const {History,Title,Income,Amount,Expense,type} = this.state
        return(
            <div className="body">
                <div className="container">
                    <div className="head">
                        <h1 className="heading">Hi, Nani</h1>
                        <h3 className="sub-heading">Welcome back to your <space className="sub-sub-heading">Money Manager</space></h3>
                    </div>
                    <MoneyDetails moneydetails={this.state}/>
                    <div className="bottom">
                        <form className="add-transaction" onSubmit={this.onsubmit}>
                            <h1 className="bottom-heading">Add Transaction</h1>
                            <h3 className="label">TITLE</h3>
                            <input className="input" type="text" value={Title} onChange={this.onTitleEnter}
                                placeholder="TITLE" />

                            <h3 className="label">AMOUNT</h3>
                            <input className="input" type="number" value={Amount} onChange={this.onAmountEnter}
                                placeholder="AMOUNT" />

                            <h3 className="label">TYPE</h3>
                            <select className="input" onChange={this.onTypeEnter} value={type}>
                                <option value="Income">Income</option>
                                <option value="Expense">Expense</option>
                            </select>
                            <button className="submit" type="submit">
                                Add
                            </button>
                        </form>
                        <ul className='history-list'>
                            <h1 className="bottom-heading">History</h1>
                            <li className="table-head history-list-item">
                                <h1 className="table-head-cell">Title</h1>
                                <h1 className="table-head-cell">Amount</h1>
                                <h1 className="table-head-cell specical">Type</h1>
                                <button className="delete-button"></button>
                            </li>
                            {
                                History.map(transaction=>(
                                    <TransactionItem 
                                        key = {transaction.id}
                                        transaction = {transaction}
                                        deleteAction = {this.deleteAction}
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
export default MoneyManager