import Image from "next/image";
import { useState } from "react";
import ProjectCardProps from "../../types/props/ProjectCardProps";
import {
  StyledBubbleCustom,
  StyledBubbleWrapper,
  StyledContent,
  StyledLinkButton,
  StyledLinkIcon,
  StyledLinks,
  StyledProjectDescription,
  StyledProjectImageWrapper,
  StyledProjectName,
  StyledTag,
  StyledToggleContent,
} from "./projectCardStyles";

const ProjectCard = ({
  name,
  description,
  tag,
  image,
  repoLink,
  siteLink,
}: ProjectCardProps) => {
  const [isActive, setIsActive] = useState(false);
  const toggleIsActive = () => {
    setIsActive((prevState) => !prevState);
  };
  return (
    <StyledBubbleCustom>
      <StyledBubbleWrapper>
        <StyledToggleContent
          isActive={isActive}
          className={isActive ? "icon-close" : "icon-arrow-down"}
          onClick={toggleIsActive}
        />
        <StyledProjectImageWrapper>
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Placeholder_view_vector.svg"
            alt={name}
            layout="fill"
          />
        </StyledProjectImageWrapper>
        <StyledContent isActive={isActive}>
          <StyledTag>{tag}</StyledTag>
          <StyledProjectName>{name}</StyledProjectName>
          <StyledProjectDescription>{description}</StyledProjectDescription>
          <StyledLinks>
            <StyledLinkButton
              href={repoLink}
              bgColor="#ffcd57"
              data-testid="repo-button"
            >
              <StyledLinkIcon className="icon-social-github" />
            </StyledLinkButton>
            <StyledLinkButton
              href={siteLink}
              bgColor="#ffcd57"
              data-testid="website-button"
            >
              <StyledLinkIcon className="icon-globe" />
            </StyledLinkButton>
          </StyledLinks>
        </StyledContent>
      </StyledBubbleWrapper>
    </StyledBubbleCustom>
  );
};

export default ProjectCard;
