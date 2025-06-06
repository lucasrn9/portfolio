import styled, { keyframes } from "styled-components";

const buttonPush = keyframes`
50%{
    transform: scale(0.8) ;
}
100%{
    transform:scale(1) ;
}
`;

const StyledButton = styled.button`
  padding: 0.70rem 2rem;
  line-height: 1;
  border-radius: 1.875rem;
  box-shadow: 0 0 1px rgb(0 0 0 / 0%);
  border: 1px solid transparent;
  color: #fff;
  display: inline-block;
  background-color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  &:focus-visible{
    border: 2px solid black;
  }
  &:hover {
    animation: ${buttonPush} 0.3s linear 1;
  }

  @media (max-width: 365px) {
    font-size: 0.9rem;
    padding: 0.75rem 1.3rem;
  }
`;

export default StyledButton;
