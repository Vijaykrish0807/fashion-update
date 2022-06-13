import styled from 'styled-components'
import {BiCart} from 'react-icons/bi'
import {FiHeart} from 'react-icons/fi'
import {AiOutlineSearch} from 'react-icons/ai'

const Container =styled.div`
flex:1;
margin:5px;
min-width:280px;
height:350px;
display:flex;
align-items:center;
justify-content:center;
background-color: black;
position:relative;

&:hover$(Info){
  opacity:1;

}

`;
const Circle= styled.div`
  width:200px;
  height:200px;
  border-radius:50%;
  background-color:white;
  position:absolute;
`;
const Image= styled.img`
height:55%;
z-index:2;
alignSelf: center;
Display: flex;
Align-Items: center;
Justify-Content: centre;
`;
const Info= styled.div`
opacity:0;
width:100%
height:100%
position:absolute;
top:0;
left:0;
background-color:rgba(0,0,0,0.2);
z-index:3;
display:flex;
align-item:center;
justify-content: center;
transition:all 0.5s ease;
cursor:pointer;
`;
const Icon= styled.div`
width:20px;
height:20px;
border-radius :50%;
background-color:white;
display:flex;
align-item:center;
justify-content: center;
margin:10px;
transition:all 0.5s ease;

&:hover{
  background-color:#e9f5f5;
  transform:scale(1.1);
}
`;


const Product = ({item}) => {
  return (
    <Container>
       <Circle/>
        <Image src={item.img} alt="image" />
        <Info>
          <Icon>
            <BiCart></BiCart>
          </Icon>
          <Icon>
            <AiOutlineSearch></AiOutlineSearch>
          </Icon>
          <Icon>
            <FiHeart></FiHeart>
          </Icon>
        </Info>
        </Container>
  )
}

export default Product