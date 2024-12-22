import React, { useContext, useState } from 'react'
import style from './Sidebar.module.css'
import { assets } from '../../assets/assets'
import { Context } from '../context/context';
function Sidebar() {
  let [extented, setExtented] = useState(false);
  const {onSent,prevPrompt,setRecentPrompt,newChat}=useContext(Context);

  const loadPrompt=async(prompt)=>{
   setRecentPrompt(prompt);
   await onSent(prompt);
  }

  return (
    <div className={style.Sidebar}>
      <div className={style.top}>
        <img onClick={() => { setExtented(prev => !prev) }} className={style.menu} src={assets.menu_icon} alt="" />
        <div onClick={()=>newChat()} className={`${style.newChat}`}>
          <img src={assets.plus_icon} alt="" />
          {extented ? <p>new chat</p> : null}
        </div>
        {extented ? <div className={style.recent}>
          <p className={`${style.recentTitle}`}>Recent</p>
          {prevPrompt.map((item,index)=>{
            return( <div onClick={()=>loadPrompt()} className={style.recentEntry}>
            <img src={assets.message_icon} alt="" />
            <p>{item.slice(0,18)}...</p>
          </div>)
          })}
        </div> : null}
      </div>
      <div className={style.bottom}>
        <div className={`${style.bottomItem} ${style.recentEntry}`}>
          <img src={assets.gem_icon} alt="" height={22} />
          {extented ? <p>Gem Manager</p> : null}
        </div>
        <div className={`${style.bottomItem} ${style.recentEntry}`}>
          <img src={assets.question_icon} alt="" />
          {extented ? <p>Help</p> : null}
        </div>
        <div className={`${style.bottomItem} ${style.recentEntry}`}>
          <img src={assets.history_icon} alt="" />
          {extented ? <p>Activies</p> : null}
        </div>
        <div className={`${style.bottomItem} ${style.recentEntry}`}>
          <img src={assets.setting_icon} alt="" />
          {extented ? <p>Settings</p> : null}
        </div>
      </div>
    </div>
  )
}

export default Sidebar