import Announcement from '../components/Announcements'
import Navbar from '../components/Navbar'
import styled from 'styled-components';
import Footer from '../components/Footer';
import {GrAdd} from 'react-icons/gr';
import {IoMdRemove} from 'react-icons/io';
const Container = styled.div``;

const Wrapper = styled.div`
padding: 20px;
`;

const Title = styled.h1`
font-weight:300;
text-align:center;
`;

const Top  = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 20;
`;

const TopButton = styled.button`
   padding:10px;
   font-weight:600;
   cursor:pointer;
   border: ${(props)=> props.type === " filled" && "none"};
  background-color: ${(props)=>  props.type === " filled" ? "black" : "transparent"};
  color: ${(props)=> props.type === " filled" && "white"};

`;
const TopTexts =styled.div`
display:flex;`;
const TopText =styled.div`
text-decoration: underline;
cursor: pointer;
margin: 0px 10px;
`;

const Bottom = styled.div`
display:flex;
justify-content: space-between;
`;

const Info = styled.div`
flex:3;
`;
const Product = styled.div`
display:flex;
justify-content: space-between;
`;
const ProductDetail = styled.div`
flex:2;
display:flex;
`;
const Image = styled.img`
width:200px;

`;
const Details = styled.div`
padding: 20px;
display:flex;
flex-direction:column;
justify-content: space-around;
`;
const ProductName = styled.span``;
const ProductID= styled.span``;
const ProductColor = styled.div`
width: 20px;
height:20px;
border-radius: 50%;
background-color: ${(props)=>props.color};
`;
const ProductSize = styled.span``;
const PriceDetail = styled.div`
flex:1;
display:flex;
flex-direction:column;
align-items: center;
justify-content: center;
`;

const ProductAmountContainer = styled.div`
display:flex;
align-items: center;
margin-bottom:20px;
`;
const ProductAmount = styled.div`
font-size: 24px;
margin: 5px;
`;
const ProductPrice = styled.div`
font-size: 30px;
font-weight:200;
`;

const Hr = styled.hr`
  backgroud-color: black;
  border: none;
  height: 1px;
`;


const Summary = styled.div`
flex:1;
border: 0.5px solid lightgray;
border-radius:10px;
padding: 20px;
height: 50vh;
`;

const SummmaryTitle = styled.h1`
font-weight: 200;
`;
const SummaryItem = styled.div`
margin: 30px 0px;
display:flex;
justify-content: space-between;
font-weight: ${props =>props.type="total" && "500"};
font-size: ${props =>props.type="total" && "24px"};

`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const SummaryButton = styled.button`
width:100%;
padding:10px;
background-color: black;
color: white;
font-weight: 600;

`;



 const Cart = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement></Announcement>
        <Wrapper>
            <Title>Your Bag</Title>
            <Top>
              <TopButton>CONTINUE SHOPPING</TopButton>
              <TopTexts>
                <TopText>Shopping Bag(2)</TopText>
                <TopText>Your Wishlist(0)</TopText>
              </TopTexts>
              <TopButton type="filled">CHECK OUT NOW </TopButton>
            </Top>
            <Bottom>
              <Info>
                <Product>
                <ProductDetail>
                  <Image src="https://i.pinimg.com/736x/17/42/52/174252feb15a24d50b33877d0c26d9b6.jpg" />
                  <Details>
                    <ProductName><b>Product:</b> Shirt</ProductName>
                    <ProductID><b>ID:</b>123456789</ProductID>
                    <ProductColor color="black"/>
                    <ProductSize><b>Size:</b>38</ProductSize>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <GrAdd/>
                    <ProductAmount>2</ProductAmount>
                    <IoMdRemove/>
                    </ProductAmountContainer>
                    <ProductPrice>$30</ProductPrice>
                </PriceDetail>
                </Product>
                <Hr/>
                 <Product>
                <ProductDetail>
                  <Image src="https://i.pinimg.com/736x/17/42/52/174252feb15a24d50b33877d0c26d9b6.jpg" />
                  <Details>
                    <ProductName><b>Product:</b> pant</ProductName>
                    <ProductID><b>ID:</b>123456789</ProductID>
                    <ProductColor color="black"/>
                    <ProductSize><b>Size:</b>38</ProductSize>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <GrAdd/>
                    <ProductAmount>2</ProductAmount>
                    <IoMdRemove/>
                    </ProductAmountContainer>
                    <ProductPrice>$30</ProductPrice>
                </PriceDetail>
                </Product>
              </Info>
              <Summary>
                <SummmaryTitle>Order SUMMARY</SummmaryTitle>
                <SummaryItem>
                  <SummaryItemText>Subtotal</SummaryItemText>
                  <SummaryItemPrice>$75</SummaryItemPrice>
                </SummaryItem>
                 <SummaryItem>
                  <SummaryItemText>Estimated Shipping</SummaryItemText>
                  <SummaryItemPrice>$5</SummaryItemPrice>
                </SummaryItem>
                 <SummaryItem>
                  <SummaryItemText>Shipping Discount</SummaryItemText>
                  <SummaryItemPrice>$-5</SummaryItemPrice>
                </SummaryItem>
                 <SummaryItem type="total">
                  <SummaryItemText >Total</SummaryItemText>
                  <SummaryItemPrice>$75</SummaryItemPrice>
                </SummaryItem>
                <SummaryButton>CHECKout now</SummaryButton>
              </Summary>
            </Bottom>
            </Wrapper>
        <Footer/>
        </Container>
  );
};
export default Cart;
