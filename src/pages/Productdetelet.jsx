import React, { useEffect, useState } from 'react'
import { icons } from '../utilits/icons'
import GoogleMapReact from 'google-map-react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangeCalendar } from '@mui/x-date-pickers-pro/DateRangeCalendar';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import rasm1 from '../assets/img/11.webp'
import rasm3 from '../assets/img/13.webp'
import '../index.css'
import { Link } from 'react-router-dom'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Footer from '../component/Footer';
const AnyReactComponent = ({ text }) => <div>{text}</div>;
const roomsData = [
    { id: 1, image: rasm3, title: 'Bedroom 1', description: '1 single bed' },
    { id: 2, image: rasm3, title: 'Bedroom 2', description: '1 single bed' },
    { id: 3, image: rasm3, title: 'Bedroom 3', description: '1 single bed' },
    { id: 4, image: rasm3, title: 'Bedroom 4', description: '1 single bed' },
    { id: 5, image: rasm3, title: 'Bedroom 5', description: '1 single bed' },
    { id: 6, image: rasm3, title: 'Bedroom 6', description: '1 single bed' },
    { id: 7, image: rasm3, title: 'Bedroom 7', description: '1 single bed' },
    { id: 8, image: rasm3, title: 'Bedroom 8', description: '1 single bed' }
];
export default function Page() {

    const [startIndex, setStartIndex] = useState(0);
    const [like, setlike] = useState(false);
    const roomsPerPage = 2;
    const [date, setDate] = useState(new Date());

    const onChange = (selectedDate) => {
        setDate(selectedDate);
    };
    const Next = () => {
        if (startIndex + roomsPerPage < roomsData.length) {
            setStartIndex(prevIndex => prevIndex + roomsPerPage);
        }
    };

    const Prev = () => {
        if (startIndex - roomsPerPage >= 0) {
            setStartIndex(prevIndex => prevIndex - roomsPerPage);
        }
    };

    const currentRooms = roomsData.slice(startIndex, startIndex + roomsPerPage);
    const [fixedbox, setFixedbox] = useState(false);
    const [fixnav, setfixnav] = useState(false)
    useEffect(() => {
        const handleScroll = () => {
            const scrollPos = window.scrollY;

            if (scrollPos >= 730 && scrollPos < 2100) {
                setFixedbox(true);
                setfixnav(true)
            } else if (scrollPos < 750) {
                setfixnav(false)
                setFixedbox(false)
            }
            else {
                setFixedbox(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const defaultProps = {
        center: {
            lat: 10.99835602,
            lng: 77.01502627
        },
        zoom: 11
    };
    window.addEventListener('scroll', function () {
        var scrollPosition = window.scrollY;
        console.log("Skrol bo'lgan pikseller:", scrollPosition);
    });
    return (
        <>
            <div className='container'>
                <div className='px-[15px]'>
                    <div className="lg:hidden block">
                        <Swiper
                            spaceBetween={50}
                            slidesPerView={1}
                            className='h-[321px]'
                            pagination={{
                                dynamicBullets: true,
                            }}

                            grabCursor={true}
                            navigation={{
                                prevEl: ".swiper-button-prev",
                                nextEl: ".swiper-button-next",
                            }}

                            modules={[Pagination, Navigation]}

                        >

                            <SwiperSlide>
                                <div className="lg:w-full  h-[321px] rounded-lg" style={{ backgroundImage: `url(${rasm1})` }}

                                >
                                    <div className="flex items-center justify-between p-[10px]">
                                        <button className='text-[16px] font-semibold p-[5px] bg-white rounded-full'>{icons.arrowl}</button>
                                        <div className="flex gap-[15px]">
                                            <h3 className='flex items-center ml-[20px] gap-[10px] p-[5px] bg-white rounded-full'> <span>{icons.share}</span> </h3>
                                            <button onClick={() => setlike(!like)} className='self-end p-[5px] bg-white rounded-full'>{like ? <span>{icons.likered}</span> : <span>{icons.likeb}</span>}</button>
                                        </div>

                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                2
                            </SwiperSlide>
                            <SwiperSlide>3</SwiperSlide>
                            <SwiperSlide>4</SwiperSlide>

                        </Swiper>

                    </div>
                    <div className="lg:flex items-center justify-between py-[20px]">
                        <p className='lg:text-[26px] text-[20px] font-semibold'>Linnéaholmen: Private island reached by footbridge</p>
                        <div className="lg:block hidden">
                            <div className="flex ">
                                <h3 className='flex items-center ml-[20px] gap-[10px]'> <span>{icons.share}</span> Share</h3>
                                <h3 className='flex items-center ml-[20px] gap-[10px]'> <span>{icons.likeb}</span>Save</h3>
                            </div>
                        </div>
                    </div>
                    <div className="lg:block hidden">
                        <div className="flex items-center justify-between relative ">
                            <div className="w-[50%]">
                                <img src={rasm1} alt="" className='w-full h-[420px] rounded-l-xl object-cover' />
                            </div>
                            <div className="w-[50%] grid">
                                <div className="flex p-[10px] gap-[10px]">
                                    <img src={rasm3} alt="" className='w-[50%] h-[200px] object-cover' />
                                    <img src={rasm3} alt="" className='w-[50%] h-[200px] object-cover rounded-r-xl' />
                                </div>
                                <div className="flex p-[10px] gap-[10px]">
                                    <img src={rasm3} alt="" className='w-[50%] h-[200px] object-cover' />
                                    <img src={rasm3} alt="" className='w-[50%] h-[200px] object-cover rounded-r-xl' />
                                </div>
                            </div>
                            <button className='flex items-center gap-[10px] absolute bg-white py-[5px] px-[10px] rounded-lg bottom-[10%] right-[4%]'><span>{icons.img}</span> Show all photos</button>
                        </div>
                    </div>
                    {
                        fixnav ?
                            <div className="bg-gray-50 border-b-[1px] border-gray-400 py-[20px] fixed top-0 w-full left-0 z-20 lg:block hidden">
                                <ul className='flex gap-[30px] items-center px-[100px] text-[16px] font-semibold'>
                                    <li>Photos</li>
                                    <li>Amenities</li>
                                    <li>Reviews</li>
                                    <li>Location</li>
                                </ul>
                            </div> : null
                    }
                    <div className="flex lg:py-[30px] p-0 justify-between">
                        <div className="lg:w-[700px] w-full overflow-auto">
                            <div className="grid border-b-[1px] pb-[30px] border-gray-400">
                                <p className='text-[22px] font-semibold'>Island in Ytterån, Sweden</p>
                                <h4 className='text-[16px] py-[5px]'>10 guests6 bedrooms8 beds3 baths</h4>
                                <h4 className='flex items-center font-bold'> <span>{icons.star}</span>
                                    4.83
                                    ·
                                    <span className=' underline'> 24 reviews</span></h4>
                            </div>
                            <div className="flex py-[30px] items-center border-b-[1px] border-gray-400">
                                <img src="" alt="" className='w-[40px] h-[40px] rounded-full bg-black' />
                                <div className="grid ml-[20px]">
                                    <h3 className='text-[16px] font-semibold'>Hosted by Per-Henrik</h3>
                                    <p className='text-gray-600'>5 years hosting</p>
                                </div>
                            </div>
                            <div className="grid py-[30px] gap-[20px] border-b-[1px] border-gray-400">
                                <div className="flex items-start ml-[10px]">
                                    <span>{icons.note}</span>
                                    <div className="grid ml-[30px]">
                                        <h3 className='text-[16px] font-semibold'>Hosted by Per-Henrik</h3>
                                        <p className='text-gray-600'>5 years hosting</p>
                                    </div>
                                </div>
                                <div className="flex items-start ml-[10px]">
                                    <span>{icons.note}</span>
                                    <div className="grid ml-[30px]">
                                        <h3 className='text-[16px] font-semibold'>Hosted by Per-Henrik</h3>
                                        <p className='text-gray-600'>5 years hosting</p>
                                    </div>
                                </div>
                                <div className="flex items-start ml-[10px]">
                                    <span>{icons.note}</span>
                                    <div className="grid ml-[30px]">
                                        <h3 className='text-[16px] font-semibold'>Hosted by Per-Henrik</h3>
                                        <p className='text-gray-600'>5 years hosting</p>
                                    </div>
                                </div>
                            </div>
                            <div className="grid border-b-[1px] border-gray-400 py-[30px] ">
                                <button className='py-[10px] px-[20px] bg-gray-100 text-[17px] text-start rounded-xl text-gray-600'>Some info has been automatically translated. <Link className='text-black underline'>Show original</Link></button>
                                <p className='py-[20px] text-[17px] text-gray-700'>Welcome to Linnéaholmen – a unique place on a private island in Storsjön. The island is accessible via a short footbridge from a private parking area, which is prepared for charging an electric car (3-phase). Linnéaholmen is perfect if you want the luxury of fantastic views, peace and quiet, and a big charming house with room for up to 10 persons.
                                </p>
                                <p>...</p>
                                <button className='flex items-center font-bold underline'>Show more <span>{icons.arrovr}</span></button>
                            </div>
                            <div className="grid border-b-[1px] border-gray-400 py-[30px]">
                                <div className="flex items-center justify-between">
                                    <p className='text-[24px] font-semibold py-[20px]'>Where you'll sleep</p>
                                    <div className="flex">
                                        <div className="counter  text-black py-1 px-2 rounded-bl-lg">
                                            {startIndex / 2 + 1} / {roomsData.length / 2}
                                        </div>
                                        {startIndex !== 0 ?
                                            <button
                                                className="rotate-180 bg-white border-[1px] border-gray-600  text-white py-[7px] px-[7px] rounded-full transition-opacity duration-300 ml-[10px]"
                                                onClick={Prev}
                                            >
                                                {icons.arrovr}
                                            </button> : <button
                                                className="rotate-180 opacity-20 border-[1px] border-gray-600  bg-white text-white py-[7px] px-[7px] rounded-full transition-opacity duration-300 ml-[10px]"

                                            >
                                                {icons.arrovr}
                                            </button>
                                        }
                                        {startIndex !== startIndex.length - 1 ?
                                            <button
                                                className=" bg-white text-white border-[1px] border-gray-600  py-[7px] px-[7px] rounded-full transition-opacity duration-300 ml-[10px]"
                                                onClick={Next}
                                            >
                                                {icons.arrovr}
                                            </button> : <button
                                                className="opacity-20  bg-white border-[1px] border-gray-600  text-white py-[7px] px-[7px] rounded-full transition-opacity duration-300 ml-[10px]"

                                            >
                                                {icons.arrovr}
                                            </button>
                                        }
                                    </div>
                                </div>
                                <div className="flex justify-between">
                                    {currentRooms.map((element) => (
                                        <div key={element.id} className="grid">
                                            <img src={element.image} alt="" className='w-[330px] h-[250px] rounded-2xl' />
                                            <h3 className='text-[18px] font-semibold mt-[15px]'>{element.title}</h3>
                                            <p>{element.description}</p>
                                        </div>
                                    ))}
                                </div>

                            </div>
                            <div className="grid py-[30px] border-b-[1px] border-gray-400">
                                <h2 className='text-[22px] font-semibold'>What this place offers</h2>
                                <div className="lg:flex pt-[20px] items-center">
                                    <div className="grid w-[50%] gap-[15px]">
                                        <div className="flex gap-[20px]">
                                            <span>{icons.note}</span>
                                            <p className='text-[16px] text-gray-700'>Lake view</p>
                                        </div>
                                        <div className="flex gap-[20px]">
                                            <span>{icons.note}</span>
                                            <p className='text-[16px] text-gray-700'>Lake view</p>
                                        </div>
                                        <div className="flex gap-[20px]">
                                            <span>{icons.note}</span>
                                            <p className='text-[16px] text-gray-700'>Lake view</p>
                                        </div>
                                        <div className="flex gap-[20px]">
                                            <span>{icons.note}</span>
                                            <p className='text-[16px] text-gray-700'>Lake view</p>
                                        </div>
                                        <div className="flex gap-[20px]">
                                            <span>{icons.note}</span>
                                            <p className='text-[16px] text-gray-700'>Lake view</p>
                                        </div>

                                    </div>
                                    <div className="lg:block hidden">
                                        <div className="grid w-[50%] gap-[15px] whitespace-nowrap">
                                            <div className="flex gap-[20px]">
                                                <span>{icons.note}</span>
                                                <p className='text-[16px] text-gray-700'>Lake view</p>
                                            </div>
                                            <div className="flex gap-[20px]">
                                                <span>{icons.note}</span>
                                                <p className='text-[16px] text-gray-700'>Lake view</p>
                                            </div>
                                            <div className="flex gap-[20px]">
                                                <span>{icons.note}</span>
                                                <p className='text-[16px] text-gray-700'>Lake view</p>
                                            </div>
                                            <div className="flex gap-[20px]">
                                                <span>{icons.note}</span>
                                                <p className='text-[16px] text-gray-700'>Lake view</p>
                                            </div>
                                            <div className="flex gap-[20px]">
                                                <span>{icons.note}</span>
                                                <p className='text-[16px] text-gray-700'>Lake view</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className="">
                                    <button className='mt-[30px] border-black border-[1px] py-[8px] px-[15px] rounded-xl font-semibold'>Show all 51 aminities</button>
                                </div>
                            </div>

                        </div>
                        <div className={`w-[400px] bg-white rounded-2xl ${fixedbox ? 'fixed mt-[50px] right-[100px] lg:block hidden' : 'relative lg:block hidden'}`} style={{ position: fixedbox ? 'fixed' : 'relative', top: fixedbox ? '50px' : 'auto' }}>
                            <div className="grid p-[30px] border-[1px] border-gray-200 rounded-2xl shadow-2xl">
                                <h3 className='text-[26px] font-semibold'>$207
                                    <span className='text-[18px] text-gray-700'> night</span></h3>
                                <div className="flex border-[1px] border-gray-500 rounded-t-[10px] p-[10px]">
                                    <div className="grid w-[50%]">
                                        <p className='text-[14px] font-medium'>chack in</p>
                                        <p className='text-[14px] text-gray-700'>9/9/2024</p>
                                    </div>
                                    <div className="grid w-[50%] border-l-[1px] pl-[15px] border-gray-500">
                                        <p className='text-[14px] font-medium'>chack out</p>
                                        <p className='text-[14px] text-gray-700'>9/14/2024</p>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between border-[1px] border-gray-500 rounded-b-[10px] p-[10px]">
                                    <div className="grid">
                                        <p className='text-[14px] font-medium'>chack out</p>
                                        <p className='text-[14px] text-gray-700'>9/14/2024</p>
                                    </div>
                                    <span className=' rotate-90 scale-125'>{icons.arrovr}</span>
                                </div>
                                <button className='py-[10px] rounded-xl mt-[20px] text-white bg-[#FF385C] text-[18px] font-semibold'>Reserve</button>
                                <p className='text-center my-[15px]'>You won't be charged yet</p>
                                <div className="grid gap-[15px] mt-[10px] border-b-[1px] border-gray-400 pb-[20px]">
                                    <div className="flex items-center justify-between">
                                        <p className='underline text-gray-600 text-[17px]'>$207 x 5 nights
                                        </p>
                                        <span className='text-gray-600 text-[17px]'>$1024</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <p className='underline text-gray-600 text-[17px]'>$207 x 5 nights
                                        </p>
                                        <span className='text-gray-600 text-[17px]'>$1024</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <p className='underline text-gray-600 text-[17px]'>$207 x 5 nights
                                        </p>
                                        <span className='text-gray-600 text-[17px]'>$1024</span>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between pt-[20px]">
                                    <p className='text-[17px] font-semibold'>Total before taxes</p>
                                    <span className='text-[17px] font-semibold'>$1065</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border-b-[1px] border-gray-400 pb-[30px] lg:hidden block">
                        <p className='text-[24px] font-semibold border-t-[1px] border-gray-300 pt-[20px]'>Where you’ll be</p>
                        <div className='py-[15px]'>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d95872.49292629753!2d69.2256768!3d41.3302784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1stoshkent!5e0!3m2!1suz!2s!4v1707561340134!5m2!1suz!2s" width="100%" height="200" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                        <div className="w-[100%]">
                            <div className="grid">
                                <p className='flex items-center text-[18px] py-[20px] font-semibold'> September 2023 ,Stayed about a week</p>
                                <h3 className='text-[18px] font-normal text-gray-500 pb-[10px]'>This island is absolutely beautiful. Peaceful and enjoyable for outside activities like swimming or canoeing or just sitting by the lake. The house was an old fashioned country house, and</h3>
                                <div className="">
                                    <button className='underline  flex font-semibold text-[18px] items-center'>Show more <span>{icons.arrovr}</span></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='bg-white rounded-[20px] flex my-[15px] lg:block hidden'>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer components={['DateRangeCalendar']}>
                                <DateRangeCalendar />
                            </DemoContainer>
                        </LocalizationProvider>
                    </div>
                    <div className="lg:hidden block grid">
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DateCalendar />
                        </LocalizationProvider>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DateCalendar />
                        </LocalizationProvider>
                    </div>
                    <div className="grid lg:border-b-[1px] lg:border-gray-400 lg:pb-[30px]">
                        <h2 className=' flex items-center gap-[15px] text-[26px] font-semibold'><span>{icons.star}</span>4.83 · 24 reviews</h2>
                        <div className="lg:block hidden">
                            <div className="flex justify-between items-start mt-[30px] ">
                                <div className="w-[12%] border-gray-400">
                                    <h2 className=' text-[16px] font-semibold'>Overall rating
                                    </h2>
                                    <div className="flex items-center">
                                        <h2 className='w-[20%] text-[12px]'>5</h2>
                                        <div className=" h-[5px] w-[80%] bg-gray-400 rounded-md">
                                            <div className=" h-[5px] w-[90%] bg-black"></div>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <h2 className='w-[20%] text-[12px]'>4</h2>
                                        <div className=" h-[5px] w-[80%] bg-gray-400 rounded-md">
                                            <div className=" h-[5px] w-[20%] bg-black"></div>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <h2 className='w-[20%] text-[12px]'>3</h2>
                                        <div className=" h-[5px] w-[80%] bg-gray-400 rounded-md">
                                            <div className=" h-[5px] w-[10%] bg-black"></div>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <h2 className='w-[20%] text-[12px]'>2</h2>
                                        <div className=" h-[5px] w-[80%] bg-gray-400 rounded-md">
                                            <div className=" h-[5px] "></div>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <h2 className='w-[20%] text-[12px]'>1</h2>
                                        <div className=" h-[5px] w-[80%] bg-gray-400 rounded-md">
                                            <div className=" h-[5px] "></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[12%] border-l-[1px] pl-[20px] border-gray-400">
                                    <div className="grid mb-[30px]">
                                        <h2 className='text-[16px] font-semibold'>Cleanliness
                                        </h2>
                                        <p className=' text-[16px] font-semibold'>4.6</p>
                                    </div>
                                    <div className=''>{icons.likeb}</div>
                                </div>
                                <div className="w-[12%] border-l-[1px] pl-[20px] border-gray-400">
                                    <div className="grid mb-[30px]">
                                        <h2 className='text-[16px] font-semibold'>Cleanliness
                                        </h2>
                                        <p className=' text-[16px] font-semibold'>4.6</p>
                                    </div>
                                    <div className=''>{icons.likeb}</div>
                                </div>
                                <div className="w-[12%] border-l-[1px] pl-[20px] border-gray-400">
                                    <div className="grid mb-[30px]">
                                        <h2 className='text-[16px] font-semibold'>Cleanliness
                                        </h2>
                                        <p className=' text-[16px] font-semibold'>4.6</p>
                                    </div>
                                    <div className=''>{icons.likeb}</div>
                                </div>
                                <div className="w-[12%] border-l-[1px] pl-[20px] border-gray-400">
                                    <div className="grid mb-[30px]">
                                        <h2 className='text-[16px] font-semibold'>Cleanliness
                                        </h2>
                                        <p className=' text-[16px] font-semibold'>4.6</p>
                                    </div>
                                    <div className=''>{icons.likeb}</div>
                                </div>
                                <div className="w-[12%] border-l-[1px] pl-[20px] border-gray-400">
                                    <div className="grid mb-[30px]">
                                        <h2 className='text-[16px] font-semibold'>Cleanliness
                                        </h2>
                                        <p className=' text-[16px] font-semibold'>4.6</p>
                                    </div>
                                    <div className=''>{icons.likeb}</div>
                                </div>
                                <div className="w-[12%] border-l-[1px] pl-[20px] border-gray-400">
                                    <div className="grid mb-[30px]">
                                        <h2 className='text-[16px] font-semibold'>Cleanliness
                                        </h2>
                                        <p className=' text-[16px] font-semibold'>4.6</p>
                                    </div>
                                    <div className=''>{icons.likeb}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:py-[30px] py-[15px]">
                        <div className="flex gap-[20px] lg:overscroll-x-none lg:flex-wrap  overflow-x-scroll items-center justify-between">
                            <div className="w-[320px] lg:w-[40%] py-[10px] lg:py-[20px] border-[1px] lg:border-none rounded-[20px] p-[15px] border-gray-300">
                                <div className="flex lg:flex-col flex-col-reverse">
                                    <div className="flex items-center gap-[10px] lg:mt-[0] mt-[15px]">
                                        <img src="" alt="" className='w-[40px] h-[40px] rounded-full bg-black' />
                                        <div className="grid ml-[px]">
                                            <h3 className='text-[16px] font-semibold whitespace-nowrap'>Hosted</h3>
                                            <p className='text-gray-600 lg:text-[16px] text-[13px]'>germany francy</p>
                                        </div>
                                    </div>
                                    <div className="">
                                        <p className='flex items-center font-semibold lg:text-[16px] text-[13px]  py-[8px] whitespace-nowrap'><span>  <Stack spacing={1}>
                                            <Rating name="size-small" defaultValue={2} size="small" />
                                        </Stack></span>· September 2023  </p>
                                        <h3 className='lg:text-[18px] text-[14px] leading-5'>This island is absolutely beautiful. Peaceful and enjoyable for outside activities like swimming or canoeing or just sitting by the lake. The house was an old fashioned country house, and</h3>
                                        <div className="">
                                            <button className='underline items-start font-bold pt-[10px]'>Show more</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-[320px] lg:w-[40%] py-[10px] lg:py-[20px] border-[1px] lg:border-none rounded-[20px] p-[15px] border-gray-300">
                                <div className="flex lg:flex-col flex-col-reverse">
                                    <div className="flex items-center gap-[10px] lg:mt-[0] mt-[15px]">
                                        <img src="" alt="" className='w-[40px] h-[40px] rounded-full bg-black' />
                                        <div className="grid ml-[px]">
                                            <h3 className='text-[16px] font-semibold whitespace-nowrap'>Hosted</h3>
                                            <p className='text-gray-600 lg:text-[16px] text-[13px]'>germany francy</p>
                                        </div>
                                    </div>
                                    <div className="">
                                        <p className='flex items-center font-semibold lg:text-[16px] text-[13px]  py-[8px] whitespace-nowrap'><span>  <Stack spacing={1}>
                                            <Rating name="size-small" defaultValue={2} size="small" />
                                        </Stack></span>· September 2023  </p>
                                        <h3 className='lg:text-[18px] text-[14px] leading-5'>This island is absolutely beautiful. Peaceful and enjoyable for outside activities like swimming or canoeing or just sitting by the lake. The house was an old fashioned country house, and</h3>
                                        <div className="">
                                            <button className='underline items-start font-bold pt-[10px]'>Show more</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-[320px] lg:w-[40%] py-[10px] lg:py-[20px] border-[1px] lg:border-none rounded-[20px] p-[15px] border-gray-300">
                                <div className="flex lg:flex-col flex-col-reverse">
                                    <div className="flex items-center gap-[10px] lg:mt-[0] mt-[15px]">
                                        <img src="" alt="" className='w-[40px] h-[40px] rounded-full bg-black' />
                                        <div className="grid ml-[px]">
                                            <h3 className='text-[16px] font-semibold whitespace-nowrap'>Hosted</h3>
                                            <p className='text-gray-600 lg:text-[16px] text-[13px]'>germany francy</p>
                                        </div>
                                    </div>
                                    <div className="">
                                        <p className='flex items-center font-semibold lg:text-[16px] text-[13px]  py-[8px] whitespace-nowrap'><span>  <Stack spacing={1}>
                                            <Rating name="size-small" defaultValue={2} size="small" />
                                        </Stack></span>· September 2023  </p>
                                        <h3 className='lg:text-[18px] text-[14px] leading-5'>This island is absolutely beautiful. Peaceful and enjoyable for outside activities like swimming or canoeing or just sitting by the lake. The house was an old fashioned country house, and</h3>
                                        <div className="">
                                            <button className='underline items-start font-bold pt-[10px]'>Show more</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-[320px] lg:w-[40%] py-[10px] lg:py-[20px] border-[1px] lg:border-none rounded-[20px] p-[15px] border-gray-300">
                                <div className="flex lg:flex-col flex-col-reverse">
                                    <div className="flex items-center gap-[10px] lg:mt-[0] mt-[15px]">
                                        <img src="" alt="" className='w-[40px] h-[40px] rounded-full bg-black' />
                                        <div className="grid ml-[px]">
                                            <h3 className='text-[16px] font-semibold whitespace-nowrap'>Hosted</h3>
                                            <p className='text-gray-600 lg:text-[16px] text-[13px]'>germany francy</p>
                                        </div>
                                    </div>
                                    <div className="">
                                        <p className='flex items-center font-semibold lg:text-[16px] text-[13px]  py-[8px] whitespace-nowrap'><span>  <Stack spacing={1}>
                                            <Rating name="size-small" defaultValue={2} size="small" />
                                        </Stack></span>· September 2023  </p>
                                        <h3 className='lg:text-[18px] text-[14px] leading-5'>This island is absolutely beautiful. Peaceful and enjoyable for outside activities like swimming or canoeing or just sitting by the lake. The house was an old fashioned country house, and</h3>
                                        <div className="">
                                            <button className='underline items-start font-bold pt-[10px]'>Show more</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-[320px] lg:w-[40%] py-[10px] lg:py-[20px] border-[1px] lg:border-none rounded-[20px] p-[15px] border-gray-300">
                                <div className="flex lg:flex-col flex-col-reverse">
                                    <div className="flex items-center gap-[10px] lg:mt-[0] mt-[15px]">
                                        <img src="" alt="" className='w-[40px] h-[40px] rounded-full bg-black' />
                                        <div className="grid ml-[px]">
                                            <h3 className='text-[16px] font-semibold whitespace-nowrap'>Hosted</h3>
                                            <p className='text-gray-600 lg:text-[16px] text-[13px]'>germany francy</p>
                                        </div>
                                    </div>
                                    <div className="">
                                        <p className='flex items-center font-semibold lg:text-[16px] text-[13px]  py-[8px] whitespace-nowrap'><span>  <Stack spacing={1}>
                                            <Rating name="size-small" defaultValue={2} size="small" />
                                        </Stack></span>· September 2023  </p>
                                        <h3 className='lg:text-[18px] text-[14px] leading-5'>This island is absolutely beautiful. Peaceful and enjoyable for outside activities like swimming or canoeing or just sitting by the lake. The house was an old fashioned country house, and</h3>
                                        <div className="">
                                            <button className='underline items-start font-bold pt-[10px]'>Show more</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="mt-[20px] w-full">
                            <button className='py-[10px] px-[15px] text-[18px] font-semibold border-[1px] border-black rounded-[10px] lg:w-auto w-full'>Show all 24 reviews</button>
                        </div>
                    </div>
                    <div className="border-b-[1px] border-gray-400 py-[30px] lg:block hidden">
                        <p className='text-[26px] font-semibold border-t-[1px] border-gray-300 pt-[30px]'>Where you’ll be</p>
                        <div className='py-[15px]'>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d95872.49292629753!2d69.2256768!3d41.3302784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1stoshkent!5e0!3m2!1suz!2s!4v1707561340134!5m2!1suz!2s" width="100%" height="500" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                        <div className="w-[100%]">
                            <div className="grid">
                                <p className='flex items-center text-[18px] py-[20px] font-semibold'> September 2023 ,Stayed about a week</p>
                                <h3 className='text-[18px] font-normal text-gray-500 pb-[10px]'>This island is absolutely beautiful. Peaceful and enjoyable for outside activities like swimming or canoeing or just sitting by the lake. The house was an old fashioned country house, and</h3>
                                <div className="">
                                    <button className='underline  flex font-semibold text-[18px] items-center'>Show more <span>{icons.arrovr}</span></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:flex border-t-[1px] border-gray-300 py-[30px] items-center">
                        <div className="grid w-[100%] lg:w-[50%] lg:gap-[20px]">
                            <div className="w-[90%]">
                                <div className="grid">
                                    <div className="flex items-center lg:gap-[20px]">
                                        <img src="" alt="" className='w-[60px] h-[60px] rounded-full bg-black' />
                                        <div className="grid ml-[20px]">
                                            <h3 className='lg:text-[20px] text-[18px] font-semibold'>Hosted by Per-Henrik</h3>
                                            <p className='text-gray-600'>5 years hosting</p>
                                        </div>
                                    </div>
                                    <div className="lg:flex grid items-center gap-[15px] text-[17px] py-[15px] font-normal">
                                        <p className='flex items-center gap-[15px]'><span>{icons.starmiddle}</span> September 2023</p>
                                        <p className='flex items-center gap-[15px]'><span>{icons.starmiddle}</span> September 2023</p>

                                    </div>
                                    <h3 className='text-gray-600 lg:text-[17px] text-[15px]'>This island is absolutely beautiful. Peaceful and enjoyable for outside activities like swimming or canoeing or just sitting by the lake. The house was an old fashioned country house, and<span className='font-semibold underline text-black ml-[10px]'>Show more</span></h3>
                                    <div className="lg:block hidden">
                                        <button className='underline items-start mt-[10px] font-semibold text-[17px]'>Show more</button>
                                    </div>
                                </div>
                            </div>
                            <div className="w-[90%]">
                                <div className="grid">
                                    <p className='flex items-center font-medium text-[17px] py-[10px]'>During</p>
                                    <div className="flex items-center gap-[20px]">
                                        <div className="flex items-center gap-[10px]">
                                            <img src="" alt="" className='w-[40px] h-[40px] rounded-full bg-black' />
                                            <h3 className='text-[16px] font-normal'>Hosted by</h3>
                                        </div>
                                        <div className="flex items-center gap-[10px]">
                                            <img src="" alt="" className='w-[40px] h-[40px] rounded-full bg-black' />
                                            <h3 className='text-[16px] font-normal'>Hosted by</h3>
                                        </div>

                                    </div>
                                    <p className='flex items-center font-medium lg:text-[18px] py-[10px]'>During your stay</p>
                                    <h3 className='text-gray-600 text-[15px] lg:text-[17px]'>This island is absolutely beautiful. Peaceful and enjoyable for outside activities like swimming or canoeing or just sitting by the lake. The house was an old fashioned country house, and <span className='font-semibold underline text-black ml-[10px]'>Show more</span></h3>
                                    <div className="lg:block hidden">
                                        <button className='underline items-start mt-[10px] font-semibold text-[17px]'>Show more</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-[50%] w-full lg:mt-0 mt-[20px]">
                            <p className='lg:text-[17px] text-[14px] whitespace-nowrap text-gray-700'>Languages: English, Deutsch, Svenska</p>
                            <p className='lg:text-[17px] text-[14px] text-gray-700 py-[15px] whitespace-nowrap'>Response rate: 100%</p>
                            <p className='lg:text-[17px] text-[14px] text-gray-700 whitespace-nowrap'>Response time: within a day</p>
                            <button className='border-[1px] border-black py-[10px] px-[15px] font-semibold rounded-xl my-[20px] lg:w-auto w-full'>Contact Host</button>
                            <div className="flex items-center lg:flex-row flex-row-reverse w-full">
                                <span>{icons.ico}</span>
                                <p className='text-[12px] font-normal leading-4 text-black lg:w-[50%] lg:ml-[20px]'>To protect your payment, never transfer money or communicate outside of the Airbnb website or app.</p>
                            </div>
                        </div>
                    </div>
                    <div className="grid border-t-[1px] border-gray-300 py-[30px]">
                        <h2 className='text-[22px] font-semibold py-[15px]'>Things to know</h2>
                        <div className="lg:flex">
                            <div className="w-full lg:m-0 mb-[15px] lg:w-1/3">
                                <h3 className='text-[18px] font-semibold'>House rules</h3>
                                <ul className='text-[17px] font-normal text-gray-600 gap-[10px] my-[15px] grid'>
                                    <li>Check-in after 3:00 PM</li>
                                    <li>Checkout before 12:00 PM</li>
                                    <li>10 guests maximum</li>
                                </ul>
                                <button className='flex items-center underline font-semibold text-[18px]'>Show more <span>{icons.arrovr}</span></button>
                            </div>
                            <div className="w-full lg:m-0 mb-[15px] lg:w-1/3">
                                <h3 className='text-[18px] font-semibold'>House rules</h3>
                                <ul className='text-[17px] font-normal text-gray-600 gap-[10px] my-[15px] grid'>
                                    <li>Check-in after 3:00 PM</li>
                                    <li>Checkout before 12:00 PM</li>
                                    <li>10 guests maximum</li>
                                </ul>
                                <button className='flex items-center underline font-semibold text-[18px]'>Show more <span>{icons.arrovr}</span></button>
                            </div>
                            <div className="w-full lg:m-0 mb-[15px] lg:w-1/3">
                                <h3 className='text-[18px] font-semibold'>House rules</h3>
                                <ul className='text-[17px] font-normal text-gray-600 gap-[10px] my-[15px] grid'>
                                    <li>Check-in after 3:00 PM</li>
                                    <li>Checkout before 12:00 PM</li>
                                    <li>10 guests maximum</li>
                                </ul>
                                <button className='flex items-center underline font-semibold text-[18px]'>Show more <span>{icons.arrovr}</span></button>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="bg-gray-100 lg:py-[40px]  border-t-[1px] border-gray-400">
                    <div className="flex items-start container w-full px-[15px]">
                        <div className="lg:flex border-b-[1px] border-gray-600 w-full">
                            <div className="grid w-full lg:w-1/3 items-start border-b-[1px] lg:border-none border-gray-300 lg:p-0 py-[10px]">
                                <h3 className='text-[16px] font-semibold'>Support</h3>
                                <ul className='grid text-[15px] gap-[10px] my-[15px]'>
                                    <li>Help Center</li>
                                    <li>Get help with a safety issue</li>
                                    <li>AirCover</li>
                                    <li>Anti-discrimination</li>
                                    <li>Disability support</li>
                                    <li>Cancellation options</li>
                                    <li>Report neighborhood concern</li>
                                </ul>
                            </div>
                            <div className="grid w-full lg:w-1/3 items-start border-b-[1px] lg:border-none border-gray-300 lg:p-0 py-[10px]">
                                <h3 className='text-[16px] font-semibold'>Support</h3>
                                <ul className='grid text-[15px] gap-[10px] my-[15px]'>
                                    <li>Help Center</li>
                                    <li>Get help with a safety issue</li>
                                    <li>AirCover</li>
                                    <li>Anti-discrimination</li>
                                    <li>Disability support</li>
                                    <li>Cancellation options</li>
                                </ul>
                            </div>
                            <div className="grid w-full lg:w-1/3 items-start lg:p-0 py-[10px]">
                                <h3 className='text-[16px] font-semibold'>Support</h3>
                                <ul className='grid text-[15px] gap-[10px] my-[15px]'>
                                    <li>Help Center</li>
                                    <li>Get help with a safety issue</li>
                                    <li>AirCover</li>
                                    <li>Anti-discrimination</li>
                                    <li>Disability support</li>
                                    <li>Cancellation options</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            <div className="lg:hidden block">
                <div className='bg-gray-100 px-[10px] lg:px-[50px] z-40 border-t-[1px] border-gray-400 mb-[50px]'>
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
            </div>

            <div className="fixed bottom-0 w-full bg-white py-[10px] border-y-[1px] border-gray-300  lg:hidden block px-[15px]">
                <div className="flex items-center justify-between w-full">
                    <div className="grid">
                        <h2 className='text-[16px] text-black font-semibold'>$206 <span className='text-[13px] text-gray-700'> night</span></h2>
                        <h3 className='underline text-black text-[13px] font-semibold'>Sep 9-14</h3>
                    </div>
                    <button className='text-[16px] text-white font-semibold bg-[#FF385C] py-[10px] px-[40px] rounded-[15px]'>Reverse</button>
                </div>
            </div>
        </>
    )
}
