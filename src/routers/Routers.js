import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from "../pages/Home"
import Shop from "../pages/Shop"
import Cart from "../pages/Cart"
import Checkout from "../pages/Checkout"
import ProductDetails from "../pages/ProductDetails"
import Login from "../pages/Login"
import Signup from "../pages/Signup"
import About from '../pages/About'
import ProtectedRoute from './ProtectedRoute'
import AddProducts from '../admin/AddProducts'
import AllProducts from '../admin/AllProducts'
import Dashboard from '../admin/Dashboard'
// import AdminNav from '../admin/AdminNav'

const Routers = () => {
    return (
        <Routes>
            <Route path='/' element={<Navigate to='home' />} />
            <Route path='home' element={<Home />} />
            <Route path='shop' element={<Shop />} />
            <Route path='shop/:id' element={<ProductDetails />} />
            <Route path='cart' element={<Cart />} />
            <Route path='about' element={<About />} />
            <Route path='/*' element={<ProtectedRoute />} >
                <Route path='checkout' element={<Checkout />} />
                <Route path='dashboard' element={<Dashboard />} />
                <Route path='dashboard/all-products' element={<AllProducts />} />
                <Route path='dashboard/add-products' element={<AddProducts />} />
                {/* <Route path='checkout' element={<Checkout />} /> */}
            </Route>

            {/* <Route path='checkout' element={
                <ProtectedRoute>
                    <Checkout />
                </ProtectedRoute>
            } /> */}
            <Route path='login' element={<Login />} />
            <Route path='signup' element={<Signup />} />
        </Routes>
    )
}

export default Routers