
import styled from 'styled-components';

const Container = styled.div`
flex:1;
margin:3;
height: 70vh;
position:relative;
`;
const Image = styled.img`
width:100%;
height: 100%;
object-fit: cover;
`;
const Info = styled.div`
top:0;
left:0;
width:100%;
height: 100%;
position: absolute;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
`;
const Title = styled.h1`
font-color:white;
margin-bottom:20px;
`;
const Button = styled.button`
border:none;
padding:20px;
background-color:white;
color:grey;
cursor:pointer;
font-weight: 600;
`;

const CategoryItem = ({item}) => {
  return (
    <Container>
        <Image src={item.img} alt="image"/>
        <Info>
            <Title>{item.title}</Title>
                <Button>SHOP NOW</Button>
         </Info>   
        </Container> 
  )
}

export default CategoryItem