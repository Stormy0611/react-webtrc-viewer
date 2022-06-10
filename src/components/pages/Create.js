import React, { useState } from 'react'
import Header from '../layout/Header';
import LeftSide from '../layout/LeftSide';
import Session from '../layout/Session';
// import { useState } from 'react';

const Create = (props) => {

    const [myAccount, setAccount] = useState(props)

    const changeAccount = (_account) => {
        setAccount(_account)
        sessionStorage['account'] = _account
    }

    // useLayoutEffect(() => {
    //     window.location.reload(true)
    // }, []);

    // const [comp, setComp] = useState(false)

    // const changeComp = (_comp) => {
    //     setComp(_comp);
    // }

    // let currentComp;
    // if (comp)
    //     currentComp = (<Session />)
    // else
    //     currentComp = (<Center onchange={changeComp} />)

    return (
        <div className='Create'>
            <Header />
            <LeftSide account={ props.account} />
            {/* {currentComp} */}
            <Session change={changeAccount.bind()} />
            <div className='Line' />
            <div className='About' />
            <div className='Copy' />
            <div className='Twit' />
            <div className='Team' />
            <div className='Clock'></div>
        </div>
    )
}



export default Create