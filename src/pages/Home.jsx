import React from 'react'
import Announcements  from '../components/Announcements'
import Categories from '../components/Categories'
import Navbar from '../components/Navbar'
import Products from '../components/Products'
import Slider from '../components/Slides'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import Login from './Login'
import ProductList from './ProductList'
//import { Navigate, useNavigate } from "react-router-dom";
//import {Button} from 'react-bootstrap'


const Home = () => {
//   const moveRegister = () => {    
           
//     navigate("/Register");       
//     } 
   
// let navigate = useNavigate();
  return (
    <div>
      <Announcements/>  
     
    <Navbar/>
     
      <Slider/>
      <Categories></Categories>
      <Products></Products>
      <ProductList></ProductList>
  <Login></Login>
      <Footer/>
      <Newsletter/>
    </div>
  )
}

export default Home
