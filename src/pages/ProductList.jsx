import React from 'react'
import styled from'styled-components'
import Navbar from '../components/Navbar'
import Announcements from '../components/Announcements'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
const Container =styled.div``;
const Title =styled.h1`
margin:20px;
`;
const FilterContainer =styled.div`
display:flex;
justify-content:space-around;
`;
const Filter =styled.div`
margin:20px;
`;
const FilterText =styled.span`
font-size:20px;
font-weight:600 ;
margin-right:20px;
`;
const Select=styled.select`
    padding:10px;
    margin-right:20px;

`;
const Option=styled.option``;


const ProductList = () => {
  return (
    <Container>
        <Navbar/>
        <Announcements/>
        <Title>Dresses</Title>
        <FilterContainer>
            <Filter><FilterText>Filter Products:</FilterText></Filter>
            <Select>
                < Option disabled selected> Color</Option>
                <Option>White </Option>
                <Option>Black</Option>
                <Option>Red</Option>
                <Option>Yellow</Option>
                <Option>Green</Option>
            </Select>
            <Select>
                < Option disabled selected> Size</Option>
                <Option>XS </Option>
                <Option>S</Option>
                <Option>M</Option>
                <Option>L</Option>
                <Option>XL</Option>
            </Select>
            <Filter><FilterText>Sort Products:</FilterText></Filter>
            <Select>
                <Option selected>Newset</Option>
                <Option>Price (asc)</Option>
                <Option>Black(desc)</Option>
            </Select>
        </FilterContainer>
        <Products/>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default ProductList