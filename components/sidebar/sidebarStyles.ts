import styled from "styled-components";

export const StyledSidebarWrapper = styled.div`
      height:100% ;
      position: fixed ;
      z-index:1 ;
`

export const StyledSidebar = styled.aside<{ visible: boolean }>`
  width: 130px;
  height: 100% ;
  border-right: 1px solid #e4e3ec;
  background-color: ${({theme})=>theme.colors.body} ;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 4rem 0;
  @media (max-width: 960px) {
    display: ${({ visible }) => (visible ? "flex" : "none")};
  }
  @media (max-width:1024px) {
    justify-content: flex-start;
  }
  @media (max-height:610px) {
    overflow-x: scroll ;  
  }
`;

export const StyledNavbarIcon = styled.span`
  font-size: 1.8rem;
  transition: ${({theme})=>theme.transitions.color};
`;

export const StyledNavbar = styled.nav`
  margin-top: 4rem;
  ul {
    display: flex;
    flex-direction: column;

    li {
      margin-bottom: 1.8rem;
      &:last-of-type {
        margin-bottom: 0;
      }
    }

    li a {
      display: block;
      color: ${({ theme }) => theme.colors.secondary};
      &:hover,
      &:focus {
        ${StyledNavbarIcon} {
          color: ${({ theme }) => theme.colors.primary};
        }
      }
    }
  }
`;

export const StyledCopyright = styled.div`
  transform: rotate(-90deg);
  color: #97969e;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 113.66px;
  @media (max-width: 1024px) {
    display: none;
  }
  @media (max-height: 800px) {
    display: none;
  }
`;