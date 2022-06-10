import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Session = (props) => {

    const [sname, setSName] = useState()
    const [sdesc, setSDesc] = useState()
    const [fees, setFees] = useState()

    const handleChange = (_account) => {
        props.change(_account)
    }
    
        let navigate = useNavigate();

        return (
        <div className='Session'>
            <div className='Logo' />
            <div className='Text' />
            <div className='SName' />
            <div className='SDesc' />
            <div className='Fee' />
            <div className='Icon' />
            <div className='Min' />
                <input type='text' id='name' onChange={(e) => {
                    setSName(e.target.value)
                }} required />
                <input type='text' id='desc' onChange={(e) => {
                    setSDesc(e.target.value)
                }} />
            <input type='number' step={0.0001} id='fee' onChange={(e) => {
                setFees(e.target.value)                
                }} required/>
                <div className='CreateBtn' onClick={async () => {
                    if (window.ethereum) {
                        // Do something 
                        window.ethereum.request({ method: 'eth_requestAccounts' })
                        .then(res => {
                            // Return the address of the wallet
                            handleChange(res[0])
                            // setTimeout(() => {
                                navigate('/broadcast')
                            // }, 1000);
                        })
                    } else {
                        alert("install metamask extension!!")
                    }
                    
            }} />
            <div className='UnderText' />
        </div>
    )
}

export default Session