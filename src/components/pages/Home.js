import React from 'react'
import Header from '../layout/Header';
import { useNavigate } from 'react-router-dom'; 
import ReactModal from 'react-modal'
import { useState } from 'react';
import { ethers } from 'ethers'
import axios  from 'axios'
import { formatFixed } from '@ethersproject/bignumber';

ReactModal.setAppElement("#root");

const Home = (props) => {

    // const [isOpen, setIsOpen] = useState(false);

    const [payOpened, setPayOpened] = useState(false)
    const [okOpened, setOkOpened] = useState(false)
    const [toAddress, setToAddress] = useState('')
    const [fromAddress, setFromAddress] = useState('')

    const openModal = (modalType) => {
        if (modalType == 'pay') {
            setPayOpened(true)
            setOkOpened(false)
        } else if (modalType == 'ok') {
            setPayOpened(false)
            setOkOpened(true)
        }
    };

    const closeModal = modalType => () => {
        if (modalType == 'pay') {
            setPayOpened(false)
        } else if (modalType == 'ok') {
            setOkOpened(false)
        }
    };

    // const toggleModal = () => {
    //     setIsOpen(!isOpen);
    // }
    
    const navigate = useNavigate();
    
    // useLayoutEffect(() => {
        //     window.location.reload(true)
        // }, []);
        
        const [comp, setComp] = useState('media')
        
        return (
            <div className='Home'>
            <Header />
            <div className='Center' />
            <div className='JoinBtn' onClick={() => {
                openModal('pay')
            }} />
            <div className='Line' />
            <div className='About' />
            <div className='Copy' />
            <div className='Twit' />
            <div className='Team' />
            <div className='Clock'></div>
            <ReactModal
                isOpen={payOpened}
                onAfterOpen={() => {
                    if (window.ethereum) {
                        // Do something 
                        window.ethereum.request({ method: 'eth_requestAccounts' })
                        .then(res => {
                            // Return the address of the wallet
                            setFromAddress(res[0])
                        })
                    } else {
                        alert("install metamask extension!!")
                    }
                }}
                onRequestClose={() => {
                    closeModal('pay')
                }}
                    contentLabel="My dialog"
                    className="PayModal"
                    overlayClassName="Overlay"
                    >
                <div className='MDesc'></div>
                <button className='PayBtn' style={{
                    textAlign: 'center',
                    fontSize: '40px'
                    }}
                    onClick={() => {
                    // Get to address
                    axios.post("http://10.10.11.51:5000/get",
                    ).then(res => {
                        setToAddress(res)
                        console.log(toAddress)
                        console.log(fromAddress)
                            if (window.ethereum && fromAddress != '' && toAddress != '') {
                                // Do something
                                // const b = ethers.utils.parseUnits('0.0001', 18)
                                // const e = b.toString();
                                // console.log(e)
                                // window.ethereum.request({
                                //     method: 'eth_sendTransaction',
                                //     params: [
                                //         {
                                //             from: fromAddress,
                                //             to: toAddress,
                                //             value: ethers.utils.parseUnits('100000000000000', 'wei').toString(),
                                //         },
                                //     ],
                                // }).then(res => {
                                //     setOkOpened(true)
                                //     navigate('/broadcast')
                                // }).catch(err => {
                                //     console.log(err)
                                // })
                                // const { ethereum } = window;
                                
                                const provider = new ethers.providers.Web3Provider(window.ethereum);
                                const signer = provider.getSigner();
                                let tx = {
                                    to: toAddress,
                                    value: ethers.utils.parseEther('0.0001')
                                };
                                signer.sendTransaction(tx).then((txObj) => {
                                    console.log('txHash', txObj.hash);
                                });
                            } else {
                                alert("install metamask extension!!")
                            }
                        
                    }).catch(err => {
                        console.log(err)
                        })
                        
                    }}
                    >PAY</button>
            </ReactModal>
        </div>
    )
}



export default Home