import React, { useState, useEffect } from 'react'

const Clock = () => {
    const [days, setDays] = useState()
    const [hours, setHours] = useState()
    const [mins, setMins] = useState()
    const [secs, setSecs] = useState()

    let interval;

    const countDown = () => {
        const destination = new Date('Dec 25, 2022').getTime()
        interval = setInterval(() => {
            const now = new Date().getTime()
            const different = destination - now
            const days = Math.floor(different / (1000 * 60 * 60 * 24))

            const hours = Math.floor(different % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))

            const mins = Math.floor(different % (1000 * 60 * 60) / (1000 * 60))

            const secs = Math.floor(different % (1000 * 60) / (1000 * 1))

            if (destination < 0) clearInterval(interval.current)
            else {
                setDays(days)
                setHours(hours)
                setMins(mins)
                setSecs(secs)
            }
        })
    }

    useEffect(() => {
        countDown()
    })

    return (
        <div className="clock__wrapper d-flex align-items-center gap-5">
            <div className="clock__data d-flex align-items-center gap-5">
                <div className='text-center'>
                    <h1 className='text-white fs-1'>{days}</h1>
                    <h5 className='text-white fs-5'>Ngày</h5>
                </div>
                <span className='text-white fs-1'>:</span>
            </div>

            <div className="clock__data d-flex align-items-center gap-5">
                <div className='text-center'>
                    <h1 className='text-white fs-1'>{hours}</h1>
                    <h5 className='text-white fs-5'>Giờ</h5>
                </div>
                <span className='text-white fs-1'>:</span>
            </div>

            <div className="clock__data d-flex align-items-center gap-5">
                <div className='text-center'>
                    <h1 className='text-white fs-1'>{mins}</h1>
                    <h5 className='text-white fs-5'>Phút</h5>
                </div>
                <span className='text-white fs-1'>:</span>
            </div>

            <div className="clock__data d-flex align-items-center gap-5">
                <div className='text-center'>
                    <h1 className='text-white fs-1'>{secs}</h1>
                    <h5 className='text-white fs-5'>Giây</h5>
                </div>

            </div>
        </div>
    )
}

export default Clock