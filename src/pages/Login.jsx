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
width:25%;
padding:20px;
background-color:white;
`;
const Form=styled.div`
display:flex;
flex-direction: column;
`;
const Title=styled.div`
font-size:24px;
font-weight:300;
`;
const Input=styled.input`
flex:1;
min-width:40%;
margin:10px 0px;
padding:10px;
`;

const Button=styled.div`
width:40%;
border:none;
padding:15px 20px;
background-color:teal;
cursor:pointer;
color:white;
`;
const Link = styled.a`
margin: 5px 0px;
font-size:12px;
text-decoration: underline;
cursor:pointer;
margin-bottom:10px;

`;

const Login = () => {
  return (
    <Container>
        <Wrapper>
            <Title>Sign In</Title>
            <Form>
                <Input placeholder="username "/>
                <Input placeholder="password"/>
                <Button>LOGIN</Button>
                <Link>Forgot Password?</Link>
                <Link>Create a new Account</Link>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Login;