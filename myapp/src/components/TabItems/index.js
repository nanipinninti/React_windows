import { Button } from 'bootstrap'
import './index.css'
const TabItems = (props)=>{
    const {TabDetails,ActiveTab,ActiveTabChange} = props
    const {tabId,displayText} = TabDetails
    const activetab = ()=>{
        ActiveTabChange(tabId)
    }
    const ClassName = ActiveTab === tabId ?
                'tab-button active-tab' :
                'tab-button button'
    return(
        <li className='tabitem-list-item'>
            <button type='button' onClick={activetab} className={ClassName}>
                {displayText}
            </button>
        </li>
    )
}
export default TabItems


