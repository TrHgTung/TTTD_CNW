import React, { useState } from 'react'
import Helmet from '../components/Helmet/Helmet'
import '../styles/login.css'
import { Container, Row, Col, Form, FormGroup } from 'reactstrap'
import { Link, useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase.config'
import { toast } from 'react-toastify'
// import { async } from '@firebase/util'

const Login = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    const signIn = async (e) => {
        e.preventDefault()

        setLoading(true)
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password)
            const user = userCredential.user

            // console.log(user)
            setLoading(false)
            toast.success('Đăng nhập thành công!')
            navigate('/home')
        } catch (error) {
            setLoading(false)
            toast.error(error.message)
        }
    }

    return (
        <Helmet title=' - Đăng nhập'>
            <section>
                <Container>
                    <Row>
                        {
                            loading ? <Col lg='12' className='text-center'><h5 className='fw-bold'>Đang tải nội dung..</h5></Col> :
                                <Col lg='6' className='m-auto text-center'>
                                    <h3 className='fw-bold mb-4'>Đăng Nhập</h3>
                                    <Form className='auth__form' onSubmit={signIn}>
                                        <FormGroup className='form__group'>
                                            <input type="email" placeholder='Nhập e-mail..' value={email} onChange={e => setEmail(e.target.value)} />
                                        </FormGroup>

                                        <FormGroup className='form__group'>
                                            <input type="password" placeholder='Nhập mật khẩu..' value={password} onChange={e => setPassword(e.target.value)} />
                                        </FormGroup>

                                        <button type='submit' className="buy__btn auth__btn">
                                            Đăng nhập
                                        </button>
                                        <p>Bạn chưa có tài khoản? <Link to='/signup'>Tạo mới ngay</Link></p>
                                    </Form>
                                </Col>
                        }
                    </Row>
                </Container>
            </section>
        </Helmet>
    )
}

export default Login