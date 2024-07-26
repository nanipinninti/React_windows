import './index.css'

const Tabitem = props => {
  const {tabDetails,activetab,updateActivestate} = props
  const {tabId,displayText} = tabDetails
  
  const updating = ()=>{
    updateActivestate(tabId)
  }
  //console.log(activetab)
  const classname = (tabId===activetab) ? "active-tab-btn" : ""
  console.log(tabId,classname)
  return (
    <li className="tab-item-container ">
      <button type="button" onClick={updating} className={`tab-btn ${classname}`}>
        {displayText}
      </button>
    </li>
  )
}

export default Tabitem
