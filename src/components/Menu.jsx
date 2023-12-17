import React from 'react'
import './Menu.css'

function Menu() {
    return (
        <div className='menubar shadow'>
            <div className='shadow'>
                <div className='flex justify-center pt-4 pb-3'>
                    <img className='w-[80px] rounded-full' src="data:image/jpeg;base64,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" alt="" />

                </div>
                <p className='text-center text-sm font-bold'>Ram Mohan</p>
                <p className='text-center pb-4 text-xs font-medium'>rammohan@gmail.com</p>
            </div>
            <div className='pt-3'>
                <p className='dashboard p-2 mb-3 border font-medium'>Dashboard</p>
                <p className='perks p-2 mb-3 border font-medium'>Perks</p>
                <p className='perks p-2 mb-3 border font-medium'>Addons</p>
                <p className='perks p-2 mb-3 border font-medium'>FAQ</p>
                <p className='perks p-2 mb-3 border font-medium'>Support</p>

            </div>
            <div className='top-2 relative flex justify-center bg-blue-50'>
                <button className='btn text-sky-700 font-semibold'>Logout <i className="fa-solid fa-power-off text-sm"></i></button>
            </div>
        </div>
    )
}

export default Menu