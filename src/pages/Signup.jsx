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
                        uid: user.uid,
                        displayName: username,
                        email,
                        photoURL: downloadURL,
                    })
                    // luu thong tin user (luu vao gg firestore database)
                    await setDoc(doc(db, 'users', user.uid), {
                        uid: user.uid,
                        displayName: username,
                        email,
                        photoURL: downloadURL,
                    })

                })
            })
            // console.log(user)
            setLoading(false)
            toast.success('????ng k?? th??nh c??ng!')
            navigate('/login')

        } catch (error) {
            setLoading(false)
            toast.error('Sai th??ng tin!')
        }
    }

    return (
        <Helmet title=' - ????ng k??'>
            <section>
                <Container>
                    <Row>
                        {
                            loading ? (<Col lg='12' className='text-center'><h5 className='fw-bold'>??ang t???i n???i dung..</h5></Col>) :
                                (<Col lg='6' className='m-auto text-center'>
                                    <h3 className='fw-bold mb-4'>????ng K??</h3>
                                    <Form className='auth__form' onSubmit={signup}>
                                        <FormGroup className='form__group'>
                                            <input type="text" placeholder='Nh???p username c???a b???n..' value={username} onChange={e => setUsername(e.target.value)} />
                                        </FormGroup>

                                        <FormGroup className='form__group'>
                                            <input type="email" placeholder='Nh???p e-mail..' value={email} onChange={e => setEmail(e.target.value)} />
                                        </FormGroup>

                                        <FormGroup className='form__group'>
                                            <input type="password" placeholder='Nh???p m???t kh???u..' value={password} onChange={e => setPassword(e.target.value)} />
                                        </FormGroup>

                                        <FormGroup className='form__group'>
                                            <input type="file" onChange={e => setFile(e.target.files[0])} />
                                        </FormGroup>

                                        <button type='submit' className="buy__btn auth__btn">
                                            ????ng k??
                                        </button>
                                        <p>B???n ???? c?? t??i kho???n r???i? V???y th?? h??y <Link to='/login'>????ng nh???p</Link></p>
                                    </Form>
                                </Col>)
                        }
                    </Row>
                </Container>
            </section>
        </Helmet>
    )
}

export default Signup