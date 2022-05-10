import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import { Badge } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  padding: 10px 0;
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 1fr;
  gap: 10px;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 25px;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;

  @media only screen and (max-width: 800px) {
    display: none;
  }
`;

const SearchContainer = styled.div`
  flex: 1;
  flex-basis: fit-content;
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  width: 100%;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 25px;

  @media only screen and (max-width: 800px) {
    gap: 10px;
  }
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
`;

export const Navbar = () => {
  return (
    <Container>
      <Left>
        <Language>EN</Language>
        <SearchContainer>
          <Input placeholder="Search" />
          <Search style={{ color: "gray", fontSize: 16 }} />
        </SearchContainer>
      </Left>
      <Center>
        <Logo>LAMA.</Logo>
      </Center>
      <Right>
        <MenuItem>
          <Link to="register" className="a-no-style">REGISTER</Link>
        </MenuItem>
        <MenuItem>
          <Link to="login" className="a-no-style">SIGN IN</Link>
        </MenuItem>
        <MenuItem>
          <Link to="cart">
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </Link>
        </MenuItem>
      </Right>
    </Container>
  );
};
