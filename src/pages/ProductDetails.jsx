import React, { useState } from 'react'
import { Container, Row, Col } from 'reactstrap'
import { useParams } from 'react-router-dom'
import products from '../assets/data/products'
import '../styles/product-details.css'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection'
import products from '../assets/data/products'
import { motion } from 'framer-motion'

const ProductDetails = () => {

    const [tab, setTab] = useState('desc')

    const { id } = useParams()
    const product = products.find((item) => item.id === id)

    const { imgUrl, price, productName, avgRating, reviews, description, shortDesc } = product;

    return (
        <Helmet title={productName}>
            <CommonSection title={productName} />

            <section className='pt-0'>
                <Container>
                    <Row>
                        <Col lg='6'>
                            <img src={imgUrl} alt="" />
                        </Col>
                        <Col lg='6'>
                            <div className="product__details">
                                <h2>{productName}</h2>
                                <div className="product__rating d-flex align-items-center gap-5 mb-3">
                                    <div>
                                        <span><i class="ri-star-fill"></i></span>
                                        <span><i class="ri-star-fill"></i></span>
                                        <span><i class="ri-star-fill"></i></span>
                                        <span><i class="ri-star-half-line"></i></span>
                                        <span><i class="ri-star-line"></i></span>
                                    </div>
                                    <p>(<span>{avgRating}</span> sao đánh giá.)</p>
                                </div>
                                <span className='product__price'>{price} VND.</span>
                                <p className='mt-3'>{shortDesc}</p>
                                <motion.button whileTap={{ scale: 1.2 }} className='buy__btn'>
                                    Thêm vào Giỏ hàng
                                </motion.button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section>
                <Container>
                    <Row>
                        <Col lg='12' >
                            <div className="tab__wrapper d-flex align-items-center gap-5">
                                <h6 className={`${tab === 'desc' ? 'active__tab' : ''}`} onClick={() => setTab('desc')}>Chi tiết sản phẩm</h6>
                                <h6 className={`${tab === 'rev' ? 'active__tab' : ''}`} onClick={() => setTab('rev')}>Đánh giá ({reviews.length})</h6>
                            </div>

                            {
                                tab === 'desc' ? (<div className="tab__content mt-5">
                                    <p>{description}</p>
                                </div>)
                                    : (<div className='product__review mt-5'>
                                        <div className="review__wrapper">
                                            <ul>
                                                {
                                                    reviews?.map((item, index) => (
                                                        <li kew={index} className='mb-4'>

                                                            <h6>
                                                                Đức Toàn (User)
                                                            </h6>
                                                            <span>{item.rating} sao</span>
                                                            <p>{item.text}</p>
                                                        </li>
                                                    ))
                                                }
                                            </ul>

                                            <div className="review__form">
                                                <h4>Để lại đánh giá (Feedback)</h4>
                                                <form action="">
                                                    <div className="form__group">
                                                        <input type="text" placeholder='Enter name' />
                                                    </div>

                                                    <div className="form__group">
                                                        <span>1 <i class="ri-star-s-fill"></i></span>
                                                        <span>2 <i class="ri-star-s-fill"></i></span>
                                                        <span>3 <i class="ri-star-s-fill"></i></span>
                                                        <span>4 <i class="ri-star-s-fill"></i></span>
                                                        <span>5 <i class="ri-star-s-fill"></i></span>
                                                    </div>

                                                    <div className="form__group">
                                                        <textarea rows={4} type="text" placeholder='Review Message..' />
                                                    </div>

                                                </form>
                                            </div>
                                        </div>
                                    </div>)
                            }

                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    )
}

export default ProductDetails