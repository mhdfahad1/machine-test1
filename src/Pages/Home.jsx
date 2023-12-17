import React from 'react'
import './Home.css'
import Logo from '../components/Logo'
import Menu from '../components/Menu'
import Dashboard from '../components/Dashboard'

function Home() {
  return (
    <div className='homepage'>
        <Logo/>
        <div className='row -mt-4'>
          <div className='col-md-2'>
            <Menu/>
          </div>
          <div className='-ml-5 col-md-9'>
            <Dashboard/>
          </div>
          <div className='col-md-1'></div>
        </div>
    </div>
  )
}

export default Home