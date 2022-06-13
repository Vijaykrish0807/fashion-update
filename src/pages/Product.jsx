import React from 'react'
import styled from "styled-components"
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Announcements from '../components/Announcements'
import Newsletter from '../components/Newsletter'
import {FaRupeeSign} from 'react-icons/fa'
import {IoMdRemove} from 'react-icons/io'
import {IoMdAdd} from 'react-icons/io'

const Container=styled.div``;
const Wrapper=styled.div`
padding:50px;
display:flex;
`;
const ImgContainer=styled.div`
flex:1;
`;
const Image=styled.img`
width:100%;
height:90vh;
object-fit:cover;

`;
const InfoContainer=styled.div`
flex:1;
padding: 50px;
`;
const Title=styled.h2`
font-weight:200;
`;
const Desc=styled.p`
margin:20px 0px;
`;
const Price=styled.span`
font-weight:100;
font-size:20px;
`;
const FilterContainer=styled.div` 
width:50%;
margin: 30px, 0px;
display:flex;
justify-content : space-between;

`;

const Filter =styled.div`
display:flex;
justify-content : space-between;
align-items:center;
`;

const FilterTitle=styled.span`
font-size:20px;
font-weight:200;
`;

const FilterColor=styled.div`
width:20px;
height:20px;
border-radius:50%;
background-color:${props=>props.color};
margin:0px 5px;
cursor:pointer;
`;

const FilterSize =styled.select`
    margin-left:10px;
    padding:5px;
    align-items:right;
`;
const FilterSizeOption=styled.option`

`;
const AddContainer=styled.div`
width:50%;
display:flex;
align-items:center;
justify-content:space-between;
`;
const AmountContainer=styled.div`
dispaly:flex;
align-items:center;
font-weight:700;
justify-content:space-between;
`;
const Amount=styled.span`
width:30px;
height:30px;
border-radius:10px;
border:1px solid green;
display:flex;
align-items:center;
justify-content:center;
margin:0px 5px;

`;
const Button=styled.button`
padding:15px;
border:2px solid teal;
background-color:white;
cursor:pointer;
font-weight:500;


&:hover{
    background-color:#f8f4f4;
}
`;

const Product = () => {
  return (
    <Container>
        <Navbar/>
        <Announcements/>
        <Wrapper>
            <ImgContainer>
                <Image src="https://i.pinimg.com/736x/17/42/52/174252feb15a24d50b33877d0c26d9b6.jpg"/>
            </ImgContainer>
            <InfoContainer>
                <Title>Jean</Title>
                <Desc>
                    A button clasp, a zipper, belt loops, and front and back pockets, with copper rivets to reinforce the pockets.
                </Desc>
                <Price><FaRupeeSign/>350</Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Color </FilterTitle>
                        <FilterColor color="Black"/>
                        <FilterColor color="darkblue"/>
                        <FilterColor color="gray"/>
                    </Filter>
               
                
                    <Filter>
                        <FilterTitle>Size</FilterTitle>
                        <FilterSize>
                            <FilterSizeOption>XS</FilterSizeOption>
                            <FilterSizeOption>S</FilterSizeOption>
                            <FilterSizeOption>M</FilterSizeOption>
                            <FilterSizeOption>L</FilterSizeOption>
                            <FilterSizeOption>XL</FilterSizeOption>
                        </FilterSize>
                    </Filter>
                </FilterContainer>
                <AddContainer>
                    <AmountContainer>
                        <IoMdRemove/> 
                        <Amount>1</Amount>
                       <IoMdAdd/>
                    </AmountContainer>
                    <Button>ADD TO CART</Button>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default Product 