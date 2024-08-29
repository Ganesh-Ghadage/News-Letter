import React from 'react'
import { Link } from 'react-router-dom'


function Logo({textColor}) {
    return (
        <div className='flex'>
        <Link to={'/'}>
            <div className='items-center flex flex-col'>
                <img
                alt='News-Lwtter'
                src='../../logo.svg' 
                width={'25rem'}/>
                <p className={`font-serif ${textColor}`} >News Letter</p>
            </div>
        </Link>
        </div>
    )
}

export default Logo
