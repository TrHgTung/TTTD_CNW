import React from 'react'
import './footer.css'
import logo from "../../assets/images/eco-logo.png"
import { Container, Row, Col, ListGroup, ListGroupItem, Button } from 'reactstrap'
import { Link } from 'react-router-dom'
import MailTo from './MailTo'

const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row>
                    <Col lg='4'>
                        <div className="logo">
                            <img src={logo} alt="Logo" />
                            <div>
                                <h1>TTTD Shop&copy;</h1>
                            </div>
                        </div>
                        <p className="footer__text mt-4">
                            Với đội ngũ xây dựng và quản lý cửa hàng bán chuyên nghiệp, TTTD Shop &copy; tự tin sẽ đem đến cho khách hàng của mình những trải nghiệm tốt nhất!
                        </p>
                    </Col>

                    <Col lg='3'>
                        <div className="footer__quick-links">
                            <h4 className="quick__links-title">
                                Danh Mục Sản Phẩm:
                            </h4>
                            <ListGroup className='category__footer mb-3'>
                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to='#'>Sách Giáo Khoa</Link>
                                </ListGroupItem>

                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to='#'>Sách Nâng Cao</Link>
                                </ListGroupItem>

                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to='#'>Sách Truyện Tranh</Link>
                                </ListGroupItem>

                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to='#'>Cấp Bậc Đại Học</Link>
                                </ListGroupItem>
                            </ListGroup>
                        </div>
                    </Col>

                    <Col lg='2'>
                        <div className="footer__quick-links">
                            <h4 className="quick__links-title">
                                Liên hệ:
                            </h4>
                            <ListGroup className='mb-3'>
                                <ListGroupItem className='ps-0 border-0'>
                                    {/* <Link to='#'>Sách Giáo Khoa</Link> */}
                                    <span><i class="ri-facebook-fill"></i></span>
                                    <b>Facebook: </b> <a href="https://www.facebook.com/nguyentuanhung12345" target='_blank'>Hoang Tung</a>
                                </ListGroupItem>
                            </ListGroup>
                        </div>

                    </Col>

                    <Col lg='3'>
                        <div className="footer__quick-links">
                            <h4 className="quick__links-title">
                                Hỗ trợ trực tiếp:
                            </h4>
                            <ListGroup className='mb-3'>
                                <ListGroupItem className='ps-0 border-0'>
                                    <span><i class="ri-home-gear-fill"></i></span>
                                    <b>Địa chỉ: </b> 280 An Dương Vương - Q5 - TPHCM
                                </ListGroupItem>
                            </ListGroup>
                            <ListGroup className='mb-3'>
                                <ListGroupItem className='ps-0 border-0'>
                                    <span><i class="ri-phone-line"></i></span>
                                    <b>Hotline: </b> 0909090909
                                </ListGroupItem>
                            </ListGroup>
                            <ListGroup className='mb-3'>
                                <ListGroupItem className='ps-0 border-0'>
                                    <span><i class="ri-mail-line"></i></span>
                                    <b>Hot-mail: </b> <MailTo label="4601104211@student.hcmue.edu.vn" mailto="mailto:4601104211@student.hcmue.edu.vn" />
                                </ListGroupItem>
                            </ListGroup>
                        </div>
                    </Col>

                </Row>
            </Container>
        </footer>
    )
}

export default Footer