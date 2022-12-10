import React from 'react'
import '../styles/about.css'

const About = () => {
    return (
        <>
            <div className='about__title text-center fw-600'>Giới thiệu về chúng tôi</div>
            <div className="description__about">
                Team TTTD&copy; gồm các thành viên: Hoàng Tùng, Trịnh Thành, Đức Toàn và Quốc Đạt; cùng nhau xây dựng một trang web bán các sản phẩm về sách giấy một cách trực tuyến, nhằm thay đổi thói quen mua sắm của người tiêu dùng.
            </div>

            <div className="short__description">
                Bản quyền thuộc về TTTD&copy; - 2022
            </div>
        </>

    )
}

export default About