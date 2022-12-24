import React from 'react'
import OffcanvasExample from '../hamberger'
import './header.css'

const Header = () => {
  return (
    <div className='container header-container'>
      <div className='header-left'>
        <img src='/icons/ifStatic.png' className='app-logo' />
      </div>
      <div className='header-right'>
        <ul className='d-flex header-right_list' type='none'>
          <li className='list-li'>Home</li>
          <li className='list-li'>Free UI Trial</li>
          <li className='list-li'>Services</li>
          <li className='list-li'>Portofolio</li>
          <li className=' header-contact d-flex align-items-center'>
            <button className='header-contact-btn' >
              Contact Us
            </button>
            <div className='pe-2'>
              <img src='/icons/arrow1.png'/>
            </div>
          </li>
        </ul>
      </div>
      <div className='d-md-none header-left-list-btn '>
         <img src="/icons/list.png" alt=""  width={30}/>
      </div>

    </div>
  )
}

export default Header

