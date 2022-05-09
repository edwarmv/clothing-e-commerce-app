import { Add, Remove } from "@mui/icons-material";
import styled from "styled-components";

const Container = styled.div``;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 800px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const TopButton = styled.button<{ filled?: boolean }>`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.filled && "none"};
  background-color: ${(props) => (props.filled ? "black" : "transparent")};
  color: ${(props) => props.filled && "white"};
`;

const TopTexts = styled.div``;

const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0 10px;
`;

const Bottom = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 3fr 1fr;
  gap: 20px;

  @media only screen and (max-width: 800px) {
    grid-auto-flow: row;
    grid-template-columns: 1fr;
  }
`;

const Info = styled.div`
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Product = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 3fr 1fr;
`;

const ProductDetail = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 1fr 3fr;
`;

const Image = styled.img`
  flex-basis: min-content;
  width: 100%;
  object-fit: scale-down;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.span<{ color: string }>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
`;

const Summary = styled.div`
  align-self: start;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div<{ total?: boolean }>`
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
  font-weight: ${props => props.total && 500};
  font-size: ${props => props.total && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
  border: none;
`;

export const Cart = () => {
  return (
    <Container>
      <Title>YOUR BAG</Title>

      <Top>
        <TopButton>CONTINUE SHOPPING</TopButton>

        <TopTexts>
          <TopText>Shopping Bag (2)</TopText>
          <TopText>Your Wishlist (0)</TopText>
        </TopTexts>

        <TopButton filled>CHECKOUT NOW</TopButton>
      </Top>

      <Bottom>
        <Info>
          <Product>
            <ProductDetail>
              <Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" />

              <Details>
                <ProductName>
                  <b>Product:</b> JESSIE THUNDER SHOES
                </ProductName>
                <ProductId>
                  <b>ID:</b> 93813718293
                </ProductId>
                <ProductColor color="black" />
                <ProductSize>
                  <b>Size:</b> 37.5
                </ProductSize>
              </Details>
            </ProductDetail>

            <PriceDetail>
              <ProductAmountContainer>
                <Add />
                <ProductAmount>2</ProductAmount>
                <Remove />
              </ProductAmountContainer>

              <ProductPrice>$ 30</ProductPrice>
            </PriceDetail>
          </Product>

          <Hr />

          <Product>
            <ProductDetail>
              <Image src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png" />

              <Details>
                <ProductName>
                  <b>Product:</b> HAKURA T-SHIRT
                </ProductName>
                <ProductId>
                  <b>ID:</b> 93813718293
                </ProductId>
                <ProductColor color="gray" />
                <ProductSize>
                  <b>Size:</b> M
                </ProductSize>
              </Details>
            </ProductDetail>

            <PriceDetail>
              <ProductAmountContainer>
                <Add />
                <ProductAmount>1</ProductAmount>
                <Remove />
              </ProductAmountContainer>

              <ProductPrice>$ 20</ProductPrice>
            </PriceDetail>
          </Product>
        </Info>

        <Summary>
          <SummaryTitle>ORDER SUMMARY</SummaryTitle>
          <SummaryItem>
            <SummaryItemText>Subtotal</SummaryItemText>
            <SummaryItemPrice>$ 80</SummaryItemPrice>
          </SummaryItem>
          <SummaryItem>
            <SummaryItemText>Estimated Shipping</SummaryItemText>
            <SummaryItemPrice>$ 80</SummaryItemPrice>
          </SummaryItem>
          <SummaryItem>
            <SummaryItemText>Subtotal</SummaryItemText>
            <SummaryItemPrice>$ 5.90</SummaryItemPrice>
          </SummaryItem>
          <SummaryItem>
            <SummaryItemText>Shipping Discount</SummaryItemText>
            <SummaryItemPrice>$ -5.90</SummaryItemPrice>
          </SummaryItem>
          <SummaryItem total>
            <SummaryItemText>Total</SummaryItemText>
            <SummaryItemPrice>$ 80</SummaryItemPrice>
          </SummaryItem>

          <Button>CHECKOUT NOW</Button>
        </Summary>
      </Bottom>
    </Container>
  );
};
