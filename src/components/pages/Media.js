import React, { useEffect, useState } from 'react'
import Header from '../layout/Header';
import ReactModal from 'react-modal'
import LeftSide from '../layout/LeftSide';
import Screen from '../layout/Screen';
import { show } from 'react-modal/lib/helpers/ariaAppHider';
// import { useState } from 'react';

ReactModal.setAppElement('#root')

const Media = (props) => {

    // useLayoutEffect(() => {
    //     window.location.reload(true)
    // }, []);

    // const [isOpen, setIsOpen] = useState(true);

    const [okOpened, setOkOpened] = useState(true)
    const [payOpened, setPayOpened] = useState(false)
    const [isActive, setActive] = useState(false);

    const toggleClass = () => {
        setActive(!isActive);
    };

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

    return (
        <div className='Media'>
            <Header />
            <div className={isActive ? 'MovieBoardfull' : 'MovieBoard'} >
                <div className={isActive ? 'FullBtnfull' : 'FullBtn'} onClick={toggleClass} />
                <div className={isActive ? 'Recordfull' : 'Record'} />
            </div>
            <div className='Avatar' />
            <div className='SessonGroup' />
            <div className='SessionInfo' />
            <div className='Line' />
            <div className='About' />
            <div className='Copy' />
            <div className='Twit' />
            <div className='Team' />
            <div className='Clock'></div>
            <ReactModal
                isOpen={okOpened}
                onRequestClose={closeModal('ok')}
                contentLabel="My dialog1"
                className="OkModal"
                overlayClassName="Overlay"
            >
                <div onClick={() => {
                    setOkOpened(false)
                }}></div>
            </ReactModal>
        </div>
    )
}



export default Media