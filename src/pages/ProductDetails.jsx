import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { useParams } from 'react-router-dom'
import products from '../assets/data/products'
import '../styles/product-details.css'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection'
import products from '../assets/data/products'

const ProductDetails = () => {
    const { id } = useParams()
    const product = products.find((item) => item.id === id)

    const { imgUrl, price, productName, avgRating, review, description, shortDesc } = product;

    return (
        <Helmet>
            <CommonSection />

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
                                <button className='buy__btn'>
                                    Thêm vào Giỏ hàng
                                </button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    )
}

export default ProductDetails