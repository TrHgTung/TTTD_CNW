import React, { useRef, useEffect } from 'react'
import { NavLink, useNavigate, Link } from 'react-router-dom'
import './header.css'
import logo from '../../assets/images/eco-logo.png'
import userIcon from '../../assets/images/user-icon.png'
import { Container, Row } from 'reactstrap'
import { useSelector } from 'react-redux'
import { motion } from 'framer-motion'
import useAuth from '../../custom-hooks/useAuth'
import { signOut } from 'firebase/auth'
import { auth } from '../../firebase.config'
import { toast } from 'react-toastify'

const nav__links = [
    {
        path: 'home',
        display: 'Home'
    },
    {
        path: 'shop',
        display: 'Shop'
    },
    {
        path: 'cart',
        display: 'Cart'
    },
    {
        path: 'about',
        display: 'About'
    },
]

const Header = () => {
    const menuRef = useRef(null)
    const headerRef = useRef(null)
    const profileActionRef = useRef(null)
    const totalQuantity = useSelector(state => state.cart.totalQuantity)
    const navigate = useNavigate()
    const { currentUser } = useAuth()

    const stickyHeaderFunc = () => {
        window.addEventListener('scroll', () => {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                headerRef.current.classList.add('sticky__header')
            } else {
                headerRef.current.classList.remove('sticky__header')
            }
        })
    }

    const logout = () => {
        signOut(auth).then(() => {
            toast.success('Đã đăng xuất. Hẹn bạn lần sau')
            navigate('/home')
        }).catch(err => {
            toast.error(err.message)
        })
    }

    useEffect(() => {
        stickyHeaderFunc()

        return () => window.removeEventListener('scroll', stickyHeaderFunc)
    });

    const menuToggle = () => menuRef.current.classList.toggle('active__menu')
    const navigateToCart = () => {
        navigate('/cart');
    };

    const toggleProfileActions = () => profileActionRef.current.classList.toggle('show__profileActions')

    return (
        <header className="header" ref={headerRef}>
            <Container>
                <Row>
                    <div className="nav__wrapper">
                        <div className="logo">
                            <img src={logo} alt="Logo" />
                            <div>
                                <h1>Cửa hàng TTTD</h1>
                                <p>TTTD&copy;</p>
                            </div>
                        </div>
                        <div className="navigation" ref={menuRef} onClick={menuToggle}>
                            <ul className="menu">
                                {/* <li className="nav__item">
                                    <NavLink to='home'>Home</NavLink>
                                </li>
                                <li className="nav__item">
                                    <NavLink to='home'>Shop</NavLink>
                                </li>
                                <li className="nav__item">
                                    <NavLink to='home'>Cart</NavLink>
                                </li>
                                <li className="nav__item">
                                    <NavLink to='home'>About</NavLink>
                                </li> */}
                                {
                                    nav__links.map((item, index) => (
                                        <li className="nav__item" key={index}>
                                            <NavLink to={item.path} className={(navClass) => navClass.isActive ? 'nav__active' : ''}>{item.display}</NavLink>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className="nav__icons">
                            <span className='fav__icon'><i class="ri-heart-fill"></i>
                                <span className='badge'>{totalQuantity}</span>
                            </span>
                            <span className='cart__icon' onClick={navigateToCart}><i class="ri-briefcase-4-fill"></i>
                                <span className='badge'>{totalQuantity}</span>
                            </span>
                            <div className='profile'>
                                <motion.img whileTap={{ scale: 1.2 }} src={currentUser ? userIcon : userIcon} onClick={toggleProfileActions} />

                                <div className="profile__actions" ref={profileActionRef} onClick={toggleProfileActions}>
                                    {
                                        currentUser ? (<span onClick={logout}>Đăng xuất</span>) :
                                            (<div className='d-flex align-items-center justify-content-center flex-column'>
                                                <Link to='/signup'>Đăng ký</Link>
                                                <Link to='/login'>Đăng nhập</Link>
                                            </div>)
                                    }
                                </div>
                            </div>

                            <div className='mobile__menu'>
                                <span onClick={menuToggle}><i class="ri-menu-line"></i></span>
                            </div>
                        </div>


                    </div>
                </Row>
            </Container>
        </header>
    )
}

export default Header