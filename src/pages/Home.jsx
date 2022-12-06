import React from 'react'
import Helmet from '../components/Helmet/Helmet'
import { Container, Row, Col } from 'reactstrap'
import heroImg from '../assets/images/hero-img.png'
import '../styles/home.css'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Home = () => {
    const year = new Date().getFullYear()
    return (
        <Helmet title={' - Trang chủ'}>
            <section className="hero_section">
                <Container>
                    <Row>
                        <Col lg='6' md='6'>
                            <div className="hero__content">
                                <p className="hero__subtitle">Bán Chạy Nhất {year}</p>
                                <h2>Chúng tôi luôn đem đến cho bạn niềm vui mua sắm</h2>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur voluptates id quisquam hic aut praesentium itaque nam quis facere maxime.</p>
                                <motion.button whileTap={{ scale: 1.2 }} className="buy__btn"><Link to='shop'>MUA NGAY</Link></motion.button>
                            </div>
                        </Col>
                        <Col lg='6' md='6'>
                            <div className="hero__img">
                                <img src={heroImg} alt="" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    )
}

export default Home