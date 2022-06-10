import React from 'react'
import ReactTooltip from 'react-tooltip'

const LeftSide = (props) => {

    return (
        <div className='LeftSide'>
            <div className='Avatar' />
            <div className='Avatar_name' />
            <div className='Avatar_stream' />
            <div className='Icon1' />
            <div className='Icon3' />
            <p className='Address' >{ props.account }</p>
            <div className='Icon4' />
            <div className='Icon5' />
            <div className='Icon2' data-tip data-for="copyTip" />
            <ReactTooltip
                event='click' id='copyTip' place="top"
                delayHide={1000}
                afterShow={() => {
                    navigator.clipboard.writeText(props.account)
                }
                }
            >
                Copy address to clipboard!
            </ReactTooltip>
            <div className='SessionGroup' />
        </div>
    )
}

export default LeftSide