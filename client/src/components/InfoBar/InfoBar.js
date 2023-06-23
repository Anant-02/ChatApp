import React from 'react'
import onlineIcon from '../../icons/onlineIcon.png'
import closeIcon from '../../icons/closeIcon.png'
import './InfoBar.css';

const InfoBar = ( { room } ) => {
  return (
    <div className='infoBar'>
        <div className='leftInnerContainer'>
            <img className='onlineIcon' style={{height: "30px", width: "30px"}} src={onlineIcon} alt='online'></img>
            <h3>{room}</h3>
        </div>
        <div className='rightInnerContainer'>
            <a href='/'><img style={{height: "30px", width: "30px"}} src={closeIcon} alt="close"></img></a>
        </div>
    </div>
  )
}

export default InfoBar