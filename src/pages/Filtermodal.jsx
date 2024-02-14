import React, { useContext, useState } from 'react'
import calendarone from '../assets/img/calendar.jpg'
import calendartwo from '../assets/img/calendar2.jpg'
import { icons } from '../utilits/icons';
import { Contexts } from '../context/Context';


export default function Filtermodal() {
    const { setfilter } = useContext(Contexts)
    const [select, setselect] = useState(false)
    const [button1, setbutton1] = useState(0)
    const [button2, setbutton2] = useState(0)
    const [button3, setbutton3] = useState(0)
    const [selectroom, setselectroom] = useState('Any type')
    const [toggleState, setToggleState] = useState([false, false, false]);

    const swiched = (index) => {
        const newToggleState = [...toggleState];
        newToggleState[index] = !newToggleState[index];
        setToggleState(newToggleState);
    };

    const handlechange1 = (index) => {
        setbutton1(index)
    }
    const handlechange2 = (index) => {
        setbutton2(index)
    }
    const handlechange3 = (index) => {
        setbutton3(index)
    }
    const handlechange4 = (index) => {
        setselectroom(index)
    }
    const handleclear = () => {
        setbutton1(0);
        setbutton2(0);
        setbutton3(0);
        setselectroom('Any type');
        setselect(false);
        setToggleState(false);
        const checkboxes = document.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach((checkbox) => {
            checkbox.checked = false;
        });
    };
    return (
        <div className="">
            <div className='lg:absolute fixed top-[50%] left-[50%] w-full lg:h-[90vh] h-full translate-x-[-50%] translate-y-[-50%] bg-white rounded-[20px]   shadow-2xl z-50 lg:w-[700px]'>
                <div className="flex fixed top-0 items-center justify-between border-b-[1px] w-full bg-white rounded-t-[20px] border-gray-200 px-[20px] py-[10px] z-60">
                    <div className="w-[30%]">
                        <button onClick={() => setfilter(false)} className=''><i className='fa fa-close'></i></button>
                    </div>
                    <div className="w-[55%]">
                        <p className='text-[18px] font-semibold'>Filters</p>
                    </div>
                </div>
                <div className='lg:w-[100vh] lg:h-[70vh] h-[80vh] overflow-y-scroll my-[50px] mb-[75px] px-[25px]'>
                    <div className="grid">
                        <div className="grid border-b-[1px] border-gray-200 py-[25px]">
                            <h2 className='text-[24px] font-semibold'>Type of place</h2>
                            <p className='py-[10px] text-[15px] text-gray-700 font-normal'>Search rooms, entire homes, or any type of place.</p>
                            <div className="flex lg:w-[90%] w-full m-auto pt-[10px]">
                                <button onClick={() => handlechange4('Any type')} className={selectroom === 'Any type' ? 'border-[2px] border-black hover:border-black py-[15px] px-[10px] whitespace-nowrap lg:px-[20px] text-white bg-black text-[14px] lg:text-[18px] font-bold w-1/3 rounded-l-[15px]' : 'border-[2px] border-gray-400 hover:border-black py-[15px] px-[10px] whitespace-nowrap lg:px-[20px] text-[14px] lg:text-[18px] font-bold w-1/3 rounded-l-[15px]'}>Any type</button>
                                <button onClick={() => handlechange4('Room')} className={selectroom === 'Room' ? 'border-t-[2px] border-b-[2px] border-black hover:border-black py-[15px] px-[10px] whitespace-nowrap lg:px-[20px] text-white bg-black text-[14px] lg:text-[18px] font-bold w-1/3' : 'border-t-[2px] border-b-[2px] border-gray-400 hover:border-black py-[15px] px-[10px] whitespace-nowrap lg:px-[20px] text-[14px] lg:text-[18px] font-bold w-1/3'}>Room</button>
                                <button onClick={() => handlechange4('Entire home')} className={selectroom === 'Entire home' ? 'border-[2px] border-black hover:border-black py-[15px] px-[10px] whitespace-nowrap lg:px-[20px] text-white bg-black text-[14px] lg:text-[18px] font-bold w-1/3 rounded-r-[15px]' : 'border-[2px] border-gray-400 hover:border-black py-[15px] px-[10px] whitespace-nowrap lg:px-[20px] text-[14px] lg:text-[18px] font-bold w-1/3 rounded-r-[15px]'}>Entire home</button>
                            </div>
                        </div>
                        <div className="grid border-b-[1px] border-gray-200 py-[25px]">
                            <h2 className='text-[24px] font-semibold'>Price range</h2>
                            <p className='py-[10px] text-[15px] text-gray-700 font-normal'>Nightly prices before fees and taxes</p>
                            <div className="slider m-4 mb-6">

                            </div>
                            <div className="flex items-center justify-between">
                                <button className='py-[5px] px-[10px] border-[1px] w-[40%] grid text-start rounded-xl border-gray-400 text-[14px] text-gray-700 font-normal'>Minimum <span className='text-[16px] text-gray-600'>$123</span></button>
                                <span className='w-[10%] bg-gray-300 h-[4px] rounded-3xl'></span>
                                <button className='py-[5px] px-[10px] border-[1px] w-[40%] grid text-start rounded-xl border-gray-400 text-[14px] text-gray-700 font-normal'>Maximum <span className='text-[16px] text-gray-600'>$123</span></button>
                            </div>
                        </div>
                        <div className="grid border-b-[1px] border-gray-200 py-[25px]">
                            <h2 className='text-[24px] font-semibold'>Rooms and beds</h2>
                            <p className='text-[16px] text-gray-700'>Bedrooms</p>
                            <div className="flex items-center justify-between py-[20px] overflow-x-auto">
                                <button onClick={() => handlechange1(0)} className={button1 === 0 ? 'rounded-[20px] text-[16px] px-[20px] py-[6px] bg-black text-white border-[1px] border-gray-600' : 'rounded-[20px] text-[16px] px-[20px] py-[6px] border-[1px] border-gray-600'}>Any</button>
                                <button onClick={() => handlechange1(1)} className={button1 === 1 ? 'rounded-[20px] text-[16px] px-[20px] py-[6px] bg-black text-white border-[1px] border-gray-600' : 'rounded-[20px] text-[16px] px-[20px] py-[6px] border-[1px] border-gray-600'}>1</button>
                                <button onClick={() => handlechange1(2)} className={button1 === 2 ? 'rounded-[20px] text-[16px] px-[20px] py-[6px] bg-black text-white border-[1px] border-gray-600' : 'rounded-[20px] text-[16px] px-[20px] py-[6px] border-[1px] border-gray-600'}>2</button>
                                <button onClick={() => handlechange1(3)} className={button1 === 3 ? 'rounded-[20px] text-[16px] px-[20px] py-[6px] bg-black text-white border-[1px] border-gray-600' : 'rounded-[20px] text-[16px] px-[20px] py-[6px] border-[1px] border-gray-600'}>3</button>
                                <button onClick={() => handlechange1(4)} className={button1 === 4 ? 'rounded-[20px] text-[16px] px-[20px] py-[6px] bg-black text-white border-[1px] border-gray-600' : 'rounded-[20px] text-[16px] px-[20px] py-[6px] border-[1px] border-gray-600'}>4</button>
                                <button onClick={() => handlechange1(5)} className={button1 === 5 ? 'rounded-[20px] text-[16px] px-[20px] py-[6px] bg-black text-white border-[1px] border-gray-600' : 'rounded-[20px] text-[16px] px-[20px] py-[6px] border-[1px] border-gray-600'}>5</button>
                                <button onClick={() => handlechange1(6)} className={button1 === 6 ? 'rounded-[20px] text-[16px] px-[20px] py-[6px] bg-black text-white border-[1px] border-gray-600' : 'rounded-[20px] text-[16px] px-[20px] py-[6px] border-[1px] border-gray-600'}>6</button>
                                <button onClick={() => handlechange1(7)} className={button1 === 7 ? 'rounded-[20px] text-[16px] px-[20px] py-[6px] bg-black text-white border-[1px] border-gray-600' : 'rounded-[20px] text-[16px] px-[20px] py-[6px] border-[1px] border-gray-600'}>7</button>
                                <button onClick={() => handlechange1(8)} className={button1 === 8 ? 'rounded-[20px] text-[16px] px-[20px] py-[6px] bg-black text-white border-[1px] border-gray-600' : 'rounded-[20px] text-[16px] px-[20px] py-[6px] border-[1px] border-gray-600'}>8+</button>
                            </div>
                            <h2 className='text-[16px] text-gray-700'>Bads</h2>
                            <div className="flex items-center justify-between py-[20px] overflow-x-auto">
                                <button onClick={() => handlechange2(0)} className={button2 === 0 ? 'rounded-[20px] text-[16px] px-[20px] py-[6px] bg-black text-white border-[1px] border-gray-600' : 'rounded-[20px] text-[16px] px-[20px] py-[6px] border-[1px] border-gray-600'}>Any</button>
                                <button onClick={() => handlechange2(1)} className={button2 === 1 ? 'rounded-[20px] text-[16px] px-[20px] py-[6px] bg-black text-white border-[1px] border-gray-600' : 'rounded-[20px] text-[16px] px-[20px] py-[6px] border-[1px] border-gray-600'}>1</button>
                                <button onClick={() => handlechange2(2)} className={button2 === 2 ? 'rounded-[20px] text-[16px] px-[20px] py-[6px] bg-black text-white border-[1px] border-gray-600' : 'rounded-[20px] text-[16px] px-[20px] py-[6px] border-[1px] border-gray-600'}>2</button>
                                <button onClick={() => handlechange2(3)} className={button2 === 3 ? 'rounded-[20px] text-[16px] px-[20px] py-[6px] bg-black text-white border-[1px] border-gray-600' : 'rounded-[20px] text-[16px] px-[20px] py-[6px] border-[1px] border-gray-600'}>3</button>
                                <button onClick={() => handlechange2(4)} className={button2 === 4 ? 'rounded-[20px] text-[16px] px-[20px] py-[6px] bg-black text-white border-[1px] border-gray-600' : 'rounded-[20px] text-[16px] px-[20px] py-[6px] border-[1px] border-gray-600'}>4</button>
                                <button onClick={() => handlechange2(5)} className={button2 === 5 ? 'rounded-[20px] text-[16px] px-[20px] py-[6px] bg-black text-white border-[1px] border-gray-600' : 'rounded-[20px] text-[16px] px-[20px] py-[6px] border-[1px] border-gray-600'}>5</button>
                                <button onClick={() => handlechange2(6)} className={button2 === 6 ? 'rounded-[20px] text-[16px] px-[20px] py-[6px] bg-black text-white border-[1px] border-gray-600' : 'rounded-[20px] text-[16px] px-[20px] py-[6px] border-[1px] border-gray-600'}>6</button>
                                <button onClick={() => handlechange2(7)} className={button2 === 7 ? 'rounded-[20px] text-[16px] px-[20px] py-[6px] bg-black text-white border-[1px] border-gray-600' : 'rounded-[20px] text-[16px] px-[20px] py-[6px] border-[1px] border-gray-600'}>7</button>
                                <button onClick={() => handlechange2(8)} className={button2 === 8 ? 'rounded-[20px] text-[16px] px-[20px] py-[6px] bg-black text-white border-[1px] border-gray-600' : 'rounded-[20px] text-[16px] px-[20px] py-[6px] border-[1px] border-gray-600'}>8+</button>
                            </div>
                            <h2 className='text-[16px] text-gray-700'>Bathrooms</h2>
                            <div className="flex items-center justify-between py-[20px] overflow-x-auto">
                                <button onClick={() => handlechange3(0)} className={button3 === 0 ? 'rounded-[20px] text-[16px] px-[20px] py-[6px] bg-black text-white border-[1px] border-gray-600' : 'rounded-[20px] text-[16px] px-[20px] py-[6px] border-[1px] border-gray-600'}>Any</button>
                                <button onClick={() => handlechange3(1)} className={button3 === 1 ? 'rounded-[20px] text-[16px] px-[20px] py-[6px] bg-black text-white border-[1px] border-gray-600' : 'rounded-[20px] text-[16px] px-[20px] py-[6px] border-[1px] border-gray-600'}>1</button>
                                <button onClick={() => handlechange3(2)} className={button3 === 2 ? 'rounded-[20px] text-[16px] px-[20px] py-[6px] bg-black text-white border-[1px] border-gray-600' : 'rounded-[20px] text-[16px] px-[20px] py-[6px] border-[1px] border-gray-600'}>2</button>
                                <button onClick={() => handlechange3(3)} className={button3 === 3 ? 'rounded-[20px] text-[16px] px-[20px] py-[6px] bg-black text-white border-[1px] border-gray-600' : 'rounded-[20px] text-[16px] px-[20px] py-[6px] border-[1px] border-gray-600'}>3</button>
                                <button onClick={() => handlechange3(4)} className={button3 === 4 ? 'rounded-[20px] text-[16px] px-[20px] py-[6px] bg-black text-white border-[1px] border-gray-600' : 'rounded-[20px] text-[16px] px-[20px] py-[6px] border-[1px] border-gray-600'}>4</button>
                                <button onClick={() => handlechange3(5)} className={button3 === 5 ? 'rounded-[20px] text-[16px] px-[20px] py-[6px] bg-black text-white border-[1px] border-gray-600' : 'rounded-[20px] text-[16px] px-[20px] py-[6px] border-[1px] border-gray-600'}>5</button>
                                <button onClick={() => handlechange3(6)} className={button3 === 6 ? 'rounded-[20px] text-[16px] px-[20px] py-[6px] bg-black text-white border-[1px] border-gray-600' : 'rounded-[20px] text-[16px] px-[20px] py-[6px] border-[1px] border-gray-600'}>6</button>
                                <button onClick={() => handlechange3(7)} className={button3 === 7 ? 'rounded-[20px] text-[16px] px-[20px] py-[6px] bg-black text-white border-[1px] border-gray-600' : 'rounded-[20px] text-[16px] px-[20px] py-[6px] border-[1px] border-gray-600'}>7</button>
                                <button onClick={() => handlechange3(8)} className={button3 === 8 ? 'rounded-[20px] text-[16px] px-[20px] py-[6px] bg-black text-white border-[1px] border-gray-600' : 'rounded-[20px] text-[16px] px-[20px] py-[6px] border-[1px] border-gray-600'}>8+</button>
                            </div>
                        </div>
                        <div className="grid border-b-[1px] border-gray-200 py-[25px]">
                            <h2 className='text-[24px] font-semibold'>Top-tier stays</h2>
                            <div className="p-[20px] w-[50vh] rounded-[10px] border-[1px] border-gray-300 mt-[20px] hover:border-black">
                                <span>{icons.flag}</span>
                                <h2 className='text-[17px] font-semibold mt-[5px]'>Guest favorites</h2>
                                <p className='text-[14px] text-gray-600 '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus!</p>
                            </div>
                        </div>
                        <div className="grid border-b-[1px] border-gray-200 py-[25px]">
                            <h2 className='text-[24px] font-semibold'>Property type</h2>
                            <div className="flex pt-[20px] items-center justify-between overflow-x-scroll lg:overflow-x-hidden gap-[15px]">
                                <div onClick={() => setselect('House')} className={select === 'House' ? 'bg-gray-100 border-[2px] rounded-[20px] border-black p-[10px] w-[120px] ' : 'bg-white border-[1px] p-[10px] w-[120px]  border-gray-400 hover:border-black py-[10px] rounded-[20px]'}>
                                    <span className='w-[40px] h-[40px]'>{icons.home}</span>
                                    <h2 className='text-[16px] mt-[30px] font-medium'>House</h2>
                                </div>
                                <div onClick={() => setselect('Apartment')} className={select === 'Apartment' ? 'bg-gray-100 border-[2px] rounded-[20px] border-black p-[10px] w-[120px] ' : 'bg-white border-[1px] p-[10px] w-[120px]  border-gray-400 hover:border-black py-[10px] rounded-[20px]'}>
                                    <span className='w-[40px] h-[40px]'>{icons.aparment}</span>
                                    <h2 className='text-[16px] mt-[30px] font-medium'>Apartment</h2>
                                </div>
                                <div onClick={() => setselect('Guesthouse')} className={select === 'Guesthouse' ? 'bg-gray-100 border-[2px] rounded-[20px] border-black p-[10px] w-[120px] ' : 'bg-white border-[1px] p-[10px] w-[120px]  border-gray-400 hover:border-black py-[10px] rounded-[20px]'}>
                                    <span className='w-[40px] h-[40px]'>{icons.home}</span>
                                    <h2 className='text-[16px] mt-[30px] font-medium'>Guesthouse</h2>
                                </div>
                                <div onClick={() => setselect('Hotel')} className={select === 'Hotel' ? 'bg-gray-100 border-[2px] rounded-[20px] border-black p-[10px] w-[120px] ' : 'bg-white border-[1px] p-[10px] w-[120px]  border-gray-400 hover:border-black py-[10px] rounded-[20px]'}>
                                    <span className='w-[40px] h-[40px]'>{icons.house}</span>
                                    <h2 className='text-[16px] mt-[30px] font-medium'>Hotel</h2>
                                </div>
                            </div>
                        </div>
                        <div className="grid border-b-[1px] border-gray-200 py-[25px]">
                            <h2 className='text-[24px] font-semibold'>Amenities</h2>
                            <p className='text-[16px] font-semibold pt-[15px] pb-[10px]'>Essential</p>
                            <div className="grid lg:grid-cols-2  gap-4">
                                <div className=" flex gap-[15px] lg:flex-row flex-row-reverse text-start lg:justify-start justify-between">
                                    <input type="checkbox" className='scale-150' />
                                    <p className='text-[20px]'>Wifi</p>
                                </div>
                                <div className=" flex gap-[15px] items-center lg:flex-row flex-row-reverse text-start lg:justify-start justify-between">
                                    <input type="checkbox" className='scale-150' />
                                    <p className='text-[20px]'>Kitchen</p>
                                </div>
                                <div className=" flex gap-[15px] items-center lg:flex-row flex-row-reverse text-start lg:justify-start justify-between">
                                    <input type="checkbox" className='scale-150' />
                                    <p className='text-[20px]'>Washer</p>
                                </div>
                                <div className=" flex gap-[15px] items-center lg:flex-row flex-row-reverse text-start lg:justify-start justify-between">
                                    <input type="checkbox" className='scale-150' />
                                    <p className='text-[20px]'>Dryer</p>
                                </div>
                                <div className=" flex gap-[15px] items-center lg:flex-row flex-row-reverse text-start lg:justify-start justify-between">
                                    <input type="checkbox" className='scale-150' />
                                    <p className='text-[20px]'>Air conditioning</p>
                                </div>
                                <div className=" flex gap-[15px] items-center lg:flex-row flex-row-reverse text-start lg:justify-start justify-between">
                                    <input type="checkbox" className='scale-150' />
                                    <p className='text-[20px]'>Heating</p>
                                </div>
                            </div>
                            <button className='underline font-semibold pt-[10px] text-start'>Show more</button>
                        </div>
                        <div className="grid border-b-[1px] border-gray-200 py-[25px]">
                            <h2 className='text-[24px] font-semibold'>Booking options</h2>
                            <div className="flex items-center justify-between py-[10px] mt-[10px]">
                                <div className="grid">
                                    <h2 className='text-[18px] text-gray-800'>Instant Book</h2>
                                    <p className='text-[16px] font-normal text-gray-600'>Listings you can book without waiting for Host approval</p>
                                </div>
                                <label onClick={() => swiched(0)} htmlFor="toggle1" className="flex items-center cursor-pointer">
                                    <div className="relative">

                                        <div className={`w-[50px] h-[30px] bg-gray-400 rounded-full shadow-inner items-center ${toggleState[0] ? 'bg-gray-800' : ''}`}></div>
                                        <div className={`absolute w-[26px] h-[26px] bg-white rounded-full items-center top-[50%] justify-center translate-y-[-50%] shadow inset-y-0 left-[2px] ${toggleState[0] ? 'transform translate-x-[20px]' : ''}`}> <span className='flex items-center justify-center pt-[3px]'>{toggleState[0] ? icons.true : null}</span> </div>
                                    </div>
                                </label>
                            </div>
                            <div className="flex items-center justify-between py-[10px]">
                                <div className="grid">
                                    <h2 className='text-[18px] text-gray-800'>Instant Book</h2>
                                    <p className='text-[16px] font-normal text-gray-600'>Listings you can book without waiting for Host approval</p>
                                </div>
                                <label onClick={() => swiched(1)} htmlFor="toggle2" className="flex items-center cursor-pointer">
                                    <div className="relative">

                                        <div className={`w-[50px] h-[30px] bg-gray-400 rounded-full shadow-inner items-center ${toggleState[1] ? 'bg-gray-800' : ''}`}></div>
                                        <div className={`absolute w-[26px] h-[26px] bg-white rounded-full items-center top-[50%] justify-center translate-y-[-50%] shadow inset-y-0 left-[2px] ${toggleState[1] ? 'transform translate-x-[20px]' : ''}`}> <span className='flex items-center justify-center pt-[3px]'>{toggleState[1] ? icons.true : null}</span> </div>
                                    </div>
                                </label>
                            </div>
                            <div className="flex items-center justify-between py-[10px]">
                                <div className="grid">
                                    <h2 className='text-[18px] text-gray-800'>Instant Book</h2>
                                    <p className='text-[16px] font-normal text-gray-600 underline'>Listings you can book without waiting for Host approval</p>
                                </div>
                                <label onClick={() => swiched(2)} htmlFor="toggle3" className="flex items-center cursor-pointer">
                                    <div className="relative">

                                        <div className={`w-[50px] h-[30px] bg-gray-400 rounded-full shadow-inner items-center ${toggleState[2] ? 'bg-gray-800' : ''}`}></div>
                                        <div className={`absolute w-[26px] h-[26px] bg-white rounded-full items-center top-[50%] justify-center translate-y-[-50%] shadow inset-y-0 left-[2px] ${toggleState[2] ? 'transform translate-x-[20px]' : ''}`}> <span className='flex items-center justify-center pt-[3px]'>{toggleState[2] ? icons.true : null}</span> </div>
                                    </div>
                                </label>
                            </div>
                        </div>
                        <div className="grid border-b-[1px] border-gray-200 py-[25px]">
                            <h2 className='text-[24px] font-semibold'>Accessibility features</h2>
                            <p className='text-[16px] font-semibold pt-[15px] pb-[10px]'>Guest entrance and parking</p>
                            <div className="grid lg:grid-cols-2 gap-4">
                                <div className=" flex gap-[15px] lg:flex-row flex-row-reverse text-start lg:justify-start justify-between">
                                    <input type="checkbox" className='scale-150' />
                                    <p className='text-[20px]'>Wifi</p>
                                </div>
                                <div className=" flex gap-[15px] items-center lg:flex-row flex-row-reverse text-start lg:justify-start justify-between">
                                    <input type="checkbox" className='scale-150' />
                                    <p className='text-[20px]'>Kitchen</p>
                                </div>
                                <div className=" flex gap-[15px] items-center lg:flex-row flex-row-reverse text-start lg:justify-start justify-between">
                                    <input type="checkbox" className='scale-150' />
                                    <p className='text-[20px]'>Washer</p>
                                </div>
                                <div className=" flex gap-[15px] items-center lg:flex-row flex-row-reverse text-start lg:justify-start justify-between">
                                    <input type="checkbox" className='scale-150' />
                                    <p className='text-[20px]'>Dryer</p>
                                </div>

                            </div>
                            <button className='underline font-semibold pt-[10px] text-start'>Show more</button>
                        </div>
                        <div className="grid border-b-[1px] border-gray-200 py-[25px]">
                            <h2 className='text-[24px] font-semibold mb-[10px]'>Host language</h2>
                            <div className="grid lg:grid-cols-2 gap-4">
                                <div className=" flex gap-[15px] lg:flex-row flex-row-reverse text-start lg:justify-start justify-between">
                                    <input type="checkbox" className='scale-150' />
                                    <p className='text-[20px]'>Wifi</p>
                                </div>
                                <div className=" flex gap-[15px] items-center lg:flex-row flex-row-reverse text-start lg:justify-start justify-between">
                                    <input type="checkbox" className='scale-150' />
                                    <p className='text-[20px]'>Kitchen</p>
                                </div>
                                <div className=" flex gap-[15px] items-center lg:flex-row flex-row-reverse text-start lg:justify-start justify-between">
                                    <input type="checkbox" className='scale-150' />
                                    <p className='text-[20px]'>Washer</p>
                                </div>
                                <div className=" flex gap-[15px] items-center lg:flex-row flex-row-reverse text-start lg:justify-start justify-between">
                                    <input type="checkbox" className='scale-150' />
                                    <p className='text-[20px]'>Dryer</p>
                                </div>

                            </div>
                            <button className='underline font-semibold pt-[10px] text-start'>Show more</button>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-between py-[10px] fixed bottom-0 bg-white border-t-[1px] border-gray-300 w-full rounded-b-[20px] px-[20px]">
                    <button onClick={() => handleclear()} className='py-[10px] text-[18px] px-[20px] hover:bg-slate-100 rounded-[15px]'>Cleear all</button>
                    <button className='bg-gray-900 hover:bg-black text-white font-semibold text-[18px] py-[10px] px-[20px] rounded-[15px]'>Show 231 places</button>
                </div>
            </div>
        </div>

    )
}
