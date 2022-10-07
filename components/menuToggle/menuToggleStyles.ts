import styled from "styled-components";

const StyledMenuToggle = styled.button<{sidebarOpen:boolean}>`
  width: 45px;
  height: 45px;
  display: none;
  position: fixed;
  z-index:2 ;
  left:${({sidebarOpen})=>sidebarOpen?'130px':'0'} ;
  top:0 ;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  color:${({theme})=>theme.colors.secondary} ;
  background-color: transparent;

  &:focus-visible{
    border: 2px solid black;
  }

  @media (max-width: 960px) {
    display: flex;
  }
`;

export default StyledMenuToggle;
