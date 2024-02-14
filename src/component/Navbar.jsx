import React, { useContext, useEffect, useState } from 'react'
import calendarone from '../assets/img/calendar.jpg'
import calendartwo from '../assets/img/calendar2.jpg'
import { icons } from '../utilits/icons'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { DateRangeCalendar } from '@mui/x-date-pickers-pro/DateRangeCalendar';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Link } from 'react-router-dom';
import { Contexts } from '../context/Context';

const countries = [
    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan",

];

export default function Navbar() {
    const { islogin, setislogin, setmodalcalendar, scrolled, setScrolled } = useContext(Contexts)
    const [language, setLanguage] = useState(false);
    const [month, setmonth] = useState(false);
    const [countrysearch, setCountrysearch] = useState(false);
    const [bars, setBars] = useState(false);
    const [modalguest, setModalguest] = useState(false);
    const [calendar, setopencalendar] = useState(false);
    const [filteredCountries, setFilteredCountries] = useState([]);
    const [showDropdown, setShowDropdown] = useState(false);
    const [dayclick, setdayclick] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [dataclick, setdataclick] = useState(0);
    const [selectedCountry, setSelectedCountry] = useState("");
    const [buttonvalue, setButtonvalue] = useState("");
    const [activeIndex, setActiveIndex] = useState(0);
    const [activeday, setactiveday] = useState(false);
    const handleItemClick = (index) => {
        setActiveIndex(index);
        setopencalendar(false)
    };
    const handledata = (index) => {
        setdataclick(index)
    }
    // const handleday = (index) => {
    //     setdayclick(index)
    // }
    const handledays = (index) => {
        setactiveday(index)
    }
    const handleSearch = (event) => {
        const searchTerm = event.target.value;
        setSearchTerm(searchTerm);
        const filteredCountries = countries.filter(country =>
            country.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredCountries(filteredCountries);
        setShowDropdown(true);
    };

    const handleSelectCountry = (country) => {
        setSelectedCountry(selectedCountry);
        setSearchTerm(searchTerm);
        setShowDropdown(false);
    };

    const [count, setCount] = useState(0);
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);
    const [checked, setchecked] = useState(0)
    const [checkedtwo, setcheckedtwo] = useState(false)
    const [buttonof, setbuttonof] = useState(false)
    const [button3, setbutton3] = useState(false)
    useEffect(() => {
        if ((count1 > 0 || count2 > 0 || count3 > 0) && count === 0) {
            setCount(count + 1);
        }


    }, [count, count1, count2, count3]);
    useEffect(() => {
        if (count >= 1) {
            setchecked(true)
        } else {
            setchecked(false)
        }
    })
    useEffect(() => {
        if ((count + count1) === 16) {
            setCount(count + 0)
            setCount1(count1 + 0)
            setcheckedtwo(true)
        } else { setcheckedtwo(false) }


    }, [count, count1, count2, count3]);
    useEffect(() => {
        if (count3 === 5) {
            setbutton3(true)
        } else { setbutton3(false) }
    })
    useEffect(() => {
        if (count2 === 5) {
            setbuttonof(true)
        } else { setbuttonof(false) }
    })
    useEffect(() => {
        const handleScroll = () => {
            const scrollPos = window.scrollY;
            if (scrollPos > 100) {
                setopencalendar(false)
                setModalguest(false)
                setCountrysearch(false)

            } else {

            }


        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    useEffect(() => {
        const handleScroll = () => {
            const scrollnav = window.scrollY;
            if (scrollnav > 15) {
                setScrolled(true)

            } else {
                setScrolled(false)
            }


        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const handlesearch = () => {
        setopencalendar(false)
        setModalguest(false)
        setCountrysearch(!countrysearch)
    }
    const handlecalendar = () => {
        setModalguest(false)
        setCountrysearch(false)
        setopencalendar(!calendar)
    }
    const handleguide = () => {
        setShowDropdown(false)
        setopencalendar(false)
        setModalguest(!modalguest)
    }
    const clearcount = () => {
        setCount(0)
        setCount1(0)
        setCount2(0)
        setCount3(0)
        setModalguest(true)
    }
    // console.log(islogin);

    const [modalnav, setmodalnav] = useState(false)
    const [selelctnav, setselectnav] = useState(0)
    const handleselectnav = (index) => {
        setselectnav(index)
    }
    return (
        <>
            {/* <div className="p-[30px] bg-gray-100 border-b-[1px] border-gray-200">
                <p className='text-[20px] font-semibold underline text-center'>Learn about Guest Favorites, the most loved homes on Airbnb
                </p>
            </div> */}
            <div className='lg:px-[50px] px-[15px] fixed top-0 w-full bg-white z-30'>
                <div className=" lg:block hidden">
                    <div className="flex justify-between items-center my-[20px]">
                        <div className="w-[30%]">
                            <span>{icons.logo}</span>
                        </div>
                        <div className={scrolled ? "w-[30%]" : "w-[40%]"}>
                            {scrolled ? <div className="p-[4px] py-[8px] flex border-[1px] delay-75 duration-500 pl-[20px] items-center border-gray-400 rounded-[40px] shadow-lg w-[100%]">

                                <div className="grid w-[30%] text-start ">
                                    <p>Anywhere</p>

                                </div>
                                <div className="grid w-[30%] text-start border-l-[1px] border-gray-200 pl-[20px]">
                                    <p>Any week</p>

                                </div>
                                <div className="grid w-[30%] text-start border-l-[1px] border-gray-200 pl-[20px]">
                                    <p>Add guests</p>

                                </div>
                                <div className="w-[10%] flex justify-end">
                                    <span className='p-[7px] rounded-[50%] bg-[#FF385C] scale-90'>{icons.search}</span>
                                </div>
                            </div> : <ul className={scrolled ? 'flex items-center top-[-200px] duration-500 delay-100 justify-around text-[18px] py-[12px]' : 'flex items-center justify-around text-[18px] py-[12px]'}>
                                <li onClick={() => handleItemClick(0)} className={activeIndex === 0 ? 'text-black font-medium overflow-hidden' : ' text-gray-700'}>Stays</li>
                                <li onClick={() => handleItemClick(1)} className={activeIndex === 1 ? 'text-black font-medium overflow-hidden' : ' text-gray-700'}>Experiences</li>
                                <li onClick={() => handleItemClick(2)} className={activeIndex === 2 ? 'text-black font-medium overflow-hidden' : ' text-gray-700'}>Online Experiences</li>
                            </ul>}
                        </div>
                        <div className="w-[30%] flex items-center justify-end gap-[30px] relative">
                            <p className='text-[16px] font-semibold'>Airbnb your home</p>
                            <button onClick={() => setLanguage(!language)}>{icons.language}</button>
                            {language ? <div className="absolute top-[45px] right-[10px] text-start whitespace-nowrap bg-white w-[150px] rounded-xl z-50 shadow-2xl">
                                <ul onClick={() => setLanguage(false)} className='grid text-black font-semibold py-[10px] text-[15px]'>
                                    <option className='hover:bg-gray-100 w-full py-[8px] px-[15px]' value="eng">English</option>
                                    <option className='hover:bg-gray-100 w-full py-[8px] px-[15px]' value="ru">Russia</option>
                                    <option className='hover:bg-gray-100 w-full py-[8px] px-[15px]' value="tr">Turkish</option>
                                    <option className='hover:bg-gray-100 w-full py-[8px] px-[15px]' value="uz">Uzbek</option>
                                </ul>

                            </div> : null}
                            <button onClick={() => setBars(!bars)} className='rounded-full flex items-center border-solid border-[1px] border-gray-300 px-[10px] py-[7px] relative hover:shadow-lg'>
                                <button >{icons.bars}</button>
                                {bars ? <div className=" absolute top-[50px] right-0 text-start whitespace-nowrap bg-white w-[240px] rounded-xl z-50 shadow-2xl">
                                    {/* <ul className='grid text-black font-semibold py-[10px] text-[15px]'>
                                <li className='hover:bg-gray-100 w-full py-[8px] px-[15px]'>Massages</li>
                                <li className='hover:bg-gray-100 w-full py-[8px] px-[15px]'>Notification</li>
                                <li className='hover:bg-gray-100 w-full py-[8px] px-[15px]'>Trips</li>
                                <li className='hover:bg-gray-100 w-full py-[8px] px-[15px]'>Wishlist</li>
                            </ul> */}
                                    <ul className='grid border-y-[1px] border-gray-300 py-[10px] text-gray-600 font-normal text-[15px]'>
                                        <li onClick={() => setislogin(true)} className='hover:bg-gray-100 w-full py-[8px] px-[15px] font-semibold'>Login</li>
                                        <li onClick={() => setislogin(true)} className='hover:bg-gray-100 w-full py-[8px] px-[15px]'>Sign up</li>
                                    </ul>
                                    <ul className='grid py-[15px] text-gray-600 font-normal text-[15px]'>
                                        <li className='hover:bg-gray-100 w-full py-[8px] px-[15px]'>Gift carts</li>
                                        <li className='hover:bg-gray-100 w-full py-[8px] px-[15px]'>Airbnb your home</li>
                                        <li className='hover:bg-gray-100 w-full py-[8px] px-[15px]'>Help senter</li>
                                        {/* <li className='hover:bg-gray-100 w-full py-[8px] px-[15px]'>Log out</li> */}
                                    </ul>
                                </div> : null}
                                <img src="" alt="" className='w-7 h-7 rounded-full bg-black ml-[5px]' />
                                <p className='text-[12px] font-bold absolute top-[-5px] right-[0px] px-[6px] border-solid border-white border-[3px] rounded-full bg-[#FF385C] text-white'>1</p>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center relative lg:w-[65%] w-full m-auto">
                    <div className="lg:block hidden w-full">
                        <div className={scrolled ? "p-[10px] absolute top-[7px] scale-50 delay-500 duration-1000 hidden flex border-[1px] pl-[20px]  border-gray-200 rounded-[40px] mb-[20px] shadow-lg w-[100%]" : "flex border-[1px] duration-1000 delay-500 border-gray-200 rounded-[40px] mb-[20px] shadow-lg w-[100%]"}>
                            <div className={countrysearch || calendar || modalguest ? "flex items-center bg-gray-300 rounded-[40px] justify-between w-full p-0" : "flex items-center justify-between w-full p-0"}>
                                <div onClick={() => handlesearch()} className="w-[30%] h-full">
                                    <div className={countrysearch ? "grid h-full bg-white py-[10px] pl-[20px] rounded-[40px] text-start" : "grid h-full hover:bg-gray-200 py-[10px] pl-[20px] rounded-[40px] text-start"}>
                                        <form action="" className='w-full' >
                                            <label htmlFor="searchInput" className="grid">
                                                <span className='pl-[10px]'>Where</span>
                                                <input
                                                    type="text"
                                                    id="searchInput"
                                                    placeholder="Search destinations"
                                                    className="w-full  rounded-md bg-transparent outline-none pl-[10px]"
                                                    value={selectedCountry}
                                                    onChange={handleSearch}
                                                    onBlur={() => setShowDropdown(false)}
                                                />
                                            </label>
                                        </form>
                                        {showDropdown && (
                                            <ul className="absolute left-[17%] bg-white mt-2 top-[80%] w-[20%] bg-transparent border border-gray-200 rounded-md shadow-md z-10">
                                                {filteredCountries.map((country, index) => (
                                                    <li key={index} onClick={() => handleSelectCountry(country)} className="p-2 cursor-pointer hover:bg-gray-200">{country}</li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                </div>
                                {countrysearch ? <div className="rounded-[30px] p-[30px]  shadow-2xl absolute top-[75px] z-20 bg-white text-center w-[500px]">
                                    <h2 className='text-[18px] font-semibold text-start mb-[10px]'>Search by region</h2>
                                    <div className="grid grid-cols-3 mt-[15px]">
                                        <div className="text-start">
                                            <img src="" alt="" className='w-[120px] h-[120px] bg-gray-400 rounded-[20px]' />
                                            <h2 className='text-[18px] text-gray-700 ml-[5px] mt-[5px]'>moldavia</h2>
                                        </div>
                                        <div className="text-start">
                                            <img src="" alt="" className='w-[120px] h-[120px] bg-gray-400 rounded-[20px]' />
                                            <h2 className='text-[18px] text-gray-700 ml-[5px] mt-[5px]'>moldavia</h2>
                                        </div>
                                        <div className="text-start">
                                            <img src="" alt="" className='w-[120px] h-[120px] bg-gray-400 rounded-[20px]' />
                                            <h2 className='text-[18px] text-gray-700 ml-[5px] mt-[5px]'>moldavia</h2>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-3 mt-[15px]">
                                        <div className="text-start">
                                            <img src="" alt="" className='w-[120px] h-[120px] bg-gray-400 rounded-[20px]' />
                                            <h2 className='text-[18px] text-gray-700 ml-[5px] mt-[5px]'>moldavia</h2>
                                        </div>
                                        <div className="text-start">
                                            <img src="" alt="" className='w-[120px] h-[120px] bg-gray-400 rounded-[20px]' />
                                            <h2 className='text-[18px] text-gray-700 ml-[5px] mt-[5px]'>moldavia</h2>
                                        </div>
                                        <div className="text-start">
                                            <img src="" alt="" className='w-[120px] h-[120px] bg-gray-400 rounded-[20px]' />
                                            <h2 className='text-[18px] text-gray-700 ml-[5px] mt-[5px]'>moldavia</h2>
                                        </div>
                                    </div>
                                </div> : null}
                                <div className="w-[40%] h-full">
                                    {activeIndex === 1 ? <div className="w-[100%] h-full">
                                        <div className={calendar ? "w-[100%] h-full" : "w-[100%] h-full border-l-[1px] border-gray-200 hover:border-none"}>
                                            <div onClick={() => handlecalendar()} className={calendar ? "grid h-full bg-white py-[10px] rounded-[40px] text-start pl-[20px]" : "grid h-full hover:bg-gray-200 py-[10px] rounded-[40px] text-start pl-[20px]"}>
                                                <div className="grid">
                                                    <p>Data</p>
                                                    <span>Add dates</span>
                                                </div>
                                            </div>
                                            {calendar ? <div className="rounded-[30px] p-[30px] translate-x-[-50%] left-[50%] shadow-2xl absolute top-[75px] z-20 bg-white text-center w-[700px]">
                                                {activeIndex === 1 ? null : <div className="p-[5px] rounded-[30px] gap-3 bg-gray-200 text-center justify-center inline-flex">
                                                    <button onClick={() => handledata(0)} className={dataclick === 0 ? 'bg-white rounded-[30px] py-[5px] px-[25px] font-semibold' : 'rounded-[30px] py-[5px] px-[25px] hover:bg-gray-300 font-semibold'}>Dates</button>
                                                    <button onClick={() => handledata(1)} className={dataclick === 1 ? 'bg-white rounded-[30px] py-[5px] px-[25px] font-semibold' : 'rounded-[30px] py-[5px] px-[25px] hover:bg-gray-300 font-semibold'}>Months</button>
                                                    <button onClick={() => handledata(2)} className={dataclick === 2 ? 'bg-white rounded-[30px] py-[5px] px-[25px] font-semibold' : 'rounded-[30px] py-[5px] px-[25px] hover:bg-gray-300 font-semibold'}>Flexible</button>
                                                </div>}
                                                {dataclick === 0 && <div className="">
                                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                        <DemoContainer components={['DateRangeCalendar']}>
                                                            <DateRangeCalendar />
                                                        </DemoContainer>
                                                    </LocalizationProvider>

                                                </div>}

                                            </div> : null}
                                        </div>

                                    </div> : <div className="w-[100%] flex items-center justify-between whitespace-nowrap h-full">
                                        <div className={calendar ? "w-[50%] h-full" : "w-[50%] h-full border-l-[1px] border-gray-200 hover:border-none"}>
                                            <div onClick={() => handlecalendar()} className={calendar ? "grid h-full bg-white py-[10px] rounded-l-[40px] text-start pl-[20px]" : "grid h-full hover:bg-gray-200 py-[10px] rounded-[40px] text-start pl-[20px]"}>
                                                <div className="grid">
                                                    <p>Chake in</p>
                                                    <span>feb 26</span>
                                                </div>
                                            </div>
                                            {calendar ? <div className="rounded-[30px] p-[30px] translate-x-[-50%] left-[50%] shadow-2xl absolute top-[75px] z-20 bg-white text-center w-[700px]">
                                                <div className="p-[5px] rounded-[30px] gap-3 bg-gray-200 text-center justify-center inline-flex">
                                                    <button onClick={() => handledata(0)} className={dataclick === 0 ? 'bg-white rounded-[30px] py-[5px] px-[25px] font-semibold' : 'rounded-[30px] py-[5px] px-[25px] hover:bg-gray-300 font-semibold'}>Dates</button>
                                                    <button onClick={() => handledata(1)} className={dataclick === 1 ? 'bg-white rounded-[30px] py-[5px] px-[25px] font-semibold' : 'rounded-[30px] py-[5px] px-[25px] hover:bg-gray-300 font-semibold'}>Months</button>
                                                    <button onClick={() => handledata(2)} className={dataclick === 2 ? 'bg-white rounded-[30px] py-[5px] px-[25px] font-semibold' : 'rounded-[30px] py-[5px] px-[25px] hover:bg-gray-300 font-semibold'}>Flexible</button>
                                                </div>
                                                {dataclick === 0 && <div className="">
                                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                        <DemoContainer components={['DateRangeCalendar']}>
                                                            <DateRangeCalendar />
                                                        </DemoContainer>
                                                    </LocalizationProvider>
                                                    <div className="flex flex-wrap items-center mt-[30px] gap-[10px]">
                                                        <button onClick={() => handledays(0)} className={activeday === 0 ? 'text-[14px] font-light border-[2px] rounded-[15px] px-[10px] py-[5px] border-gray-900' : 'text-[14px] font-light border-[1px] rounded-[15px] px-[10px] py-[5px] border-gray-500'}>Exact dates</button>
                                                        <button onClick={() => handledays(1)} className={activeday === 1 ? 'text-[14px] font-light border-[2px] rounded-[15px] px-[10px] py-[5px] border-gray-900' : 'text-[14px] font-light border-[1px] rounded-[15px] px-[10px] py-[5px] border-gray-500'}>+1 days</button>
                                                        <button onClick={() => handledays(2)} className={activeday === 2 ? 'text-[14px] font-light border-[2px] rounded-[15px] px-[10px] py-[5px] border-gray-900' : 'text-[14px] font-light border-[1px] rounded-[15px] px-[10px] py-[5px] border-gray-500'}>+2 days</button>
                                                        <button onClick={() => handledays(3)} className={activeday === 3 ? 'text-[14px] font-light border-[2px] rounded-[15px] px-[10px] py-[5px] border-gray-900' : 'text-[14px] font-light border-[1px] rounded-[15px] px-[10px] py-[5px] border-gray-500'}>+3 days</button>
                                                        <button onClick={() => handledays(4)} className={activeday === 4 ? 'text-[14px] font-light border-[2px] rounded-[15px] px-[10px] py-[5px] border-gray-900' : 'text-[14px] font-light border-[1px] rounded-[15px] px-[10px] py-[5px] border-gray-500'}>+7 days</button>
                                                    </div>
                                                </div>}
                                                {dataclick === 1 && <div className='grid justify-center '>
                                                    <h2 className='text-[20px] font-semibold my-[23px]'>When’s your trip?       </h2>
                                                    <div className="p-[150px] bg-gray-200 rounded-full w-[300px] h-[300px] items-center flex justify-center">
                                                        <div className="p-[100px] bg-white rounded-full w-[200px]">

                                                        </div>
                                                    </div>
                                                    <button className='text-[18px] text-gray-700 mt-[20px]'>Starting April 25, <span onClick={() => setmodalcalendar(true)} className=' underline'>Edit</span></button>
                                                </div>}
                                                {dataclick === 2 && <div className=" my-[50px]">
                                                    <h2 className='text-[22px] font-medium'>Stay for a <span>{dayclick}</span></h2>
                                                    <div className="flex gap-[15px] py-[20px] justify-center">
                                                        <button onClick={() => setdayclick('Weekend')} className={dayclick === 'Weekend' ? 'bg-gray-100 border-[2px] rounded-[20px] border-black py-[10px] px-[20px]' : 'bg-white border-[1px] border-gray-200 hover:border-black py-[10px] px-[20px] rounded-[20px]'}>Weekend</button>
                                                        <button onClick={() => setdayclick('Week')} className={dayclick === 'Week' ? 'bg-gray-100 border-[2px] rounded-[20px] border-black py-[10px] px-[20px]' : 'bg-white border-[1px] border-gray-200 hover:border-black py-[10px] px-[20px] rounded-[20px]'}>Week</button>
                                                        <button onClick={() => setdayclick('Month')} className={dayclick === 'Month' ? 'bg-gray-100 border-[2px] rounded-[20px] border-black py-[10px] px-[20px]' : 'bg-white border-[1px] border-gray-200 hover:border-black py-[10px] px-[20px] rounded-[20px]'}>Month</button>
                                                    </div>
                                                    <h2 className='text-[22px] font-medium'>Go any time <span>{month}</span></h2>
                                                    <div className="flex mt-[20px]">
                                                        <Swiper
                                                            spaceBetween={50}
                                                            slidesPerView={5}
                                                            className='h-full w-full'
                                                            grabCursor={true}
                                                            navigation={{
                                                                prevEl: ".swiper-button-prev",
                                                                nextEl: ".swiper-button-next",
                                                            }}

                                                            modules={[Pagination, Navigation]}
                                                            onSlideChange={() => console.log('slide change')}
                                                            onSwiper={(swiper) => console.log(swiper)}
                                                        >
                                                            <button className="swiper-button-prev"></button>
                                                            <button className="swiper-button-next"></button>

                                                            <SwiperSlide>
                                                                <div onClick={() => setmonth('Yanvar')} className={month === 'Yanvar' ? 'bg-gray-100 border-[2px] rounded-[20px] border-black py-[40px] px-[30px] w-[120px] ' : 'bg-white border-[1px] py-[40px] px-[30px] w-[120px]  border-gray-400 hover:border-black py-[10px] rounded-[20px]'}>
                                                                    {month === 'Yanvar' ? <img src={calendarone} alt="" className='w-[35px] m-auto' /> : <img src={calendartwo} alt="" className='w-[35px] m-auto' />}
                                                                    <h2 className='text-[20px] font-medium'>Yanvar</h2>
                                                                </div>
                                                            </SwiperSlide>
                                                            <SwiperSlide>
                                                                <div onClick={() => setmonth('Fevral')} className={month === 'Fevral' ? 'bg-gray-100 border-[2px] rounded-[20px] border-black py-[40px] px-[30px] w-[120px] ' : 'bg-white border-[1px] py-[40px] px-[30px] w-[120px]  border-gray-400 hover:border-black py-[10px] rounded-[20px]'}>
                                                                    {month === 'Fevral' ? <img src={calendarone} alt="" className='w-[35px] m-auto' /> : <img src={calendartwo} alt="" className='w-[35px] m-auto' />}
                                                                    <h2 className='text-[20px] font-medium'>Fevral</h2>
                                                                </div>
                                                            </SwiperSlide>
                                                            <SwiperSlide>
                                                                <div onClick={() => setmonth('Mart')} className={month === 'Mart' ? 'bg-gray-100 border-[2px] rounded-[20px] border-black py-[40px] px-[30px] w-[120px] ' : 'bg-white border-[1px] py-[40px] px-[30px] w-[120px]  border-gray-400 hover:border-black py-[10px] rounded-[20px]'}>
                                                                    {month === 'Mart' ? <img src={calendarone} alt="" className='w-[35px] m-auto' /> : <img src={calendartwo} alt="" className='w-[35px] m-auto' />}
                                                                    <h2 className='text-[20px] font-medium'>Mart</h2>
                                                                </div>
                                                            </SwiperSlide>
                                                            <SwiperSlide>
                                                                <div onClick={() => setmonth('Aprel')} className={month === 'Aprel' ? 'bg-gray-100 border-[2px] rounded-[20px] border-black py-[40px] px-[30px] w-[120px] ' : 'bg-white border-[1px] py-[40px] px-[30px] w-[120px]  border-gray-400 hover:border-black py-[10px] rounded-[20px]'}>
                                                                    {month === 'Aprel' ? <img src={calendarone} alt="" className='w-[35px] m-auto' /> : <img src={calendartwo} alt="" className='w-[35px] m-auto' />}
                                                                    <h2 className='text-[20px] font-medium'>Aprel</h2>
                                                                </div>
                                                            </SwiperSlide>
                                                            <SwiperSlide>
                                                                <div onClick={() => setmonth('May')} className={month === 'May' ? 'bg-gray-100 border-[2px] rounded-[20px] border-black py-[40px] px-[30px] w-[120px] ' : 'bg-white border-[1px] py-[40px] px-[30px] w-[120px]  border-gray-400 hover:border-black py-[10px] rounded-[20px]'}>
                                                                    {month === 'May' ? <img src={calendarone} alt="" className='w-[35px] m-auto' /> : <img src={calendartwo} alt="" className='w-[35px] m-auto' />}
                                                                    <h2 className='text-[20px] font-medium'>May</h2>
                                                                </div>
                                                            </SwiperSlide>
                                                            <SwiperSlide>
                                                                <div onClick={() => setmonth('Iyun')} className={month === 'Iyun' ? 'bg-gray-100 border-[2px] rounded-[20px] border-black py-[40px] px-[30px] w-[120px] ' : 'bg-white border-[1px] py-[40px] px-[30px] w-[120px]  border-gray-400 hover:border-black py-[10px] rounded-[20px]'}>
                                                                    {month === 'Iyun' ? <img src={calendarone} alt="" className='w-[35px] m-auto' /> : <img src={calendartwo} alt="" className='w-[35px] m-auto' />}
                                                                    <h2 className='text-[20px] font-medium'>Iyun</h2>
                                                                </div>
                                                            </SwiperSlide>
                                                            <SwiperSlide>
                                                                <div onClick={() => setmonth('Iyul')} className={month === 'Iyul' ? 'bg-gray-100 border-[2px] rounded-[20px] border-black py-[40px] px-[30px] w-[120px] ' : 'bg-white border-[1px] py-[40px] px-[30px] w-[120px]  border-gray-400 hover:border-black py-[10px] rounded-[20px]'}>
                                                                    {month === 'Iyul' ? <img src={calendarone} alt="" className='w-[35px] m-auto' /> : <img src={calendartwo} alt="" className='w-[35px] m-auto' />}
                                                                    <h2 className='text-[20px] font-medium'>Iyul</h2>
                                                                </div>
                                                            </SwiperSlide>
                                                        </Swiper>
                                                    </div>
                                                </div>
                                                }
                                            </div> : null}
                                        </div>
                                        <div className={calendar ? "w-[50%] h-full" : "w-[50%] h-full border-l-[1px] border-gray-200 hover:border-none"}>
                                            <div onClick={() => handlecalendar()} className={calendar ? "grid h-full bg-white py-[10px] rounded-r-[40px] text-start pl-[20px]" : "grid h-full hover:bg-gray-200 py-[10px] rounded-[40px] text-start pl-[20px]"}>
                                                <div className="grid">
                                                    <p>Chake in</p>
                                                    <span>feb 65</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>}
                                </div>
                                <div className="w-[30%] h-full  border-l-[1px] border-gray-200 hover:border-none">
                                    <div onClick={() => handleguide()} className={modalguest ? "flex items-center justify-between pr-[10px]  bg-white py-[10px] rounded-[40px] text-start  pl-[20px]  relative" : "flex items-center relative justify-between pr-[10px]  hover:bg-gray-200 py-[10px] rounded-[40px] text-start  pl-[20px] "}>
                                        <div className="grid ">
                                            <h2>Who</h2>
                                            <p className=' whitespace-nowrap'>{checked ? `${count + count1} guest ${count2 + count3} Infants` : 'Add guest'}</p>
                                        </div>
                                        <div className={calendar || countrysearch || dataclick || modalguest ? "flex justify-end items-center bg-[#FF385C] rounded-full" : 'flex items-center justify-between'}>
                                            <span className='bg-[#FF385C] p-[15px] rounded-full'>{icons.search}</span>
                                            {calendar || countrysearch || dataclick || modalguest ? <h2 className='text-[20px] font-semibold text-white pr-[10px]'>Search</h2> : null}
                                        </div>
                                    </div>
                                    {checked && <button onClick={() => clearcount()} className='fa fa-close absolute top-[35%] translate-y-[-50%]  right-[16%] py-[3px] px-[5px] bg-white hover:bg-gray-200 rounded-full'></button>}
                                    {modalguest ?
                                        <div className="rounded-[30px] px-[30px] py-[10px] right-0 shadow-2xl absolute top-[75px] z-20 bg-white w-[400px]">
                                            <div className=" flex items-center justify-between py-[20px] border-b-[1px] border-gray-300">
                                                <div className="grid">
                                                    <h3 className='text-[16px] font-semibold'>Adults</h3>
                                                    <p className='text-[14px] text-gray-600'>Ages 13 or above</p>
                                                </div>
                                                <div className="flex gap-[20px] items-center">
                                                    <button onClick={() => {
                                                        if (count > 0) { setCount(count - 1) }
                                                    }} className='p-[5px] text-[30px] rounded-full border-[1px] border-gray-500'>{icons.minus}</button>
                                                    <span>{count}</span>
                                                    {checkedtwo ? <button className='p-[5px] text-[30px] opacity-50 rounded-full border-[1px] border-gray-500'>{icons.plus}</button> : <button onClick={() => setCount(count + 1)} className='p-[5px] text-[30px] rounded-full border-[1px] border-gray-500'>{icons.plus}</button>}
                                                </div>
                                            </div>
                                            <div className=" flex items-center justify-between py-[20px] border-b-[1px] border-gray-300">
                                                <div className="grid">
                                                    <h3 className='text-[16px] font-semibold'>Children</h3>
                                                    <p className='text-[14px] text-gray-600'>Ages 2–12</p>
                                                </div>
                                                <div className="flex gap-[20px] items-center">
                                                    <button onClick={() => {
                                                        if (count1 > 0) { setCount1(count1 - 1); }
                                                    }} className='p-[5px] text-[30px] rounded-full border-[1px] border-gray-500'>{icons.minus}</button>
                                                    <span>{count1}</span>
                                                    {checkedtwo ? <button className='p-[5px] text-[30px] opacity-50 rounded-full border-[1px] border-gray-500'>{icons.plus}</button> : <button onClick={() => setCount1(count1 + 1)} className='p-[5px] text-[30px] rounded-full border-[1px] border-gray-500'>{icons.plus}</button>}
                                                </div>
                                            </div>
                                            <div className={activeIndex === 1 ? "flex items-center justify-between py-[20px]" : "flex items-center justify-between py-[20px] border-b-[1px] border-gray-300"}>
                                                <div className="grid">
                                                    <h3 className='text-[16px] font-semibold'>Infants</h3>
                                                    <p className='text-[14px] text-gray-600'>Under 2</p>
                                                </div>
                                                <div className="flex gap-[20px] items-center">
                                                    <button onClick={() => {
                                                        if (count2 > 0) { setCount2(count2 - 1); }
                                                    }} className='p-[5px] text-[30px] rounded-full border-[1px] border-gray-500'>{icons.minus}</button>
                                                    <span>{count2}</span>
                                                    {buttonof ? <button className='p-[5px] text-[30px] opacity-50 rounded-full border-[1px] border-gray-500'>{icons.plus}</button> : <button onClick={() => setCount2(count2 + 1)} className='p-[5px] text-[30px] rounded-full border-[1px] border-gray-500'>{icons.plus}</button>}                                        </div>
                                            </div>
                                            {activeIndex === 1 ? null : <div className=" flex items-center justify-between py-[20px]">
                                                <div className="grid">
                                                    <h3 className='text-[16px] font-semibold'>Pets</h3>
                                                    <p className='text-[14px] text-gray-600 underline'>Bringing a service animal?</p>
                                                </div>
                                                <div className="flex gap-[20px] items-center">
                                                    <button onClick={() => {
                                                        if (count3 > 0) { setCount3(count3 - 1); }
                                                    }} className='p-[5px] text-[30px] rounded-full border-[1px] border-gray-500'>{icons.minus}</button>
                                                    <span>{count3}</span>
                                                    {button3 ? <button className='p-[5px] text-[30px] opacity-50 rounded-full border-[1px] border-gray-500'>{icons.plus}</button> : <button onClick={() => setCount3(count3 + 1)} className='p-[5px] text-[30px] rounded-full border-[1px] border-gray-500'>{icons.plus}</button>}                                        </div>
                                            </div>}
                                        </div> : null}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:hidden block py-[10px] w-full">
                        <div className="flex items-center justify-between w-full">
                            <div onClick={() => setmodalnav(true)} className="flex items-center border-[1px] border-gray-100 rounded-[40px] py-[10px] shadow-lg w-[80%] whitespace-nowrap">
                                <span className='mx-[20px] scale-75'>{icons.searchblack}</span>
                                <div className="grid">
                                    <h2 className='text-[14px] font-semibold'>Aynywhere</h2>
                                    <p className='text-[12px] font-normal'>Any week <span className='mx-[10px]'>·</span> Add guest</p>
                                </div>
                            </div>
                            <span className='p-[10px] border-[1px] border-gray-700 rounded-[100%]'>{icons.filter}</span>

                        </div>
                        {modalnav ?
                            <div className="fixed top-0 left-0 w-full z-40">
                                <div className="relative py-[20px] bg-gray-100 h-[100vh] px-[10px]">
                                    <div className="flex justify-center items-center">
                                        <span onClick={() => setmodalnav(false)} className='fa fa-close p-[8px] border-[1px] border-gray-500 rounded-full px-[10px] absolute top-4 left-3 '></span>
                                        <ul className='flex items-center gap-[20px]'>
                                            <li onClick={() => handleItemClick(0)} className={activeIndex === 0 ? 'text-black font-medium overflow-hidden border-b-[1px] border-black pb-[5px]' : ' text-gray-700 pb-[6px]'}>Stays</li>
                                            <li onClick={() => handleItemClick(1)} className={activeIndex === 1 ? 'text-black font-medium overflow-hidden border-b-[1px] border-black pb-[5px]' : ' text-gray-700 pb-[6px]'}>Experiences</li>
                                        </ul>
                                    </div>
                                    <div className="grid gap-[20px] mt-[20px]">
                                        <div onClick={() => handleselectnav(0)} className="flex items-center justify-between p-[15px] shadow-xl rounded-[15px] bg-white">

                                            {selelctnav === 0 ? <div className=" w-full">
                                                <h2 className='text-[22px] font-semibold'>Where to?</h2>
                                                <form className=" w-full relative my-[15px]">
                                                    <span className=' absolute top-[50%] left-[10px] translate-y-[-50%] scale-75'>{icons.searchblack}</span>
                                                    <input type="text" placeholder='Search destinations' className='py-[15px] px-[20px] pl-[50px] rounded-2xl border-[1px] border-gray-600 w-full' />

                                                </form>
                                                <div className="flex overflow-hidden justify-between gap-[10px] w-full">
                                                    <div className="text-start">
                                                        <img src="" alt="" className='w-[100px] h-[100px] bg-gray-400 rounded-[20px]' />
                                                        <h2 className='text-[16px] text-black ml-[5px] mt-[5px]'>moldavia</h2>
                                                    </div>
                                                    <div className="text-start">
                                                        <img src="" alt="" className='w-[100px] h-[100px] bg-gray-400 rounded-[20px]' />
                                                        <h2 className='text-[16px] text-black ml-[5px] mt-[5px]'>moldavia</h2>
                                                    </div>
                                                    <div className="text-start">
                                                        <img src="" alt="" className='w-[100px] h-[100px] bg-gray-400 rounded-[20px]' />
                                                        <h2 className='text-[16px] text-black ml-[5px] mt-[5px]'>moldavia</h2>
                                                    </div>
                                                </div>
                                            </div> : <div className="flex items-center justify-between w-full">
                                                <h2 className='text-[16px] text-gray-700'>Where</h2>
                                                <p className='text-[16px] text-black'>I'm flexible</p>
                                            </div>}

                                        </div>
                                        <div onClick={() => handleselectnav(1)} className="flex items-center justify-between shadow-xl rounded-[15px] bg-white overflow-y-scroll">

                                            {selelctnav === 1 ? <div className="relative w-full">
                                                <h2 className='text-[22px] font-semibold mb-[10px] p-[10px]'>When's your trip?</h2>
                                                <div className="p-[5px] rounded-[30px] gap-3 bg-gray-200 text-center flex justify-between m-auto mx-[10px]">
                                                    <button onClick={() => handledata(0)} className={dataclick === 0 ? 'bg-white rounded-[30px] py-[5px] px-[15px] font-semibold w-[30%]' : 'rounded-[30px] w-[30%] py-[5px] px-[15px] hover:bg-gray-300 font-semibold'}>Dates</button>
                                                    <button onClick={() => handledata(1)} className={dataclick === 1 ? 'bg-white rounded-[30px] py-[5px] px-[15px] font-semibold w-[30%]' : 'rounded-[30px] w-[30%] py-[5px] px-[15px] hover:bg-gray-300 font-semibold'}>Months</button>
                                                    <button onClick={() => handledata(2)} className={dataclick === 2 ? 'bg-white rounded-[30px] py-[5px] px-[15px] font-semibold w-[30%]' : 'rounded-[30px] w-[30%] py-[5px] px-[15px] hover:bg-gray-300 font-semibold'}>Flexible</button>
                                                </div>
                                                {dataclick === 0 && <div className="overflow-y-scroll h-[60vh] relative p-[10px]">
                                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                        <DateCalendar />
                                                    </LocalizationProvider>
                                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                        <DateCalendar />
                                                    </LocalizationProvider>
                                                </div>}
                                                <div className="flex overflow-x-scroll overflow-hidden py-[5px] border-y-[1px] w-full border-gray-400 items-center mt-[30px] gap-[10px] justify-between absolute bottom-[18%] bg-white whitespace-nowrap p-0">
                                                    <button onClick={() => handledays(0)} className={activeday === 0 ? 'text-[12px] font-light border-[2px] rounded-[15px] px-[8px] py-[5px] border-gray-900' : 'text-[12px] font-light border-[1px] rounded-[15px] px-[8px] py-[5px] border-gray-500'}>Exact dates</button>
                                                    <button onClick={() => handledays(1)} className={activeday === 1 ? 'text-[12px] font-light border-[2px] rounded-[15px] px-[8px] py-[5px] border-gray-900' : 'text-[12px] font-light border-[1px] rounded-[15px] px-[8px] py-[5px] border-gray-500'}>+1 days</button>
                                                    <button onClick={() => handledays(2)} className={activeday === 2 ? 'text-[12px] font-light border-[2px] rounded-[15px] px-[8px] py-[5px] border-gray-900' : 'text-[12px] font-light border-[1px] rounded-[15px] px-[8px] py-[5px] border-gray-500'}>+2 days</button>
                                                    <button onClick={() => handledays(3)} className={activeday === 3 ? 'text-[12px] font-light border-[2px] rounded-[15px] px-[8px] py-[5px] border-gray-900' : 'text-[12px] font-light border-[1px] rounded-[15px] px-[8px] py-[5px] border-gray-500'}>+3 days</button>
                                                    <button onClick={() => handledays(4)} className={activeday === 4 ? 'text-[12px] font-light border-[2px] rounded-[15px] px-[8px] py-[5px] border-gray-900' : 'text-[12px] font-light border-[1px] rounded-[15px] px-[8px] py-[5px] border-gray-500'}>+7 days</button>
                                                </div>
                                                {dataclick === 1 && <div className='grid justify-center '>
                                                    <h2 className='text-[20px] font-semibold my-[23px]'>When’s your trip?       </h2>
                                                    <div className="p-[150px] bg-gray-200 rounded-full w-[300px] h-[300px] items-center flex justify-center">
                                                        <div className="p-[100px] bg-white rounded-full w-[200px]">

                                                        </div>
                                                    </div>
                                                    <button className='text-[18px] text-gray-700 mt-[20px]'>Starting April 25, <span onClick={() => setmodalcalendar(true)} className=' underline'>Edit</span></button>
                                                </div>}
                                            </div> : <div className="flex items-center justify-between w-full p-[15px]">
                                                <h2 className='text-[16px] text-gray-700'>When</h2>
                                                <p className='text-[16px] text-black'>Add dates</p>
                                            </div>}
                                        </div>
                                        <div onClick={() => handleselectnav(2)} className="flex items-center justify-between p-[15px] shadow-xl rounded-[15px] bg-white">

                                            {selelctnav === 2 ?
                                                <div className="w-full">
                                                    <h2 className='text-[22px] font-semibold'>Who's is coming?</h2>
                                                    <div className=" flex items-center justify-between py-[10px] border-b-[1px] border-gray-200">
                                                        <div className="grid">
                                                            <h3 className='text-[14px] font-semibold'>Adults</h3>
                                                            <p className='text-[12px] text-gray-600'>Ages 13 or above</p>
                                                        </div>
                                                        <div className="flex gap-[20px] items-center">
                                                            <button onClick={() => {
                                                                if (count > 0) { setCount(count - 1) }
                                                            }} className='p-[2px] text-[30px] rounded-full border-[1px] border-gray-500'>{icons.minus}</button>
                                                            <span>{count}</span>
                                                            {checkedtwo ? <button className='p-[2px] text-[30px] opacity-50 rounded-full border-[1px] border-gray-500'>{icons.plus}</button> : <button onClick={() => setCount(count + 1)} className='p-[2px] text-[30px] rounded-full border-[1px] border-gray-500'>{icons.plus}</button>}
                                                        </div>
                                                    </div>
                                                    <div className=" flex items-center justify-between py-[10px] border-b-[1px] border-gray-200">
                                                        <div className="grid">
                                                            <h3 className='text-[14px] font-semibold'>Children</h3>
                                                            <p className='text-[12px] text-gray-600'>Ages 2–12</p>
                                                        </div>
                                                        <div className="flex gap-[20px] items-center">
                                                            <button onClick={() => {
                                                                if (count1 > 0) { setCount1(count1 - 1); }
                                                            }} className='p-[2px] text-[30px] rounded-full border-[1px] border-gray-500'>{icons.minus}</button>
                                                            <span>{count1}</span>
                                                            {checkedtwo ? <button className='p-[2px] text-[30px] opacity-50 rounded-full border-[1px] border-gray-500'>{icons.plus}</button> : <button onClick={() => setCount1(count1 + 1)} className='p-[2px] text-[30px] rounded-full border-[1px] border-gray-500'>{icons.plus}</button>}
                                                        </div>
                                                    </div>
                                                    <div className={activeIndex === 1 ? "flex items-center justify-between py-[10px]" : "flex items-center justify-between py-[10px] border-b-[1px] border-gray-200"}>
                                                        <div className="grid">
                                                            <h3 className='text-[14px] font-semibold'>Infants</h3>
                                                            <p className='text-[12px] text-gray-600'>Under 2</p>
                                                        </div>
                                                        <div className="flex gap-[20px] items-center">
                                                            <button onClick={() => {
                                                                if (count2 > 0) { setCount2(count2 - 1); }
                                                            }} className='p-[2px] text-[30px] rounded-full border-[1px] border-gray-500'>{icons.minus}</button>
                                                            <span>{count2}</span>
                                                            {buttonof ? <button className='p-[2px] text-[30px] opacity-50 rounded-full border-[1px] border-gray-500'>{icons.plus}</button> : <button onClick={() => setCount2(count2 + 1)} className='p-[2px] text-[30px] rounded-full border-[1px] border-gray-500'>{icons.plus}</button>}                                        </div>
                                                    </div>
                                                    {activeIndex === 1 ? null : <div className=" flex items-center justify-between py-[10px]">
                                                        <div className="grid">
                                                            <h3 className='text-[14px] font-semibold'>Pets</h3>
                                                            <p className='text-[12px] text-gray-600 underline'>Bringing a service animal?</p>
                                                        </div>
                                                        <div className="flex gap-[20px] items-center">
                                                            <button onClick={() => {
                                                                if (count3 > 0) { setCount3(count3 - 1); }
                                                            }} className='p-[2px] text-[30px] rounded-full border-[1px] border-gray-500'>{icons.minus}</button>
                                                            <span>{count3}</span>
                                                            {button3 ? <button className='p-[2px] text-[30px] opacity-50 rounded-full border-[1px] border-gray-500'>{icons.plus}</button> : <button onClick={() => setCount3(count3 + 1)} className='p-[2px] text-[30px] rounded-full border-[1px] border-gray-500'>{icons.plus}</button>}                                        </div>
                                                    </div>}
                                                </div>
                                                : <div className="flex items-center justify-between w-full">
                                                    <h2 className='text-[16px] text-gray-700'>Who</h2>
                                                    <p className=' whitespace-nowrap'>{checked ? `${count + count1} guest ${count2 + count3} Infants` : 'Add guest'}</p>                                                </div>}
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between py-[6px] absolute bottom-0 bg-white border-t-[1px] border-gray-300 w-full rounded-b-[20px] px-[20px] z-50">
                                    <button className='py-[10px] text-[14px] font-semibold hover:bg-slate-100 rounded-[15px] underline px-[10px]'>Cleear all</button>
                                    {selelctnav === 1 ? <button onClick={() => setselectnav(0)} className='bg-gray-900 hover:bg-black text-white font-semibold text-[14px] py-[10px] px-[20px] rounded-[15px] flex items-center'>Next</button>
                                        : <button className='bg-gray-900 hover:bg-black text-white font-semibold text-[14px] py-[10px] px-[10px] rounded-[15px] flex items-center'> <span className='mr-[10px]'>{icons.search}</span>Search</button>
                                    }                                </div>
                            </div> : null}
                    </div>
                </div>
            </div >
        </>
    )
}
