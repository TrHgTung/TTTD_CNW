import React from 'react'
import { Container } from 'reactstrap'
// import {Avatar} from '../assets/images/admin-icon.png'
import '../styles/about.css'

const About = () => {
    return (
        <>
            <div className='about__title text-center fw-600 mt-300'>Giới thiệu về chúng tôi</div>
            <Container>
                <div className="description__about">
                    Team TTTD&copy; gồm các thành viên: Hoàng Tùng, Trịnh Thành, Đức Toàn và Quốc Đạt; cùng nhau xây dựng một trang web bán các sản phẩm về sách giấy một cách trực tuyến, nhằm thay đổi thói quen mua sắm của người tiêu dùng.
                </div>
            </Container>

            <Container>

                {/* Ngày mai thêm ảnh avatarr của bạn Thành vô khối này là đẹp =))) đúng kh Thành  Máy mạnh dã man =)) thôi */}
            </Container>

            <Container>
                {/* <Avatar></Avatar> */
                }
                <div className="short__description">
                    Bản quyền thuộc về <b>TTTD&copy; Team</b> - <i>2022</i>
                </div>
            </Container>


        </>

    )
}

export default About