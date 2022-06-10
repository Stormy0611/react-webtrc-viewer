import React from 'react';
import { useNavigate } from 'react-router-dom'

const Splash = () => {

  let navigate = useNavigate();

  return (
    <div
      className='Splash'
      onClick={() => { navigate('/home') }}
    >
      <div>
      </div>
    </div>
  )
}

export default Splash;