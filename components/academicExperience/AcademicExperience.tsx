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
  uncompleted,
}: AcademicExperienceProps) => (
  <StyledAcademicExperience>
    <StyledAcademicIcon className="icon-graduation" />
    <StyledYears>
      {startYear} - {conclusionYear}
      {uncompleted && <StyledUncompleted> (uncompleted)</StyledUncompleted>}
    </StyledYears>
    <StyledTitle>{title}</StyledTitle>
    <p role="paragraph">{description}</p>
  </StyledAcademicExperience>
);

export default AcademicExperience;
