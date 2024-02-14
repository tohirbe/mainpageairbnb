import React, { useContext } from 'react'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangeCalendar } from '@mui/x-date-pickers-pro/DateRangeCalendar';
import { Contexts } from '../context/Context';
export default function Modalcalendar() {
    const { setmodalcalendar } = useContext(Contexts)
    return (
        <div className='fixed top-[50%] left-[50%] translate-x-[-50%] w-[100vh] h-[80vh] translate-y-[-50%] p-[20px] bg-white rounded-[20px]   shadow-2xl z-50'>
            <button onClick={() => setmodalcalendar(false)} className='py-[5px] px-[11px] hover:bg-gray-200 rounded-full'><i className='fa fa-close'></i></button>
            <div className="p-[15px]">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DateRangeCalendar']}>
                        <DateRangeCalendar />
                    </DemoContainer>
                </LocalizationProvider>
            </div>
        </div>
    )
}
