import React from 'react'
import './Dashboard.css'

function Dashboard() {
    return (
        <div className='dashborad '>
            <div className='headpart flex justify-between'>
                <h1 className='text-2xl font-bold'>Choose a plan that's just right for you!</h1>
                <div className='plans w-[230px] h-[30px]  rounded-3xl flex justify-between p-1 mt-4 mr-16'>
                    <p className=' text-sm pl-7 pl-6 pr-12 bg-blue-200 rounded-3xl'>Monthly</p>
                    <p className='text-sm  pr-6'>Annualy</p>
                </div>
            </div>
            <div className='bodypart row mt-2'>
                <div className='w-[250px] h-[280px] pl-5 pt-2 shadow rounded-md col-md-4 mr-6'>
                    <h1 className='text-xl font-bold'>Basic</h1>
                    <strike className='text-red-600'><span className='text-black text-sm'>$89.99/mo</span></strike>
                    <h1 className='text-xl'>$9.99/ <span className='text-md'>mo</span></h1>
                    <button className='btn bg-orange-300 text-xs font-semibold mt-2'>Get Started<i class="fa-solid fa-arrow-right"></i></button>
                    <hr className='mt-3 w-[200px]' />

                    <p className='text-xs font-bold mt-1'>What you'll get:</p>
                    <p className='text-xs font-semibold mt-1 ml-2'>Upto 25 Users</p>
                    <p className='text-xs font-semibold mt-1 ml-2'>Upto 25gb Storage</p>
                    <p className='text-xs font-semibold mt-1 ml-2'>Email Support</p>

                    <p className='text-center text-xs mt-3 font-bold'><u>EXPLORE FEATURES</u></p>

                </div>
                <div className='w-[250px] h-[280px] pl-5 pt-2 shadow rounded-lg col-md-4 mr-6'>
                    <h1 className='text-xl font-bold'>Standard</h1>
                    <strike className='text-red-600'><span className='text-black text-sm'>$189.99/mo</span></strike>
                    <h1 className='text-xl'>$99.99/ <span className='text-md'>mo</span></h1>
                    <button className='btn bg-red-400 text-xs font-semibold mt-2'>Get Started<i class="fa-solid fa-arrow-right"></i></button>
                    <hr className='mt-3 w-[200px]' />

                    <p className='text-xs font-bold mt-1'>What you'll get:</p>
                    <p className='text-xs font-semibold mt-1 ml-2'>Upto 50 Users</p>
                    <p className='text-xs font-semibold mt-1 ml-2'>Upto 60gb Storage</p>
                    <p className='text-xs font-semibold mt-1 ml-2'>Email+chat Support</p>

                    <p className='text-center text-xs mt-3 font-bold'><u>EXPLORE FEATURES</u></p>

                </div>
                <div className='w-[250px] h-[280px] pl-5 pt-2 shadow rounded-lg col-md-4 '>
                    <h1 className='text-xl font-bold'>Premium</h1>
                    <strike className='text-red-600'><span className='text-black text-sm'>$389.99/mo</span></strike>
                    <h1 className='text-xl'>$199.99/ <span className='text-md'>mo</span></h1>
                    <button className='btn bg-violet-400 text-xs font-semibold mt-2'>Get Started<i class="fa-solid fa-arrow-right"></i></button>
                    <hr className='mt-3 w-[200px]' />

                    <p className='text-xs font-bold mt-1'>What you'll get:</p>
                    <p className='text-sm'>Upto 75 Users</p>
                    <p className='text-sm'>Upto 100gb Storage</p>
                    <p className='text-sm'>Email+chat+Whatsapp Support</p>

                    <p className='text-center text-xs mt-3 font-bold'><u>EXPLORE FEATURES</u></p>

                </div>
            </div>
            <div className='footerpart row flex'>
                <div className='col-md-6 shadow h-[150px] mt-3 rounded pt-2 pl-5 flex '>
                    <div>
                        <button className='btn text-xs bg-lime-300 rounded-xl'>Free Forever</button>
                        <h1 className='mt-1 text-lg font-bold'>Free Starter</h1>
                        <p className='text-xs'>The quickest and easiest way to try protocols <br /> with basic functionalities</p>
                        <button className='btn bg-lime-300 text-xs font-semibold mt-2'>Get Started<i className="fa-solid fa-arrow-right"></i></button>
                    </div>
                    <div className='ml-2'>
                    <p className='text-xs font-bold mt-1'>What you'll get:</p>
                    <p className='text-xs font-semibold mt-1 ml-2'>Upto 25 Users</p>
                    <p className='text-xs font-semibold mt-1 ml-2'>Upto 25gb Storage</p>
                    <p className='text-xs font-semibold mt-1 ml-2'>Email Support</p>
                    </div>
                </div>
                <div className='col-md-6 shadow h-[150px] mt-3 rounded pt-2 pl-5 flex'>
                    <div>
                        <button className='btn text-xs bg-sky-600 rounded-xl'>Free Forever</button>
                        <h1 className='mt-1 text-lg font-bold'>Enterprise Plan</h1>
                        <p className='text-xs'>Effortlessly customize and fine-tune services as <br /> your needs shift, for success</p>
                        <button className='btn bg-sky-600 text-xs font-semibold mt-2'>Contact Us<i className="fa-solid fa-arrow-right"></i></button>
                    </div>
                    <div className='ml-2'>
                    <p className='text-xs font-bold mt-1'>What you'll get:</p>
                    <p className='text-xs font-semibold mt-1 ml-2'>Upto 25 Users</p>
                    <p className='text-xs font-semibold mt-1 ml-2'>Upto 25gb Storage</p>
                    <p className='text-xs font-semibold mt-1 ml-2'>Email Support</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard