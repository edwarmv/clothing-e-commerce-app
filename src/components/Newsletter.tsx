import { Send } from "@mui/icons-material";
import styled from "styled-components";
import { Wrapper } from "./Wrapper";

const BackgroundWrapper = styled.div`
  background-color: #fcf5f5;
`;

const Container = styled.div`
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
`;

const Desc = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
`;

const InputContainer = styled.div`
  height: 40px;
  width: min(500px, 100%);
  display: flex;
  gap: 10px;
`;

const Input = styled.input`
  flex: 1;
  border: 1px solid lightgray;

  &:focus {
    outline: 1px solid lightgray;
  }
`;

const Button = styled.button`
  width: 60px;
  border: none;
  background-color: teal;
  color: white;
`;

export const Newsletter = () => {
  return (
    <BackgroundWrapper>
      <Wrapper>
        <Container>
          <Title>Newsletter</Title>
          <Desc>Get timely updates from your favorite products.</Desc>
          <InputContainer>
            <Input placeholder="Your email" />
            <Button>
              <Send />
            </Button>
          </InputContainer>
        </Container>
      </Wrapper>
    </BackgroundWrapper>
  );
};
