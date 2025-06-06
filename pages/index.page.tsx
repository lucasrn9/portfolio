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
  CertificationsSection,
} from "../components";
import {
  GithubRepositorie,
  OriginalRepo,
  RepoNewValues,
} from "../types/repositories";
import { HomePageProps } from "../types/props/HomePageProps";
import imagesAndSites from "../data/repos/imagesAndSites";
import { StyledLayout, StyledMain } from "./indexStyles";

const Home = ({ repos, reposAmount, githubStars }: HomePageProps) => {
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
          <AboutSection
            projectsCompleted={reposAmount}
            githubStars={githubStars}
          />
          <AcademicSection />
          <CertificationsSection />
          <RecentWorksSection repos={repos} />
          <GetInTouchSection />
        </StyledMain>
      </StyledLayout>
    </>
  );
};
export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(
    "https://api.github.com/users/lucasrn9/repos?per_page=100"
  );
  const reposList: GithubRepositorie[] = await res.json();
  const portfolioRepos = reposList.filter((repo) =>
    repo.topics.includes("portfolio")
  );
  const reposAmount = portfolioRepos.length;
  const githubStars = reposList.reduce(
    (prevVal, repo) => prevVal + repo.stargazers_count,
    0
  );

  const allowedTags = ["nextjs", "react", "html-css", "nodejs"];

  const formattedRepos = portfolioRepos.map((repo) => {
    const repoTags = repo.topics.filter((tag) =>
      allowedTags.includes(tag)
    );
    return {
      name: repo.name,
      description: repo.description,
      tag: repoTags,
      image: "",
      repo_link: repo.html_url,
      website_link: "",
      created_at: repo.created_at,
    };
  });
  // @ts-ignore
  formattedRepos.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

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
    formattedRepos,
    imagesAndSites
  );
  return {
    props: {
      repos: reposWithNewData,
      reposAmount,
      githubStars,
    },
    revalidate: 900,
  };
};
