import './index.css'
const AppTab = (props)=>{
    const {tabDetails,updateTab,activeTab} = props
    const update = ()=>{
        updateTab(tabDetails.tabId)
    }
    const classname = (tabDetails.tabId===activeTab) ? "active-tab" : "";
    return(
        <li className='tab-list-item'>
            <button onClick={update} className={`tab-button ${classname}`}>
                {tabDetails.displayText}
            </button>
        </li>
    )
}
export default AppTab