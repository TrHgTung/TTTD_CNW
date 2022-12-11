import React, { useState } from 'react'
import { Form, FormGroup, Container, Col, Row } from 'reactstrap'
import { toast } from 'react-toastify'

const AddProducts = () => {

    const [enterTitle, setEnterTitle] = useState('')
    const [enterShortDesc, setEnterShortDesc] = useState('')
    const [enterDescription, setEnterDescription] = useState('')
    const [enterCategory, setEnterCategory] = useState('')
    const [enterPrice, setEnterPrice] = useState('')
    const [enterProductImg, setEnterProductImg] = useState(null)
    //
    const [loading, setLoading] = useState(false)

    const addProduct = async (e) => {
        e.preventDefault()

        const product = {
            title: enterTitle,
            shortDesc: enterShortDesc,
            description: enterDescription,
            category: enterCategory,
            price: enterPrice,
            imgUrl: enterProductImg
        };

        toast.success('Đã thêm thành công!')
        console.log(product)
    }

    return (
        <section>
            <Container>
                <Row>
                    <Col lg='12'>
                        <h4 className='mb-5'>Thêm Sách mới</h4>
                        <Form onSubmit={addProduct}>
                            <FormGroup className='form__group'>
                                <span>Tên sản phẩm</span>
                                <input type="text" placeholder='Sach' value={enterTitle} onChange={e => setEnterTitle(e.target.value)} required />
                            </FormGroup>

                            <FormGroup className='form__group'>
                                <span>Mô tả cơ bản (ngắn)</span>
                                <input type="text" placeholder='Mo-ta-1' value={enterShortDesc} onChange={e => setEnterShortDesc(e.target.value)} required />
                            </FormGroup>

                            <FormGroup className='form__group'>
                                <span>Mô tả chi tiết (dài)</span>
                                <input type="text" placeholder='Mo-ta-2' value={enterDescription} onChange={e => setEnterDescription(e.target.value)} required />
                            </FormGroup>

                            <div className='d-flex align-items-center justify-content-between gap-5'>
                                <FormGroup className='form__group w-50'>
                                    <span>Mức giá</span>
                                    <input type="number" placeholder='gia-tien' value={enterPrice} onChange={e => setEnterPrice(e.target.value)} required />
                                </FormGroup>

                                <FormGroup className='form__group w-50'>
                                    <span>Phân loại sách</span>
                                    {/* <input type="text" placeholder='loai-sach' /> */}
                                    <select className='w-100 p-2' value={enterCategory} onChange={e => setEnterCategory(e.target.value)}>
                                        <option value="sach-giao-khoa">Sách giáo khoa</option>
                                        <option value="sach-nang-cao">Sách nâng cao</option>
                                        <option value="sach-dai-hoc">Sách cấp bậc đại học</option>
                                        <option value="sach-truyen-tranh">Truyện tranh</option>
                                    </select>
                                </FormGroup>
                            </div>

                            <div>
                                <FormGroup className='form__group'>
                                    <span>Ảnh minh họa</span>
                                    <input type="file" onChange={e => setEnterProductImg(e.target.files[0])} />
                                </FormGroup>
                            </div>

                            <button className="buy__btn" type='submit'>
                                Thêm Sản Phẩm
                            </button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default AddProducts