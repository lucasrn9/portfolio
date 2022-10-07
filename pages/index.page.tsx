import type { GetStaticProps } from "next";
import { useState } from "react";
import Head from "next/head";
import {
  Sidebar,
  HomeSection,
  AboutSection,
  RecentWorksSection,
  MenuToggle,
  AcademicSection,
  GetInTouchSection,
} from "../components";
import {
  GithubRepositorie,
  OriginalRepo,
  RepoNewValues,
} from "../types/repositories";
import { HomePageProps } from "../types/props/HomePageProps";
import imagesAndSites from "../data/repos/imagesAndSites";
import { StyledLayout, StyledMain } from "./indexStyles";

const Home = ({ repos }: HomePageProps) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const toggleSidebar = () => {
    setShowSidebar((prevState) => !prevState);
  };
  return (
    <>
      <Head>
        <title>lucasrn9</title>
        <meta
          name="description"
          content="lucas ribeiro's personal website and portfolio"
        />
      </Head>
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
    </>
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
    revalidate: 900,
  };
};
