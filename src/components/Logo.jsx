import React from 'react'
import './Logo.css'
import logo from '../logo.png'

function Logo() {
    return (
        <div className='headerdiv'>
            <div className='flex justify-between'>
                <div className='logo'>
                    <img width={'130px'} src={logo} alt="" />
                </div>
                {/* <div className='flex mr-10'>
                    <p className='h-[30px] bg-white rounded'>XYZ Enterprises Pvt.Ltd</p>
                    <div className=' bg-white rounded'></div>
                </div> */}
            </div>

        </div>
    )
}

export default Logo