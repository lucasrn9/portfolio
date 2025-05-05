import SectionTitle from "../sectionTitle/SectionTitle";
import Bubble from "../styled/Bubble";
import AcademicExperience from "../academicExperience/AcademicExperience";
import {
  StyledBubbleWrapper,
  StyledContainerCustom,
  StyledSectionCustom,
} from "./academicSectionStyles";

const AcademicSection = () => (
  <StyledSectionCustom id="academic">
    <StyledContainerCustom>
      <SectionTitle disableBg>Academic</SectionTitle>
      <Bubble>
        <StyledBubbleWrapper>
          <AcademicExperience
            title="Systems Analysis and Development - International University Center - Uninter"
            description="Algorithms, Programming Logic, OOP, Systems Design, Design Pattern, Operational Systems, Database Modeling, Data Structure, Web and Mobile Programming, Software Engineering, Cloud Computing, DevOps"
            startYear="2025"
            conclusionYear="2027"
            inProgress
          />
          <AcademicExperience
            title="Technologist in Informatics for Business - FATEC SBC"
            description="Algorithms and Programming Logic, Operational Systems, Database Modeling"
            startYear="2019"
            conclusionYear="2021"
            uncompleted
          />
          <AcademicExperience
            title="English - Alt Idiomas"
            description="Able to read and write documentations, participate of technical meetings, take courses and certifications in English."
            startYear="2017"
            conclusionYear="2022"
          />
        </StyledBubbleWrapper>
      </Bubble>
    </StyledContainerCustom>
  </StyledSectionCustom>
);

export default AcademicSection;
