import React, { useContext, useState } from 'react'
import { icons } from '../utilits/icons'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import { Link } from 'react-router-dom'
import { Contexts } from '../context/Context'
import { useGoogleLogin } from "@react-oauth/google";
import { GoogleLogin } from '@react-oauth/google';
export default function Login() {
    const [value, setValue] = useState()
    const { islogin, setislogin } = useContext(Contexts)
    const googleLogin = useGoogleLogin({
        onSuccess: (codeResponse) => {
            fetch('http://81.200.149.8:8080/auth/google/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    auth_token: codeResponse.credential
                })
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('xatolik');
                    }
                    return response.json();
                })
                .then(data => {
                    console.log(' zor:', data);
                })
                .catch(error => {
                    console.error(' error:', error);
                });
            // console.log(codeResponse);
        },

    });
    return (
        <div className="">
            {islogin && <div className='fixed lg:top-[50%] lg:left-[50%] top-0 lg:translate-x-[-50%] lg:translate-y-[-50%] bg-white rounded-[20px] p-[10px] h-full lg:lg:p-[20px] h-[90vh] shadow-2xl overflow-y-scroll z-50'>
                <div className="flex items-center pb-[10px] border-b-[1px] border-gray-300">
                    <div className="w-[30%]">
                        <button onClick={() => setislogin(false)} className=''><i className='fa fa-close'></i></button>
                    </div>
                    <div className="w-[70%]">
                        <p className='lg:text-[22px] text-[18px] font-semibold'>Log in or Sign up</p>
                    </div>
                </div>
                <h3 className='text-[26px] font-semibold py-[20px]'>Welcome to Airbnb</h3>
                <PhoneInput
                    placeholder="Enter phone number"
                    value={value}
                    style={{ width: '100%', height: '50px', border: 'solid 1px ', borderRadius: '10px', paddingLeft: '15px' }}
                    onChange={setValue} />
                <p className='text-[12px] mt-[10px]'>We’ll call or text you to confirm your number. Standard message and data rates apply. <br /> <span className='underline'> Privacy Policy</span></p>
                <button className='py-[15px] rounded-[15px] bg-[#FF385C] text-[20px] text-white font-bold w-full my-[20px]'>Continue</button>
                <div className="flex items-center justify-between">
                    <span className='h-[1px] w-[45%] bg-gray-400'></span>
                    <h3 className='text-center text-[14px] text-gray-500'>or</h3>
                    <span className='h-[1px] w-[45%] bg-gray-400'></span>
                </div>
                <div className="grid gap-[20px] mt-[20px]">
                    <div className="flex w-full border-[1px] justify-center border-black relative cursor-pointer py-[14px] rounded-[10px] px-[20px]">
                        <span className='absolute top-[50%] translate-y-[-50%] left-[20px]'><i className='fa-brands fa-facebook'></i></span>
                        <h3 className='text-center font-semibold text-[18px]'>Continue with Facebook</h3>
                    </div>
                    <div className="flex w-full border-[1px] justify-center border-black relative cursor-pointer py-[14px] rounded-[10px] px-[20px]">
                        {/* <span className='absolute top-[50%] translate-y-[-50%] left-[20px]'><i className='fa-brands fa-google'></i></span>
                        <h3 className='text-center font-semibold text-[18px]'>Continue with Google</h3> */}
                        <GoogleLogin
                            onSuccess={credentialResponse => {
                                googleLogin(credentialResponse);
                            }}                                                
                            onError={() => {
                                console.log('Login Failed');
                            }}
                        />
                    </div>
                    <div className="flex w-full border-[1px] justify-center border-black relative cursor-pointer py-[14px] rounded-[10px] px-[20px]">
                        <span className='absolute top-[50%] translate-y-[-50%] left-[20px]'><i className='fa-brands fa-apple'></i></span>
                        <h3 className='text-center font-semibold text-[18px]'>Continue with Apple</h3>
                    </div>
                    <div className="flex w-full border-[1px] justify-center border-black relative cursor-pointer py-[14px] rounded-[10px] px-[20px]">
                        <span className='absolute top-[50%] translate-y-[-50%] left-[20px]'><i className='fa-brands fa-email'></i></span>
                        <h3 className='text-center font-semibold text-[18px]'>Continue with Email</h3>
                    </div>
                </div>
            </div>}
        </div>
    )
}
