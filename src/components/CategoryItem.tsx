import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Category } from "../data";

const Container = styled.div`
  flex: 1;
  position: relative;
`;
const Image = styled.img`
  width: 100%;
  height: 50vh;
  object-fit: cover;

  @media only screen and (max-width: 800px) {
    height: 30vh;
  }
`;
const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
`;
const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: white;
  cursor: pointer;

  &:hover {
    color: gray;
  }
`;

export const CategoryItem = ({ item }: { item: Category }) => {
  const navigate = useNavigate();

  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button onClick={() => navigate("/products")}>SHOP NOW</Button>
      </Info>
    </Container>
  );
};
