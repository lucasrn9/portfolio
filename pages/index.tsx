import type { GetStaticProps } from "next";
import styled from "styled-components";
import { useState } from "react";
import Sidebar from "../components/sidebar/Sidebar";
import HomeSection from "../components/homeSection/HomeSection";
import AboutSection from "../components/aboutSection/AboutSection";
import RecentWorksSection from "../components/recentWorksSection/RecentWorksSection";
import MenuToggle from "../components/menuToggle/MenuToggle";
import AcademicSection from "../components/academicSection/AcademicSection";
import { GithubRepositorie } from "../types/repositories/GithubRepositorie";
import { OriginalRepo } from "../types/repositories/OriginalRepo";
import { RepoNewValues } from "../types/repositories/RepoNewValues";
import { HomePageProps } from "../types/props/HomePageProps";
import GetInTouchSection from "../components/getInTouchSection/GetInTouchSection";
import imagesAndSites from "../data/repos/imagesAndSites";

const StyledLayout = styled.div`
  display: flex;
  height: 100%;
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

const Home = ({ repos }: HomePageProps) => {
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
        <RecentWorksSection repos={repos} />
        <GetInTouchSection />
      </StyledMain>
    </StyledLayout>
  );
};
export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("https://api.github.com/users/lucasrn9/repos");
  const reposList: GithubRepositorie[] = await res.json();
  const filteredRepos = reposList.filter((repo) =>
    repo.topics.includes("repository")
  );
  const formatedRepos = filteredRepos.map((repo) => ({
    name: repo.name,
    description: repo.description,
    tag: repo.topics,
    image: "",
    repo_link: repo.html_url,
    website_link: "",
    created_at: repo.created_at,
  }));
  // @ts-ignore
  formatedRepos.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

  const addImgAndWebsiteToRepos = (
    originalRepos: OriginalRepo[],
    reposNewValues: RepoNewValues[]
  ) => {
    const newRepos = originalRepos.map((repo) => {
      for (let i = 0; i < reposNewValues.length; i += 1) {
        if (repo.name === reposNewValues[i].name) {
          return {
            ...repo,
            image: reposNewValues[i].image,
            website_link: reposNewValues[i].website_link,
          };
        }
      }
      return { ...repo };
    });
    return newRepos;
  };

  const reposWithNewData = addImgAndWebsiteToRepos(
    formatedRepos,
    imagesAndSites
  );

  return {
    props: {
      repos: reposWithNewData,
    },
  };
};
