import React from 'react'
import '../styles/cart.css'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection'
import { Container, Row, Col } from 'reactstrap'
import { motion } from 'framer-motion'
import { cartActions } from '../redux/slices/cartSlice'
import { useSelector, useDispatch } from 'react-redux'
import tdImg from '../assets/images/arm-chair-01.jpg'
import { Link } from 'react-router-dom'

const Cart = () => {

    const cartItems = useSelector((state) => state.cart.cartItems)
    const totalAmount = useSelector((state) => state.cart.totalAmount)

    return (
        <Helmet title=' - Giỏ hàng'>
            <CommonSection title='Giỏ hàng' />
            <section>
                <Container>
                    <Row>
                        <Col lg='9'>
                            {
                                cartItems.length === 0 ? (<h2 className='fs-4 text-center'>Không có sản phẩm được thêm!</h2>) : (
                                    <table className='table bordered'>
                                        <thead>
                                            <tr>
                                                <th>Image</th>
                                                <th>Title</th>
                                                <th>Price</th>
                                                <th>Qty</th>
                                                <th>Delete</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            {
                                                cartItems.map((item, index) => (
                                                    <Tr item={item} key={index} />
                                                ))
                                            }
                                        </tbody>
                                    </table>
                                )
                            }

                        </Col>

                        <Col lg='3'>
                            <div>
                                <h6 className='d-flex align-items-center justify-content-between'>Tổng Cộng:</h6>
                                <span className='fs-4 fw-bold'>{totalAmount} VND</span>
                            </div>
                            <p className='fs-6 mt-2'>TTTD Shop&copy; - Hoàng Tùng - Trịnh Thành</p>
                            <div>
                                <button className="buy__btn">
                                    <Link to='/shop'>Quay về</Link>
                                </button>

                                <button className="buy__btn">
                                    <Link to='/checkout'>Thanh toán</Link>
                                </button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    )
}

const Tr = ({ item }) => {

    const dispatch = useDispatch()
    const deleteProduct = () => {
        dispatch(cartActions.deleteItem(item.id))
    }

    return (<tr>
        <td><img src={item.imgUrl} alt="" /></td>
        <td>{item.productName}</td>
        <td>{item.price} VND</td>
        <td>{item.quantity}</td>
        <td><motion.i whileTap={{ scale: 1.2 }} onClick={deleteProduct} class="ri-delete-bin-line"></motion.i></td>
    </tr>)
}

export default Cart