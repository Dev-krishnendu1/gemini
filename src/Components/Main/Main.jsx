import React, { useContext } from 'react'
import style from './Main.module.css'
import { assets } from '../../assets/assets'
import { Context } from '../context/context'
function Main() {

 const {onSent,recentPrompt,showResult,loading,resultData,input,setInput}=useContext(Context)

  return (
    <div className={style.main}>
      <div className={style.nav}>
        <p>Gemini</p>
        <img src={assets.user_icon} alt="upload" />
      </div>
      <div className={style.mainContainer}>
      {!showResult? <>
        <div className={style.greet}>
          <p> <span>Hi,Krishnendu</span></p>
          <p>How can I help you?</p>
        </div>
        <div className={style.cards}>
          <div className={style.card}>
            <p>suggest beautiful places to see upcoming roadtrip.</p>
            <img src={assets.compass_icon} alt="" />
          </div>
          <div className={style.card}>
            <p>Briefly summarize the concepts:urban planning.</p>
            <img src={assets.bulb_icon} alt="" />
          </div>
          <div className={style.card}>
            <p>Brainstorm team bonding activites for our work retreat. </p>
            <img src={assets.message_icon} alt="" />
          </div>
          <div className={style.card}>
            <p>Improve readability of the following code.</p>
            <img src={assets.code_icon} alt="" />
          </div>
        </div>
        </>:
        <div className={style.result}>
          <div className={style.resultTitle}>
            <img src={assets.user_icon} alt="no icon" />
            <p>{recentPrompt}</p>
          </div>
          <div className={resultData}>
            <img src={assets.gemini_icon} alt="" />
            {loading?<div className={style.loader}>
              <hr />
              <hr />
              <hr />
            </div>:
              <p dangerouslySetInnerHTML={{__html:resultData}}>{resultData}</p>
            }
              </div>
          </div>}
      <div className={style.mainBottom}>
        <div className={style.searchBox}>
          <input onChange={(e)=>{setInput(e.target.value)} } value={input} type="text" placeholder='Enter prompt here.' />
          <div>
            <img src={assets.gallery_icon} alt="" />
            <img src={assets.mic_icon} alt="" />
            <img onClick={()=>onSent()} src={assets.send_icon} alt="" />
          </div>
        </div>
        <div className={style.mainBottomInfo}>
          <p>Gemini may display inaccurate info, including about people ,so double-check its responses.Your privacy and Gemini App.</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Main