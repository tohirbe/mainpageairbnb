import React from 'react'
import { icons } from '../utilits/icons'
import { Link } from 'react-router-dom'

export default function Showmap() {
    return (
        <>
            <div>
                {icons.xarita}
            </div>
            <div className="fixed top-[80%] left-[50%] translate-x-[-50%] ">
                <Link to={'/'} className='flex items-center gap-[10px] text-white bg-black px-[20px] py-[10px] rounded-[20px]'>Show list <span>{icons.list}</span></Link>
            </div>
        </>
    )
}
