import React from 'react'
import {IoMdSend} from 'react-icons/io'
import styled from 'styled-components'
const Container = styled.div`
height:60vh;
backgroound-color:#fcf5f5;
display:flex;
align-item:center ; 
justify-content:center;
flex-direction:column;
`;
const Title = styled.h2`
font-Size: 70px;
margin-bottom:20px;
`;
const Description = styled.div`
    font-size:24px;
    font-weight:300;
    margin-bottom:20px;
`;
const InputContainer = styled.div`
width:50%;
height:40px;
background-color:white;
display:flex;
justify-content:space-between;
border: 1px solid lightgray;

`;
const Input = styled.input`
border:none;
flex:8;
padding-left:20px;
`;
const Button = styled.button`
flex:1;
border:none;
background-color:black;
color:white;


`;

const Newsletter = () => {
  return (
    <Container>
        <Title>NewsLetter</Title>
        <Description>Get Timely Updates from Your Favorite Products.</Description>
        <InputContainer>
            <Input placeholder="Your Email"/>
            <Button>
                <IoMdSend/>
            </Button>
        </InputContainer>
    </Container>
  )
}

export default Newsletter