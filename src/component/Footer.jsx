import React from 'react'
import { icons } from '../utilits/icons'

export default function Footer() {
    return (
        <div className='fixed bottom-0 w-full bg-white px-[10px] lg:px-[50px] z-40 border-t-[1px] border-gray-400'>
            <div className="lg:flex py-[20px] items-center justify-between">
                <div className="lg:flex items-center">
                    <span className='text-[16px] text-gray-600'>© 2024 Airbnb, Inc.</span>
                    <p className='lg:text-[16px] text-[12px] lg:p-0 py-[10px] text-gray-600 flex items-center'><span className='mx-[5px] lg:mx-[10px]'>·</span> Terms <span className='mx-[5px] lg:mx-[10px]'>·</span> Sitemap<span className='mx-[5px] lg:mx-[10px]'>·</span>Privacy<span className='mx-[5px] lg:mx-[10px]'>·</span>Your Privacy Choices  <span className='ml-[10px] lg:ml-[20px]'>{icons.okay}</span></p>

                </div>
                <div className="flex items-center">
                    <span>{icons.language}</span>
                    <p className='text-[14px] font-semibold ml-[15px] hover:underline'>English (US)</p>
                    <p className=' text-[14px] font-semibold ml-[15px] hover:underline'>$ USD</p>
                    <div className="lg:block hidden">
                        <ul className='flex gap-[10px] ml-[20px] '>
                            <li>{icons.facebook}</li>
                            <li>{icons.linkedin}</li>
                            <li>{icons.instagram}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
