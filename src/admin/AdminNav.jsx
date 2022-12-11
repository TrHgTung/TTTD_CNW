import React from 'react'
import { Container, Row } from 'reactstrap'
import useAuth from '../custom-hooks/useAuth'
import '../styles/admin-nav.css';
import AdminIcon from '../assets/images/admin-icon.png'
import { NavLink } from 'react-router-dom';

const admin__nav = [
    {
        display: 'Bảng điều khiển', /* display: 'Dashboard' */
        path: '/dashboard'
    },
    {
        display: 'Sản phẩm', /* display: 'All-Products' */
        path: '/dashboard/all-products'
    },
    {
        display: 'Đơn hàng', /* display: 'Orders' */
        path: '/dashboard/orders'
    },
    {
        display: 'Khách hàng', /* display: 'Users' */
        path: '/dashboard/users'
    },
]
const AdminNav = () => {

    const { currentUser } = useAuth()

    return (
        <>
            <header className='admin__header'>
                <div className="admin__nav-top">
                    <Container>
                        <div className='admin__nav-wrapper-top'>
                            <div className="logo">
                                <h2>TTTD Shop&copy;</h2>
                            </div>

                            <div className="search__box">
                                <input type="text" placeholder='Tìm kiếm..' />
                                <span><i class="ri-search-2-line"></i></span>
                            </div>
                            <div className="admin__nav-top-right">
                                <span><i class="ri-notification-3-fill"></i></span>
                                <span><i class="ri-tools-fill"></i></span>
                                <img src={AdminIcon} alt="" />
                            </div>
                        </div>
                    </Container>
                </div>
            </header>

            <section className='admin__menu p-0'>
                <Container>
                    <Row>
                        <div className="admin__navigation">
                            <ul className="admin__menu-list">
                                {
                                    admin__nav.map((item, index) => (
                                        <li className="admin__menu-item" key={index}>
                                            <NavLink to={item.path} className={navClass => navClass.isActive ? 'active__admin-menu' : ''}>
                                                {item.display}
                                            </NavLink>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default AdminNav