import React from 'react'
import { Container, Row, Col, Form, FormGroup } from 'reactstrap'
import Helmet from '../components/Helmet/Helmet'
import '../styles/checkout.css'
import CommonSection from '../components/UI/CommonSection'
import { useSelector } from 'react-redux'


const Checkout = () => {

    const totalQty = useSelector(state => state.cart.totalQuantity)
    const totalAmount = useSelector(state => state.cart.totalAmount)
    const shippingFee = 20000
    const totalBill = totalAmount + shippingFee

    return (
        <Helmet title=' - Thanh toán'>
            <CommonSection title='Thanh Toán' />
            <section>
                <Container>
                    <Row>
                        <Col lg='8'>
                            <h6 className='mb-4 fw-bold'>Hóa đơn thanh toán</h6>
                            <Form className='billing__form'>
                                <FormGroup className="form__group">
                                    <input type="text" placeholder='Nhập tên của bạn' />
                                </FormGroup>

                                <FormGroup className="form__group">
                                    <input type="email" placeholder='Nhập e-mail của bạn' />
                                </FormGroup>

                                <FormGroup className="form__group">
                                    <input type="number" placeholder='Nhập SĐT của bạn' />
                                </FormGroup>

                                <FormGroup className="form__group">
                                    <input type="text" placeholder='Nhập địa chỉ của bạn' />
                                </FormGroup>

                                <FormGroup className="form__group">
                                    <input type="text" placeholder='Nhập quận (huyện)' />
                                </FormGroup>

                                <FormGroup className="form__group">
                                    <input type="text" placeholder='Nhập phường (xã)' />
                                </FormGroup>

                                <FormGroup className="form__group">
                                    <input type="text" placeholder='Nhập tỉnh (thành phố)' />
                                </FormGroup>

                            </Form>
                        </Col>

                        <Col lg='4'>
                            <div className="checkout__cart">
                                <h6>Số lượng: <span>{totalQty}</span></h6>
                                <h6>Giá sản phẩm: <span>{totalAmount} VND</span></h6>
                                <h6>Phí vận chuyển: <span>{shippingFee} VND</span></h6>
                                <h4>Thành tiền: <span>{totalBill} VND</span></h4>
                                <button className="buy__btn auth__btn w-100">
                                    Đặt hàng
                                </button>
                            </div>

                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    )
}

export default Checkout