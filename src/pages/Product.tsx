import { Add, Remove } from "@mui/icons-material";
import styled from "styled-components"

const Container = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 1fr;
  gap: 50px;

  @media only screen and (max-width: 800px) {
    grid-auto-flow: row;
  }
`;

const ImgContainer = styled.div``;

const Image = styled.img`
  width: 100%;
  object-fit: cover;
`;

const InfoContainer = styled.div``;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  margin: 30px 0;
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: min-content;
  gap: 50px;
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div<{ color: string }>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => props.color};
  cursor: pointer;
`;

const FilterSize = styled.select`
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    background-color: #f8f4f4;
  }
`;


export const Product = () => {
  return (
    <Container>
      <ImgContainer>
        <Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
      </ImgContainer>

      <InfoContainer>
        <Title>Denim Jumpsuit</Title>

        <Desc>Sit nihil laudantium officiis cupiditate nostrum at. Ex dolores unde doloremque obcaecati sint? Esse autem voluptates iusto voluptatibus rerum. Quibusdam tempora incidunt quasi dolorum iste. Pariatur doloremque veritatis unde consectetur</Desc>

        <Price>$ 20</Price>

        <FilterContainer>
          <Filter>
            <FilterTitle>Color</FilterTitle>
            <FilterColor color="black" />
            <FilterColor color="darkblue" />
            <FilterColor color="gray" />
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
            <Remove />
            <Amount>1</Amount>
            <Add />
          </AmountContainer>
          <Button>ADD TO CART</Button>
        </AddContainer>
      </InfoContainer>
    </Container>
  )
}
