import React, { useState, useEffect, useRef } from 'react'
import { Container, Row, Col } from 'reactstrap'
import { useParams } from 'react-router-dom'
import products from '../assets/data/products'
import '../styles/product-details.css'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection'
import { motion } from 'framer-motion'
import { useDispatch } from 'react-redux'
import { cartActions } from '../redux/slices/cartSlice'
import ProductsList from '../components/UI/ProductsList'
import { toast } from 'react-toastify'

const ProductDetails = () => {

    const [tab, setTab] = useState('desc')
    const dispatch = useDispatch()
    const reviewUser = useRef('')
    const reviewMsg = useRef('')
    const [rating, setRating] = useState(null)

    const { id } = useParams()
    const product = products.find((item) => item.id === id)

    const { imgUrl, price, productName, avgRating, category, reviews, description, shortDesc } = product;

    const relatedProducts = products.filter((item) => item.category === category)

    const submitHandler = (e) => {
        e.preventDefault()
        const reviewUserName = reviewUser.current.value
        const reviewUserMsg = reviewMsg.current.value

        // console.log(reviewUserName, reviewUserMsg, rating) //log thanh cong

        const reviewObj = {
            userName: reviewUserName,
            text: reviewUserMsg,
            rating,
        };

        // console.log(reviewUserName, reviewUserMsg, rating)
        console.log(reviewObj); // test OK
        toast.success('Cảm ơn `${userName}` đã đánh giá!')
    };

    const addToCart = () => {
        dispatch(cartActions.addItem({
            id,
            image: imgUrl,
            productName,
            price,

        })
        );
        toast.success('Thêm sản phẩm thành công!')
    };

    useEffect(() => {
        window.scrollTo(0, 0)

    }, [product]);

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
                                <div className='d-flex align-items-center gap-5'>
                                    <span className='product__price'>{price} VND.</span>
                                    <span>Danh mục: {category.toUpperCase()}</span>
                                </div>
                                <p className='mt-3'>{shortDesc}</p>
                                <motion.button whileTap={{ scale: 1.2 }} className='buy__btn' onClick={addToCart}>
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
                                                <form action="" onSubmit={submitHandler}>
                                                    <div className="form__group">
                                                        <input type="text" placeholder='Enter name' ref={reviewUser} required />
                                                    </div>

                                                    <div className="form__group d-flex align-items-center gap-5 rating__group">
                                                        <motion.span whileTap={{ scale: 1.2 }} onClick={() => setRating(1)}>1 <i class="ri-star-s-fill"></i></motion.span>
                                                        <motion.span whileTap={{ scale: 1.2 }} onClick={() => setRating(2)}>2 <i class="ri-star-s-fill"></i></motion.span>
                                                        <motion.span whileTap={{ scale: 1.2 }} onClick={() => setRating(3)}>3 <i class="ri-star-s-fill"></i></motion.span>
                                                        <motion.span whileTap={{ scale: 1.2 }} onClick={() => setRating(4)}>4 <i class="ri-star-s-fill"></i></motion.span>
                                                        <motion.span whileTap={{ scale: 1.2 }} onClick={() => setRating(5)}>5 <i class="ri-star-s-fill"></i></motion.span>
                                                    </div>

                                                    <div className="form__group">
                                                        <textarea ref={reviewMsg} rows={4} type="text" placeholder='Review Message..' required />
                                                    </div>
                                                    <motion.button whileTap={{ scale: 1.2 }} type='submit' className="buy__btn">
                                                        Đăng lên
                                                    </motion.button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>)
                            }

                        </Col>

                        <Col lg='12' className='mt-5'>
                            <h2 className="related__title">
                                Có thể bạn cũng sẽ thích..
                            </h2>
                        </Col>

                        <ProductsList data={relatedProducts} />
                    </Row>
                </Container>
            </section>
        </Helmet>
    )
}

export default ProductDetails