import React from "react";
import styled from "styled-components";

type props = {
    price: string,
}

type button_props = {
    label: string,
    icon: React.ReactNode,
}

export const ProductImg = styled.img`
    margin: 1.5rem;
    border: 1px solid lightgrey;
    box-shadow: "0 0 6px rgba(36, 36, 36, 0.2)";
`;

const StyledPriceContainer = styled.div`
  display: flex;
  height: 2.25rem;
  justify-content: flex-start;
  align-items: baseline;
  margin-bottom: 1.5rem;
`;

const StyledPriceLabel = styled.span`
  padding-right: 15px;
`;

const StyledPrice = styled.span`
  font-weight: bold;
  font-size: 2rem;
  line-height: 2.25rem;
`;
export const Price = ({price}:props) => (
    <StyledPriceContainer>
      <StyledPriceLabel>Price:</StyledPriceLabel>
      <StyledPrice>{price}</StyledPrice>
    </StyledPriceContainer>
);

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2.25rem;
  width:100%;
  padding: 0 60px;
  font-size: 0.8rem;
  svg {
    margin-right: 15px;
  }
`;

export const Button = ({label, icon}: button_props) => (
<StyledButton>
    {icon && icon}
    <span>{label}</span>
</StyledButton>
);