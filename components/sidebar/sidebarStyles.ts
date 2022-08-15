import styled from "styled-components";

export const StyledSidebar = styled.aside<{ visible: boolean }>`
  height: calc(100vh - 8rem);
  width: 130px;
  border-right: 1px solid #e4e3ec;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 4rem 0;
  @media (max-width: 768px) {
    padding: 2rem 0 0 0;
    height: calc(100vh - 2rem);
    justify-content: flex-start;
    display: ${({ visible }) => (visible ? "flex" : "none")};
  }
`;

export const StyledNavbarIcon = styled.span`
  font-size: 1.8rem;
  transition: color 0.2s ease;
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
  @media (max-width: 768px) {
    display: none;
  }
`;