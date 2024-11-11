import React from 'react'
import './Navbar.css'


import logo from '../../../Assets/Img/logo.png'
import calenderimg from '../../../Assets/Img/calenderimg.svg'
import notifactionimg from '../../../Assets/Img/notifaction.svg'

export default function Navbar() {
  return (
    <div>

      <div className='loginandsignupmainparentbtndiv'>

        <button>Login In</button>
        <button>Signup</button>


        <img src={calenderimg} alt="" />
        <img src={notifactionimg} alt="" />
      </div>

    </div>
  )
}
