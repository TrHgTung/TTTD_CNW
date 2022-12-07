import React, { useState, useEffect } from 'react'
import Helmet from '../components/Helmet/Helmet'
import { Container, Row, Col } from 'reactstrap'
import heroImg from '../assets/images/hero-img.png'
import '../styles/home.css'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Services from '../services/Services'
import ProductsList from '../components/UI/ProductsList'
import products from '../assets/data/products'
import counterImg from '../assets/images/counter-timer-img.png'
import Clock from '../components/UI/Clock'

const Home = () => {
    const year = new Date().getFullYear();

    const [trendingProducts, setTrendingProducts] = useState([]);
    const [bestSalesProducts, setBestSalesProducts] = useState([]);
    const [mobileProducts, setMobileProducts] = useState([]);
    const [wirelessProducts, setWirelessProducts] = useState([]);
    const [popularProducts, setPopularProducts] = useState([]);

    useEffect(() => {
        const filteredTrendingProducts = products.filter((item) => item.category === 'Sách giáo khoa - Toán học');
        const filteredBestSalesProducts = products.filter((item) => item.category === 'Sách giáo khoa - Văn học');
        const filteredMobileProducts = products.filter((item) => item.category === 'Sách nâng cao - Toán học');
        const filteredWirelessProducts = products.filter((item) => item.category === 'Giáo dục đại học');
        const filteredPopularProducts = products.filter((item) => item.category === 'Truyện tranh');

        setTrendingProducts(filteredTrendingProducts);
        setBestSalesProducts(filteredBestSalesProducts);
        setMobileProducts(filteredMobileProducts);
        setWirelessProducts(filteredWirelessProducts);
        setPopularProducts(filteredPopularProducts);
    }, []);

    return (
        <Helmet title={' - Trang chủ'}>
            <section className="hero_section">
                <Container>
                    <Row>
                        <Col lg='6' md='6'>
                            <div className="hero__content">
                                <p className="hero__subtitle">Được Tin Dùng Nhất {year}</p>
                                <h2>Chúng tôi luôn đem đến cho bạn niềm vui với tri thức</h2>
                                <p><b>Bạn có biết: </b>Khi mua sách tại <i>TTTD Shop</i> &copy; , có hai thứ bạn nhận được là kiến thức và sự hài lòng khi sử dụng dịch vụ!</p>
                                <motion.button whileTap={{ scale: 1.2 }} className="buy__btn"><Link to='shop'>KHÁM PHÁ NGAY</Link></motion.button>
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
            <Services />
            <section className="trending__products">
                <Container>
                    <Row>
                        <Col lg='12' className='text-center'>
                            <h2 className='section__title'>Sản Phẩm Khuyến Mãi Khủng</h2>
                        </Col>
                        <ProductsList data={trendingProducts} />
                    </Row>
                </Container>
            </section>
            <section className="best__sales">
                <Container>
                    <Row>
                        <Col lg='12' className='text-center'>
                            <h2 className='section__title'>Sản Phẩm Bán Chạy</h2>
                        </Col>
                        <ProductsList data={bestSalesProducts} />
                    </Row>
                </Container>
            </section>
            <section className="timer__count">
                <Container>
                    <Row>
                        <Col lg='6' md='6'>
                            <div className="clock__top-content">
                                <h5>Bùng nổ Khuyến mãi</h5>
                                <h3>Giáng Sinh 2022</h3>
                                <h2><b>Còn</b> </h2>
                            </div>
                            <Clock />
                            <motion.button whileTap={{ scale: 1.1 }} className="buy__btn store__btn">
                                <Link to='/shop'>Ghé qua shop</Link>
                            </motion.button>
                        </Col>
                        <Col lg='6' md='6' className='text-end'>
                            <img src={counterImg} alt="" />
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="new__arrivals">
                <Container>
                    <Row>
                        <Col lg='12' className='text-center'>
                            <h2 className="section__title">Hàng Mới</h2>
                        </Col>
                        <ProductsList data={mobileProducts} />
                        <ProductsList data={wirelessProducts} />
                    </Row>
                </Container>
            </section>

            <section className="popular__category">
                <Container>
                    <Row>
                        <Col lg='12' className='text-center'>
                            <h2 className="section__title">Phổ Biến Nhất</h2>
                        </Col>
                        <ProductsList data={popularProducts} />
                    </Row>
                </Container>
            </section>

        </Helmet>
    )
}

export default Home