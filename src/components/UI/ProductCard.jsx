import React from 'react'
import productImg from '../../assets/images/arm-chair-01.jpg'
import { motion } from 'framer-motion'
import '../../styles/product-card.css'
import { Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { cartActions } from '../../redux/slices/cartSlice'

const ProductCard = ({ item }) => {

    const dispatch = useDispatch()
    const addToCart = () => {
        dispatch(cartActions.addItem({
            id: item.id,
            productName: item.productName,
            price: item.price,
            imgUrl: item.imgUrl,
        }));

        toast.success('Sản phẩm được thêm vào giỏ!')

        // alert('Sản phẩm được thêm vào giỏ!')
    };

    return (
        // <div className="product__item">
        //     <div className="product__img">
        //         <img src={productImg} alt="" />
        //     </div>
        //     <h3 className="product__name">
        //         Sách A1
        //     </h3>
        //     <span>
        //         Giáo dục
        //     </span>
        //     <div className="product__card-bottom">
        //         <span className="price">
        //             20,000 VND
        //         </span>
        //         <span>
        //             <i class="ri-add-circle-fill"></i>
        //         </span>
        //     </div>
        // </div>
        <Col lg='3' md='4' className='mb-2'>
            <div className="product__item">
                <div className="product__img">
                    <motion.img whileHover={{ scale: 0.9 }} src={item.imgUrl} alt="" />
                </div>
                <div className='p-2 product__info'>
                    <h3 className="product__name">
                        <Link to={`/shop/${item.id}`}>{item.productName}</Link>
                    </h3>
                    <span className='text-center d-block'>
                        {item.category}
                    </span>
                </div>
                <div className="product__card-bottom d-flex align-items-center justify-content-between p-2">
                    <span className="price">
                        {item.price} VND
                    </span>
                    <motion.span whileTap={{ scale: 1.3 }} onClick={addToCart}>
                        <i class="ri-add-circle-fill"></i>
                    </motion.span>
                </div>
            </div>
        </Col>
    )
}

export default ProductCard