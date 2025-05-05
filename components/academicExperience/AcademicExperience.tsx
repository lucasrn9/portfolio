import AcademicExperienceProps from "../../types/props/AcademicExperienceProps";
import {
  StyledAcademicExperience,
  StyledAcademicIcon,
  StyledTitle,
  StyledUncompleted,
  StyledYears,
} from "./academicExperienceStyles";

const AcademicExperience = ({
  title,
  description,
  startYear,
  conclusionYear,
  conclusionMonth,
  uncompleted,
  inProgress,
}: AcademicExperienceProps) => (
  <StyledAcademicExperience>
    <StyledAcademicIcon className="icon-graduation" />
    <StyledYears>
      {startYear && `${startYear} -`} {conclusionMonth && `${conclusionMonth}/`}
      {conclusionYear}
      {uncompleted && <StyledUncompleted> (uncompleted)</StyledUncompleted>}
      {inProgress && <StyledUncompleted> (in progress)</StyledUncompleted>}
    </StyledYears>
    <StyledTitle>{title}</StyledTitle>
    <p role="paragraph">{description}</p>
  </StyledAcademicExperience>
);

export default AcademicExperience;
