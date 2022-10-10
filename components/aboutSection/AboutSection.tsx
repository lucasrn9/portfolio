import Image from "next/image";
import StyledButton from "../styled/Button";
import avatarTwo from "../../public/assets/avatar-2.svg";
import Skill from "../skill/Skill";
import Badge from "../badge/Badge";
import SectionTitle from "../sectionTitle/SectionTitle";
import {
  StyledBadges,
  StyledContainerCustom,
  StyledDescription,
  StyledInformation,
  StyledSectionCustom,
  StyledSkillsWrapper,
  StyledSpeechBubble,
} from "./aboutSectionStyles";

const AboutSection = () => {
  const openCurriculum = () => {
    window.open("/curriculum-lucas-ribeiro.pdf");
  };
  return (
    <StyledSectionCustom id="about">
      <StyledContainerCustom>
        <SectionTitle>About Me</SectionTitle>
        <StyledInformation>
          <div>
            <Image src={avatarTwo} alt="about me" />
          </div>
          <StyledSpeechBubble>
            <StyledDescription role="paragraph">
              I am Lucas Ribeiro Nunes, a web developer from São Bernardo do
              Campo, Brazil. I have experience in front-end development with
              ReactJs and NextJs
            </StyledDescription>
            <StyledSkillsWrapper>
              <Skill
                name="ReactJs/NextJs"
                percentage={75}
                barColor="#ffcf48"
                barBgColor="#f2f0f4"
              />
              <Skill
                name="HTML"
                percentage={70}
                barColor="#ff6d5c"
                barBgColor="#f2f0f4"
              />
              <Skill
                name="CSS"
                percentage={65}
                barColor="#6a72f7"
                barBgColor="#f2f0f4"
              />
            </StyledSkillsWrapper>
            <StyledButton onClick={openCurriculum} type="button">
              Download CV
            </StyledButton>
          </StyledSpeechBubble>
        </StyledInformation>
        <StyledBadges>
          <Badge name="Projects Completed" number="198" iconClass="icon-fire" />
          <Badge name="Cups of Coffee" number="5670" iconClass="icon-cup" />
          <Badge name="Github Stars" number="0" iconClass="icon-star" />
        </StyledBadges>
      </StyledContainerCustom>
    </StyledSectionCustom>
  );
};
export default AboutSection;
