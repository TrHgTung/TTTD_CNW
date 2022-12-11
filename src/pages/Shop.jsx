import React, { useState } from 'react'
import CommonSection from '../components/UI/CommonSection'
import Helmet from '../components/Helmet/Helmet'
import { Container, Row, Col } from 'reactstrap'
import '../styles/shop.css'
import products from '../assets/data/products'
import ProductsList from '../components/UI/ProductsList'

const Shop = () => {

    const [productsData, setProductsData] = useState(products)
    const handleFilter = e => {
        const filterValue = e.target.value
        if (filterValue === 'sach-giao-khoa') {
            const filteredProducts = products.filter(item => item.category === 'sach-giao-khoa')

            setProductsData(filteredProducts)
        }

        if (filterValue === 'sach-nang-cao') {
            const filteredProducts = products.filter(item => item.category === 'sach-nang-cao')

            setProductsData(filteredProducts)
        }

        if (filterValue === 'sach-dai-hoc') {
            const filteredProducts = products.filter(item => item.category === 'sach-dai-hoc')

            setProductsData(filteredProducts)
        }
        if (filterValue === 'sach-truyen-tranh') {
            const filteredProducts = products.filter(item => item.category === 'sach-truyen-tranh')

            setProductsData(filteredProducts)
        }
    }

    const handleSearch = e => {
        const searchTerm = e.target.value

        const searchedProducts = products.filter(item => item.productName.toLowerCase().includes(searchTerm.toLowerCase()))

        setProductsData(searchedProducts)
    }

    return (
        <Helmet title=' - Sản phẩm' >
            <CommonSection title="Sản phẩm" />

            <section>
                <Container>
                    <Row>
                        <Col lg='3' md='3'>
                            <div className="filter__widget">
                                <select onChange={handleFilter}>
                                    <option>----- Theo Danh mục sách -----</option>
                                    <option value="sach-giao-khoa">Sách Giáo Khoa</option>
                                    <option value="sach-nang-cao">Sách Hỗ Trợ Nâng Cao</option>
                                    <option value="sach-dai-hoc">Sách Cấp Bậc Đại Học</option>
                                    <option value="sach-truyen-tranh">Sách Truyện Tranh</option>
                                </select>
                            </div>
                        </Col>
                        <Col lg='3' md='3'>
                            <div className="filter__widget">
                                <select>
                                    <option>----- Xếp theo thứ tự: -----</option>
                                    <option value="ascending">Tăng dần</option>
                                    <option value="descending">Giảm dần</option>

                                </select>
                            </div>
                        </Col>
                        <Col lg='6' md='6'>
                            <div className="search__box">
                                <input type="text" placeholder='Tìm kiếm..' onChange={handleSearch} />
                                <span><i class="ri-search-2-line"></i></span>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section>
                <Container>
                    <Row>
                        {productsData.length === 0 ? <h1 className='text-center fs-4'>Không có kết quả!</h1> : <ProductsList data={productsData} />}
                    </Row>
                </Container>
            </section>
        </Helmet>
    )
}

export default Shop