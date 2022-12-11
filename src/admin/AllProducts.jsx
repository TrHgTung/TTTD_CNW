import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import productImg from '../assets/images/arm-chair-01.jpg'

const AllProducts = () => {
    return (
        <section>
            <Container>
                <Row>
                    <Col lg='12'>
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th>Hình ảnh</th>
                                    <th>Tên</th>
                                    <th>Loại</th>
                                    <th>Giá</th>
                                    <th>Thao tác</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><img src={productImg} alt="" /></td>
                                    <td>Sách giáo khoa Toán 1</td>
                                    <td>Sách giáo khoa</td>
                                    <td>16000 VND</td>
                                    <td><button className='btn btn-danger'>Delete</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default AllProducts