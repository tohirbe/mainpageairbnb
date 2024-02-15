import React, { useContext, useEffect, useState } from 'react'
import { icons } from '../utilits/icons';
import rasm from '../assets/img/1.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Contexts } from '../context/Context';

export default function Category() {

    const { filter, setfilter, scrolled, setScrolled, product, setproduct, catagoryid, setcatagoryid } = useContext(Contexts)
    const [isAtStart, setIsAtStart] = useState(true);
    const [isAtEnd, setIsAtEnd] = useState(false);
    const [activeclas, setActiveclas] = useState(0);
    const [toggle, settoggle] = useState(false)
    localStorage.setItem("ctg_id", catagoryid)
    const swich = () => {
        settoggle(!toggle);
    };
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://81.200.149.8:8080/categories/category_user/');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setCategories(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);
    // console.log(categories);
    const handleCategoryClick = (index) => {
        console.log('Bosilgan kategoriyani ID-si:', index);
        // Bu yerda o'zingiz istagan logika yoki operatsiyalarni bajarishingiz mumkin
    }
    console.log(catagoryid);
    // useEffect(() => {
    //     const slider = document.querySelector('.slider');
    //     const handleScroll = () => {
    //         setIsAtStart(slider.scrollLeft === 0);
    //         setIsAtEnd(slider.scrollLeft + slider.clientWidth >= slider.scrollWidth);
    //         if (document.activeElement !== document.body) {
    //             document.activeElement.blur();
    //         }
    //     };
    //     slider.addEventListener('scroll', handleScroll);
    //     handleScroll();
    //     return () => {
    //         slider.removeEventListener('scroll', handleScroll);
    //     };
    // }, []);
    // const scrollLeft = () => {
    //     document.querySelector('.slider').scrollBy({
    //         left: -150,
    //         behavior: 'smooth'
    //     });
    // };

    // const scrollRight = () => {
    //     document.querySelector('.slider').scrollBy({
    //         left: 150,
    //         behavior: 'smooth'
    //     });
    // };

    const handleactiveclas = (index) => {
        setActiveclas(index)
    }
    return (
        <div className={scrolled ? 'lg:px-[50px] px-[15px] w-full z-30 bg-white shadow-xl fixed top-[80px]' : 'lg:px-[50px] px-[15px] mt-[90px] lg:mt-[175px]'}>
            <div className="lg:flex lg:border-t-[1px] border-gray-300 py-[10px] lg:py-[20px] justify-between">
                <div className="lg:w-[70%] w-full lg:flex items-center gap-[20px]">
                    <div className="lg:block hidden w-full">
                        <Swiper
                            spaceBetween={40}
                            slidesPerView={10}
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

                            {categories.map((element, value) => (
                                <SwiperSlide>
                                    <li key={value} onClick={() => handleactiveclas()} className={activeclas === 0 ? 'text-black font-medium opacity-100 flex-col text-center items-center border-b-[3px] border-black pb-[10px] text-[14px]' : 'text-[14px] hover:outline-none text-gray-700 flex-col text-center items-center opacity-60 hover:opacity-100 hover:font-medium pb-[5px] hover:border-b-[3px] border-gray-400'}>
                                        <div onClick={() => setcatagoryid(element.id)} className="grid">
                                            <img src={element.image} alt="" className='w-[30px] m-auto' />
                                            <p>{element.title}</p>
                                        </div>
                                    </li>
                                </SwiperSlide>
                            ))}

                        </Swiper>
                    </div>
                </div>

                <div className="lg:hidden block">
                    <Swiper
                        spaceBetween={35}
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
                        {categories.map((element, value) => (
                            <SwiperSlide>
                                <li key={value} onClick={() => handleactiveclas()} className={activeclas === 0 ? 'text-black font-medium opacity-100 flex-col text-center items-center border-b-[3px] border-black pb-[10px] text-[14px]' : 'text-[14px] hover:outline-none text-gray-700 flex-col text-center items-center opacity-60 hover:opacity-100 hover:font-medium pb-[5px] hover:border-b-[3px] border-gray-400'}>
                                    <div onClick={() => setcatagoryid(element.id)} className="grid">
                                        <img src={element.image} alt="" className='w-[30px] m-auto' />
                                        <p>{element.title}</p>
                                    </div>
                                </li>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className="lg:w-[29%] w-full flex items-center lg:gap-[20px]">
                    <div className=" lg:block hidden">
                        <button onClick={() => setfilter(true)} className='flex items-center border-[1px] rounded-[10px] p-3 font-semibold text-[14px] px-[20px]'><span className='mr-[10px] rotate-[-90deg]'>{icons.filter}</span> Filters</button>
                    </div>
                    <button className=' whitespace-nowrap border-[1px] rounded-[10px] w-full p-3 flex items-center justify-between font-semibold text-[14px] lg:mt-[0] mt-[20px]'>Display total before taxes
                        <div className="flex justify-center items-center ml-[10px]">
                            <label htmlFor="toggle" className="flex items-center cursor-pointer">
                                <div className="relative w-full">
                                    <input
                                        type="checkbox"
                                        id="toggle"
                                        className="hidden"
                                        checked={toggle}
                                        onChange={swich}

                                    />
                                    <div className={`w-[40px] h-[24px] bg-gray-400 rounded-full shadow-inner ${toggle ? 'bg-gray-800' : ''}`}></div>
                                    <div className={`absolute w-5 h-5 bg-white rounded-full top-[50%] justify-center translate-y-[-50%] shadow inset-y-0 left-[1px] ${toggle ? 'transform translate-x-[16px]' : ''}`}>{toggle ? icons.true : null}</div>
                                </div>
                            </label>
                        </div></button>
                </div>

            </div>
        </div >
    )
}
