import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from "@mui/icons-material";
import styled from "styled-components"
import { PopularProduct } from "../data";

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  transition: opacity 0.15s ease-in;
`;

const Container = styled.div`
  background-color: #f5fbfb;
  position: relative;
  padding: 10px;

  &:hover ${Info} {
    opacity: 1;
  }
`;

const Circle = styled.div`
  width: 90%;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  background-color: white;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
`;

const Image = styled.img`
  width: 100%;
  height: 80%;
  object-fit: contain;
  z-index: 2;
  position: relative;
`;

const Icon = styled.div`
  cursor: pointer;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.15s ease;

  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

export const Product = ({ item } : { item: PopularProduct}) => {
  return (
    <Container>
      <Circle />
      <Image src={item.img} />
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <SearchOutlined />
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  )
}
