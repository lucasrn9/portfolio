import SectionTitle from "../sectionTitle/SectionTitle";
import Bubble from "../styled/Bubble";
import AcademicExperience from "../academicExperience/AcademicExperience";
import {
  StyledBubbleWrapper,
  StyledContainerCustom,
  StyledSectionCustom,
} from "./certificationsSectionStyles";

const CertificationsSection = () => (
  <StyledSectionCustom id="certifications">
    <StyledContainerCustom>
      <SectionTitle disableBg>Courses and Certificates</SectionTitle>
      <Bubble>
        <StyledBubbleWrapper>
          <AcademicExperience
            title="Oracle One Front End - Oracle & Alura"
            description="6-month training program focused on web development technologies."
            conclusionMonth="aug"
            conclusionYear="2023"
          />
          <AcademicExperience
            title="Google Cybersecurity Certificate - Google & Coursera"
            description="Google Cybersecurity Certification focused on topics such as: Phishing, Social Engineering, Networks, SIEM, SOAR, IDS, IPS, Security Frameworks, Python, and SQL."
            conclusionMonth="apr"
            conclusionYear="2025"
          />
          <AcademicExperience
            title="Bootcamp MRV Front End - Digital Innovation One"
            description="Bootcamp focused on Front-End technologies such as Javascript ES6, ReactJs and state management with Redux"
            conclusionMonth="set"
            conclusionYear="2020"
          />
          <AcademicExperience
            title="Oracle Certified Foundations Associate - Oracle"
            description="Certification on the fundamentals of Oracle Cloud Infrastructure (OCI)."
            conclusionMonth="dez"
            conclusionYear="2023"
          />
          <AcademicExperience
            title="Hackers do Bem Red Team - SENAI & RNP"
            description="320-hour cybersecurity training with an emphasis on Red Team."
            conclusionMonth="set"
            conclusionYear="2024"
          />
          <AcademicExperience
            title="CS50x & CS50 Cybersecurity - Harvard University"
            description="Introduction to Computer Science and Cybersecurity."
            conclusionYear="2024"
          />
        </StyledBubbleWrapper>
      </Bubble>
    </StyledContainerCustom>
  </StyledSectionCustom>
);

export default CertificationsSection;
