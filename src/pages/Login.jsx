import React from 'react'
import Helmet from '../components/Helmet/Helmet'
import '../styles/login.css'
import { Container, Row, Col, Form, FormGroup } from 'reactstrap'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <Helmet title='Login'>
            <section>
                <Container>
                    <Row>
                        <Col lg='6' className='m-auto text-center'>
                            <h3 className='fw-bold fs-4'>Đăng Nhập</h3>
                            <Form className='auth__form'>
                                <FormGroup className='form__group'>
                                    <input type="email" placeholder='Nhập e-mail..' />
                                </FormGroup>

                                <FormGroup className='form__group'>
                                    <input type="password" placeholder='Nhập mật khẩu..' />
                                </FormGroup>

                                <button className="buy__btn auth__btn">
                                    Đăng nhập
                                </button>
                                <p>Bạn chưa có tài khoản? <Link to='/signup'>Tạo mới ngay</Link></p>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    )
}

export default Login