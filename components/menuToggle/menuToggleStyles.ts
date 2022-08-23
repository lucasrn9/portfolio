import styled from "styled-components";

const StyledMenuToggle = styled.button`
  width: 45px;
  height: 45px;
  display: none;
  position: absolute;
  left:100% ;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  color:${({theme})=>theme.colors.secondary} ;
  background-color: ${({ theme }) => theme.colors.body};
  @media (max-width: 960px) {
    display: flex;
  }
`;

export default StyledMenuToggle;
