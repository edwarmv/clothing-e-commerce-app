import styled from "styled-components";
import { categories } from "../data";
import { CategoryItem } from "./CategoryItem";

const Container = styled.div`
  display: flex;
  margin-top: 20px;
  gap: 6px;

  @media only screen and (max-width: 1200px) {
    flex-direction: column;
  }
`;

export const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </Container>
  );
};
