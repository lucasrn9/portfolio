import Image from "next/image";
import { useState, KeyboardEvent } from "react";
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
  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      setIsActive((prevState) => !prevState);
    }
  };
  return (
    <StyledBubbleCustom>
      <StyledBubbleWrapper tabIndex={0} onKeyDown={(e) => handleKeyDown(e)}>
        <StyledToggleContent
          aria-label="toggle project content"
          role="button"
          isActive={isActive}
          className={isActive ? "icon-close" : "icon-arrow-down"}
          onClick={toggleIsActive}
        />
        <StyledProjectImageWrapper>
          <Image
            src={
              image ||
              "https://upload.wikimedia.org/wikipedia/commons/3/3f/Placeholder_view_vector.svg"
            }
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
            {siteLink && (
              <StyledLinkButton
                href={siteLink}
                bgColor="#ffcd57"
                data-testid="website-button"
              >
                <StyledLinkIcon className="icon-globe" />
              </StyledLinkButton>
            )}
          </StyledLinks>
        </StyledContent>
      </StyledBubbleWrapper>
    </StyledBubbleCustom>
  );
};

export default ProjectCard;
