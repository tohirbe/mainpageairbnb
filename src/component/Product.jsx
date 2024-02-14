import React, { useContext, useEffect, useState } from 'react'
import rasm1 from '../assets/img/11.webp'
import rasm2 from '../assets/img/12.webp'
import rasm3 from '../assets/img/13.webp'
import rasm4 from '../assets/img/14.webp'
import { icons } from '../utilits/icons'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Contexts } from '../context/Context'

export default function Product() {
    const { islogin, setislogin, scrolled, setScrolled, product, setproduct, catagoryid, setcatagoryid } = useContext(Contexts)
    const [toggle, settoggle] = useState(false)
    const [footer, setfooter] = useState(false);
    const swich = () => {
        settoggle(!toggle);
    };
    const handlefooter = (index) => {
        setfooter(index)
    }
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [rasm1, rasm2, rasm3, rasm4, rasm1, rasm2, rasm3,];

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));

    };
    const prevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));

    };
    const [isHovered, setIsHovered] = useState(false);
    const [like, setlike] = useState(false);


    const [activemap, setActivemap] = useState(false);
    const [activefooter, setActivefooter] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const scrollPos = window.scrollY;
            if (scrollPos >= 730) {
                setActivefooter(false);
                setActivemap(true)
            } else {
                setActivefooter(true)
                setActivemap(false)
            }

        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://81.200.149.8:8080/product/product/');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setproduct(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchData();
    }, []);

    console.log(product);
    return (
        <>
            <div className={scrolled ? 'lg:px-[50px] px-[15px] mt-[210px]' : 'lg:px-[50px] px-[15px]'}>
                <div className="py-[20px] flex flex-wrap justify-center lg:justify-between gap-[20px] mt-[20px]">
                    {product.map((element, value) => (
                        <div className="py-[10px]" key={value}>
                            <Swiper
                                spaceBetween={50}
                                slidesPerView={1}
                                className='h-[321px] max-w-[320px]'
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
                                <button className="swiper-button-prev lg:block hidden"></button>
                                <button className="swiper-button-next lg:block hidden"></button>
                                <SwiperSlide>
                                    <div className="lg:w-full  h-[321px] rounded-lg bg-no-repeat bg-center" style={{ backgroundImage: `url(${element.images})` }}

                                    >
                                        <div className="flex items-center justify-between p-[10px]">
                                            <button className='py-[5px] px-[10px] text-[16px] font-semibold bg-white rounded-[20px]'>Guest favorite</button>
                                            <button onClick={() => setlike(!like)} className='self-end'>{like ? <span>{icons.likered}</span> : <span>{icons.likeb}</span>}</button>

                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                            <div className=" mt-[10px] grid gap-[2px]">
                                <h2 className='text-[16px] font-semibold'>{element.name}</h2>
                                <h3 className='text-[16px] text-gray-600'>{element.price}</h3>
                                <p className='text-[16px] text-gray-600'>4.083 kilometrs away</p>
                                <h4 className='text-[16px] text-gray-600'><span className='text-black font'>{element.price}</span> month</h4>
                            </div>
                        </div>
                    ))}
                </div>
            </div >
            {activemap && <div className="fixed top-[80%] left-[50%] translate-x-[-50%] z-20">
                <Link to={'/showmap'} className='flex items-center gap-[10px] lg:text-[18px] text-[12px] text-white bg-black px-[20px] py-[10px] rounded-[20px]'><span className='lg:block hidden'>Show</span> Map <span>{icons.map}</span></Link>
            </div>}
            <div className=" lg:hidden block">
                {activefooter && <div className=" fixed bottom-0 py-[10px] border-t-[1px] border-gray-300 flex justify-center bg-white w-full z-30">
                    <div className="flex gap-[30px] text-center items-center">
                        <div onClick={() => handlefooter(0)} className={footer === 0 ? 'grid text-red-500' : 'grid'}>
                            <span className='fa fa-search'></span>
                            <p className='text-[12px]'>Explore</p>
                        </div>
                        <div onClick={() => handlefooter(1)} className={footer === 1 ? 'grid text-red-500' : 'grid'}>
                            <span className='fa fa-heart'></span>
                            <p className='text-[12px]'>Wishlists</p>
                        </div>
                        <div className="">
                            <div onClick={() => handlefooter(2)} className={footer === 2 ? 'grid text-red-500' : 'grid'}>
                                <span onClick={() => setislogin(true)} className='fa fa-user'></span>
                                <p className='text-[12px]'>Log in</p>
                            </div>
                        </div>
                    </div>
                </div>}
            </div>
        </>
    )
}
