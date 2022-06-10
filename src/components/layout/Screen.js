import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Screen = () => {

    const handleShare = () => {

    }

    return (
        <div className='Screen'>
            <div className='Main' />
            <div className='StartBtn' onClick={() => {

            }}/>
            <div className='ShareText' onClick={handleShare} />
            <div className='ShareIcon' onClick={handleShare} />
            <div className='EndBtn' onClick={() => {
                
            }}/>
            <div className='Logo' />
            <div className='Text' />
        </div>
    )
}

export default Screen