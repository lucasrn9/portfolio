import type { NextPage } from "next";
import styled from "styled-components";
import { useState } from "react";
import Sidebar from "../components/sidebar/Sidebar";
import HomeSection from "../components/homeSection/HomeSection";
import AboutSection from "../components/aboutSection/AboutSection";
import MenuToggle from "../components/menuToggle/MenuToggle";
import AcademicSection from "../components/academicSection/AcademicSection";

const StyledLayout = styled.div`
  display: flex;
`;

const StyledMain = styled.main<{ sidebarOpen: boolean }>`
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

const Home: NextPage = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const toggleSidebar = () => {
    setShowSidebar((prevState) => !prevState);
  };
  return (
    <StyledLayout>
      <Sidebar showSidebar={showSidebar} />
      <MenuToggle onClick={toggleSidebar} sidebarOpen={showSidebar} />
      <StyledMain sidebarOpen={showSidebar}>
        <HomeSection />
        <AboutSection />
        <AcademicSection />
      </StyledMain>
    </StyledLayout>
  );
};
export default Home;
