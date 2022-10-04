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
            title="Technologist in Informatics for Business - FATEC SBC"
            description="Algorithms and Programming Logic, Operational Systems, Database Modeling, C++ , JAVA"
            startYear="2019"
            conclusionYear="2022"
            uncompleted
          />
          <AcademicExperience
            title="English - Alt Idiomas"
            description="Write and Reply to Emails, Create Presentations, intermediate level conversations."
            startYear="2017"
            conclusionYear="2022"
          />
          <AcademicExperience
            title="Bootcamp MRV Front End SPA Developer - Digital Innovation One"
            description="Javascript ES6, ReactJs, state management with Redux"
            startYear="2021"
            conclusionYear="2021"
          />
          <AcademicExperience
            title="Excel Intermediate & Excel Advanced - Fundação Bradesco"
            description="Create Reports, Spreadsheets and Dashboards using excel's main functions and filters (20h&30h)"
            startYear="2021"
            conclusionYear="2021"
          />
          <AcademicExperience
            title="Hardware and Computers Maintenance - Líder Centro de Profissões"
            description="Hardware and Software Maintenance, Operational Systems Installation, Formatting
            and Optimization."
            startYear="2018"
            conclusionYear="2020"
          />
          <AcademicExperience
            title="Windows, Office, Typing, Secretariat - OnByte Formação Profissional"
            description="Create Reports, Spreadsheets, DashBoards, Articles and Presentations
            using Microsoft Office's main tools."
            startYear="2018"
            conclusionYear="2019"
          />
        </StyledBubbleWrapper>
      </Bubble>
    </StyledContainerCustom>
  </StyledSectionCustom>
);

export default AcademicSection;
