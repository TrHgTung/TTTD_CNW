import React, { useState } from 'react'
import Helmet from '../components/Helmet/Helmet'
import '../styles/login.css'
import { Container, Row, Col, Form, FormGroup } from 'reactstrap'
import { Link, useNavigate } from 'react-router-dom'
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import { auth } from '../firebase.config'
import { storage } from '../firebase.config'
import { toast } from 'react-toastify'
import { setDoc, doc } from 'firebase/firestore'
import { db } from '../firebase.config'
// import { async } from '@firebase/util'

const Signup = () => {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [file, setFile] = useState(null)
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    const signup = async (e) => {
        e.preventDefault()
        setLoading(true)

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password)
            const user = userCredential.user
            const storageRef = ref(storage, `images/${Date.now() + username}`)
            const uploadTask = uploadBytesResumable(storageRef, file)


            uploadTask.on((error) => {
                toast.error(error.message)
            }, () => {
                getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
                    // cap nhat thong tin user
                    await updateProfile(user, {
                        displayName: username,
                        // photoURL: downloadURL,
                    })
                    // luu thong tin user (luu vao gg firestore database)
                    await setDoc(doc(db, 'users', user.uid), {
                        uid: user.uid,
                        displayName: username,
                        email,
                        // photoURL: downloadURL,
                    })

                })
            })
            // console.log(user)
            setLoading(false)
            toast.success('Đăng ký thành công!')
            navigate('/login')

        } catch (error) {
            setLoading(false)
            toast.error('Sai thông tin!')
        }
    }

    return (
        <Helmet title='Signup'>
            <section>
                <Container>
                    <Row>
                        {
                            loading ? <Col lg='12' className='text-center'><h6 className='fw-bold'>Loading</h6></Col> :
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

                                        {/* <FormGroup className='form__group'>
                                            <input type="file" onChange={e => setFile(e.target.files[0])} />
                                        </FormGroup> */}

                                        <button type='submit' className="buy__btn auth__btn">
                                            Đăng ký
                                        </button>
                                        <p>Bạn đã có tài khoản rồi? Vậy thì hãy <Link to='/login'>đăng nhập</Link></p>
                                    </Form>
                                </Col>
                        }
                    </Row>
                </Container>
            </section>
        </Helmet>
    )
}

export default Signup