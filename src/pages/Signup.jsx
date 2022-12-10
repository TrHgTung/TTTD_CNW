import React, { useState } from 'react'
import Helmet from '../components/Helmet/Helmet'
import '../styles/login.css'
import { Container, Row, Col, Form, FormGroup } from 'reactstrap'
import { Link } from 'react-router-dom'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase.config'

const Signup = () => {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [file, setFile] = useState(null)
    const [loading, setLoading] = useState(false)

    const signup = async (e) => {
        e.preventDefault()
        setLoading(true)

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password)
            const user = userCredential.user
            console.log(user)

        } catch (error) {

        }
    }

    return (
        <Helmet title='Signup'>
            <section>
                <Container>
                    <Row>
                        <Col lg='6' className='m-auto text-center'>
                            <h3 className='fw-bold mb-4'>Đăng Ký</h3>
                            <Form className='auth__form' onSubmit={signup}>
                                <FormGroup className='form__group'>
                                    <input type="text" placeholder='Nhập username của bạn..' value={username} onChange={e => setUsername(e.target.value)} />
                                </FormGroup>

                                <FormGroup className='form__group'>
                                    <input type="email" placeholder='Nhập e-mail..' value={email} onChange={e => setEmail(e.target.value)} />
                                </FormGroup>

                                <FormGroup className='form__group'>
                                    <input type="password" placeholder='Nhập mật khẩu..' value={password} onChange={e => setPassword(e.target.value)} />
                                </FormGroup>

                                <FormGroup className='form__group'>
                                    <input type="file" onChange={e => setFile(e.target.files[0])} />
                                </FormGroup>

                                <button type='submit' className="buy__btn auth__btn">
                                    Đăng ký
                                </button>
                                <p>Bạn đã có tài khoản rồi? Vậy thì hãy <Link to='/login'>đăng nhập</Link></p>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    )
}

export default Signup