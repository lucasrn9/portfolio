import styled from "styled-components";

const StyledLogo = styled.span`
  font-size: 2.8rem;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.secondary};
  position: relative;
  display: flex;
  align-items: center;
  height: 31px;

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    width: 9px;
    height: 9px;
    transform: translateX(150%);
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;

export default StyledLogo;
