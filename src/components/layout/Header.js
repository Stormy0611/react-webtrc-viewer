import React from 'react'
import { useNavigate } from 'react-router-dom'

const Header = () => {

  let navigate = useNavigate();

  return (
    <div
      className='Header'
      onClick={() => { navigate('/') }}
    >
    </div>
  )
}

export default Header