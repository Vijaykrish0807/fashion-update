import React from 'react'
import styled from 'styled-components'
import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {FaPinterest} from 'react-icons/fa'
import{FiMapPin} from 'react-icons/fi'
import{BsFillTelephoneFill} from 'react-icons/bs'
import{AiOutlineMail} from 'react-icons/ai'

const Container=styled.div`
display:flex;
`;
const Left=styled.div`
flex:1;
`;
const Logo =styled.h1`

`;
const Desc =styled.p`
margin:20px 0px;
`;
const SocialContainer =styled.div`
display:flex;
`;
const SocialIcon =styled.div`
    width:40px;
    height:40px;
    border-radius:50%;
    background-color:#${props=>props.color};
    display:flex;
    align-items:center;
    justify-content:center;
    margin-right:20px;
`;
const Center=styled.div`
flex:1;
padding:20px;
`;
const Title=styled.h3`
margin-bottom:30px;
`;
const List = styled.ul`
margin:0;
padding:0;
list-style:none;
display:flex;
flex-wrap:wrap;
`;
const ListItem =styled.li`
  width:50%;
  margin-bottom:10px;
`;
const Right=styled.div`
flex:1;
padding:20px;
`;
const ContactItem =styled.div`
margin-bottom:20px;
display:flex;
align-items:center;
`;
const Payment= styled.img`
width:50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
          <Logo>Fashion Hub</Logo>
          <Desc>XYZ.....</Desc>
          <SocialContainer>
              <SocialIcon  color="3B5999">
                 <BsFacebook/> 
              </SocialIcon >
              <SocialIcon  color="E4405F">
                  <BsInstagram></BsInstagram>
              </SocialIcon>
              <SocialIcon color="E60023">
                  <FaPinterest></FaPinterest>
              </SocialIcon>
          </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem><FiMapPin style={{marginRight:"10px"}}/>
          622 Dixie Path, South Tobinchester
        </ContactItem>
        <ContactItem><BsFillTelephoneFill style={{marginRight:"10px"}}/>
          +91 9944302538
        </ContactItem>
        <ContactItem><AiOutlineMail style={{marginRight:"10px"}}/>fashionhub@gmail.com</ContactItem>
        <Payment src="https://thumbs.dreamstime.com/b/google-pay-app-payoneer-mastercard-visa-apple-paypal-popular-realistic-payment-logotype-icon-set-editorial-vector-illustration-199405549.jpg"></Payment>
      </Right>
    </Container>
  )
}

export default Footer;
