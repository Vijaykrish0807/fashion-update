import React from 'react'
import styled from "styled-components"

const Container=styled.div`
width:100vw;
height:100vh;
background-size:cover;
background:linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)),url("https://i.pinimg.com/736x/17/42/52/174252feb15a24d50b33877d0c26d9b6.jpg");
display:flex;
align-items:center;
justify-content:center;


`;
const Wrapper=styled.div`
width:40%;
padding:20px;

`;
const Form=styled.div`
display:flex;
flex-wrap:wrap;
`;
const Title=styled.div`
font-size:24px;
font-weight:300;
`;
const Input=styled.input`
flex:1;
min-width:40%;
margin:20px 10px 0px 0px;
padding:10px;
`;
const Agreement=styled.div`
font-size:12px;
margin:20px 0px;
`;
const Button=styled.div`
width:40%;
border:none;
padding:15px 20px;
background-color:teal;
cursor:pointer;
color:white;
`;


const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>Create An Account</Title>
            <Form>
                <Input placeholder="name"/>
                <Input placeholder="last name"/>
                <Input placeholder="username"/>
                <Input placeholder="email"/>
                <Input placeholder="password"/>
                <Input placeholder="confirm password"/>
                <Agreement>
                    By creating an account,I consent to the processing of my personal
                    data in accordance with the <b>PRIVACY POLICY</b>
                </Agreement>
                <Button>CREATE</Button>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register