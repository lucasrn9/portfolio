import { useEffect, useState, KeyboardEvent } from "react";
import { RecentWorksSectionProps } from "../../types/props/RecentWorksSectionProps";
import ProjectCard from "../projectCard/ProjectCard";
import SectionTitle from "../sectionTitle/SectionTitle";
import {
  StyledContainerCustom,
  StyledFilterOption,
  StyledFilters,
  StyledProjects,
  StyledProjectsMessage,
  StyledSectionCustom,
  StyledViewMoreButton,
} from "./recentWorksSectionStyles";

const RecentWorksSection = ({ repos }: RecentWorksSectionProps) => {
  const [tagFilters, setTagFilters] = useState([
    { githubName: "nextjs", displayName: "Next", selected: false },
    { githubName: "react", displayName: "React", selected: false },
    { githubName: "html-css", displayName: "HTML & CSS", selected: false },
    { githubName: "nodejs", displayName: "Node", selected: false },
  ]);

  const [everythingFilter, setEverythingFilter] = useState({
    name: "Everything",
    selected: true,
  });

  const projectsPerPage = 6;

  const [pagination, setPagination] = useState(projectsPerPage);

  const activeTagFilters = tagFilters.filter((tagFilter) => tagFilter.selected);

  const toggleTagFilters = (position: number) => {
    setTagFilters((prevState) =>
      prevState.map((tagFilter, index) => {
        if (index === position) {
          return { ...tagFilter, selected: !tagFilter.selected };
        }
        return tagFilter;
      })
    );
  };

  const toggleEverythingFilter = () => {
    setEverythingFilter((prevState) => ({
      ...prevState,
      selected: !prevState.selected,
    }));
  };

  const handleEverythingFilterKeyDown = (e: KeyboardEvent<HTMLSpanElement>) => {
    if (e.key === "Enter") {
      toggleEverythingFilter();
    }
  };

  const handleTagFiltersKeyDown = (
    e: KeyboardEvent<HTMLSpanElement>,
    position: number
  ) => {
    if (e.key === "Enter") {
      toggleTagFilters(position);
    }
  };

  useEffect(() => {
    if (everythingFilter.selected && activeTagFilters.length >= 1) {
      setPagination(projectsPerPage);
      setTagFilters((prevState) =>
        prevState.map((tagFilter) => ({ ...tagFilter, selected: false }))
      );
    }
  }, [everythingFilter]);

  useEffect(() => {
    if (activeTagFilters.length > 0) {
      setPagination(projectsPerPage);
      setEverythingFilter((prevState) => ({ ...prevState, selected: false }));
    }
  }, [tagFilters]);

  const EverythingFilterView = (
    <StyledFilterOption
      tabIndex={0}
      selected={everythingFilter.selected}
      onClick={toggleEverythingFilter}
      onKeyDown={(e) => handleEverythingFilterKeyDown(e)}
    >
      {everythingFilter.name}
    </StyledFilterOption>
  );

  const TagFiltersView = tagFilters.map((tagFilter, index) => (
    <StyledFilterOption
      tabIndex={0}
      selected={tagFilter.selected}
      onClick={() => toggleTagFilters(index)}
      onKeyDown={(e) => handleTagFiltersKeyDown(e, index)}
      key={tagFilter.displayName}
    >
      {tagFilter.displayName}
    </StyledFilterOption>
  ));

  const allReposPaginated = repos.slice(0, pagination);

  const filteredRepos = repos.filter((repo) => {
    for (let i = 0; i < activeTagFilters.length; i += 1) {
      if (repo.tag[0] === activeTagFilters[i].githubName) {
        return repo;
      }
    }
    return undefined;
  });

  const filteredReposPaginated = filteredRepos.slice(0, pagination);

  const allProjectsView = allReposPaginated.map((repo) => (
    <ProjectCard
      key={repo.name}
      name={repo.name}
      description={repo.description}
      tag={repo.tag[0]}
      image={repo.image}
      repoLink={repo.repo_link}
      siteLink={repo.website_link}
    />
  ));

  const filteredProjectsView = filteredReposPaginated.map((repo) => (
    <ProjectCard
      key={repo.name}
      name={repo.name}
      description={repo.description}
      tag={repo.tag[0]}
      image={repo.image}
      repoLink={repo.repo_link}
      siteLink={repo.website_link}
    />
  ));

  const viewMoreProjects = () => {
    if (everythingFilter.selected && pagination > allReposPaginated.length) {
      return null;
    }
    if (
      activeTagFilters.length > 0 &&
      pagination > filteredReposPaginated.length
    ) {
      return null;
    }
    setPagination((prevState) => prevState + projectsPerPage);
    return null;
  };

  const activeProjectsView = everythingFilter.selected
    ? allProjectsView
    : filteredProjectsView;

  let ViewMoreButtonView: JSX.Element | null;

  ViewMoreButtonView = (
    <StyledViewMoreButton type="button" onClick={viewMoreProjects}>
      view more
    </StyledViewMoreButton>
  );

  if (everythingFilter.selected && pagination >= repos.length) {
    ViewMoreButtonView = null;
  }
  if (activeTagFilters.length > 0 && pagination >= filteredRepos.length) {
    ViewMoreButtonView = null;
  }
  if (!everythingFilter.selected && activeTagFilters.length === 0) {
    ViewMoreButtonView = null;
  }

  return (
    <StyledSectionCustom id="works">
      <StyledContainerCustom>
        <SectionTitle>Recent Works</SectionTitle>
        <StyledFilters>
          {EverythingFilterView}
          {TagFiltersView}
        </StyledFilters>
        <StyledProjects>
          {!everythingFilter.selected && activeTagFilters.length === 0 ? (
            <StyledProjectsMessage>
              Use the filters above to see the projects
            </StyledProjectsMessage>
          ) : (
            activeProjectsView
          )}
        </StyledProjects>
        {ViewMoreButtonView}
      </StyledContainerCustom>
    </StyledSectionCustom>
  );
};
export default RecentWorksSection;
