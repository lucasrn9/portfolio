import type { NextPage } from "next";
import styled, { css } from "styled-components";
import { useState } from "react";
import Sidebar from "../components/sidebar/Sidebar";
import HomeSection from "../components/homeSection/HomeSection";

const StyledMain = styled.main<{ sidebarOpen: boolean }>`
  width: calc(100% - 260px);
  min-width: fit-content;
  @media (max-width: 960px) {
    width: 100%;
    ${(props) =>
      props.sidebarOpen &&
      css`
        width: calc(100% - 130px);
        padding-left: 1rem;
        padding-right: 1rem;
      `}
  }
`;

const StyledLayout = styled.div`
  display: flex;
  width: 100vw;
  height: 100%;
`;

const Home: NextPage = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const toggleSidebar = () => {
    setShowSidebar((prevState) => !prevState);
  };
  return (
    <StyledLayout>
      <Sidebar showSidebar={showSidebar} toggleSidebar={toggleSidebar} />
      <StyledMain sidebarOpen={showSidebar}>
        <HomeSection />
      </StyledMain>
    </StyledLayout>
  );
};
export default Home;
