import React from 'react'
import '../styles/cart.css'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection'
import { Container, Row, Col } from 'reactstrap'

const Cart = () => {
    return (
        <Helmet title=' - Giỏ hàng'>
            <CommonSection title='Giỏ hàng' />
            <section>
                <Container>
                    <Row>
                        <Col lg='9'>
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
                            </table>
                        </Col>

                        <Col lg='3'></Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    )
}

export default Cart