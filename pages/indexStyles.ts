import styled from "styled-components";

export const StyledLayout = styled.div`
  display: flex;
  height: 100%;
`;

export const StyledMain = styled.main<{ sidebarOpen: boolean }>`
  width: 100%;

  @media (max-width: 1282px) {
    padding-left: 130px;
  }

  @media (max-width: 960px) {
    padding-left: ${({ sidebarOpen }) => (sidebarOpen ? "130px" : "0")};
  }

  @media (max-width: 900px) {
    padding-right: 0;
  }
`;