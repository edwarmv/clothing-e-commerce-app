import { CSSProperties } from "react";
import styled from "styled-components"

const Container = styled.div`
  margin: auto;
  padding: 0 5%;
  max-width: 1700px;
`;

export const Wrapper = ({ children, style = {} } : { children: JSX.Element, style?: CSSProperties }) => {
  return (
    <Container style={style}>
      {children}
    </Container>
  )
}
