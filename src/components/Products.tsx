import styled from "styled-components"
import { popularProducts } from "../data";
import { Product } from "./Product";

const Container = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-areas: "a a a";
  gap: 6px;
  grid-auto-columns: 1fr;

  @media only screen and (max-width: 800px) {
    grid-template-areas: "a";
  }
`;

export const Products = () => {
  return (
    <Container>
      {popularProducts.map(item => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  )
}
