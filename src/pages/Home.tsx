import { Slider } from "../components/Slider";
import styled from "styled-components";
import { Categories } from "../components/Categories";
import { Products } from "../components/Products";

const Container = styled.div`
  margin-bottom: 300px;
`;

export const Home = () => {

  return (
    <Container>
      <Slider />
      <Categories />
      <Products />
    </Container>
  )
}
