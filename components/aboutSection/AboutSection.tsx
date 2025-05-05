import Image from "next/image";
import styles from "./aboutSection.module.css";
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
  StyledButtonsContainer,
} from "./aboutSectionStyles";
import AboutSectionProps from "../../types/props/AboutSectionProps";

const AboutSection = ({
  projectsCompleted,
  githubStars,
}: AboutSectionProps) => {
  const openCurriculum = (path:string) => {
    window.open(path);
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
              Hey there! I&apos;m Lucas, a Brazilian software developer with
              solid foundation on web development, mobile, and cybersecurity. My
              focus is to create high-performance applications, with great user
              experience, and of course, applications that are SECURE. The
              technologies and frameworks that I feel more comfortable with at
              the moment are ReactJS, NextJs, ReactNative, NodeJs, Python, and
              MySQL, but I&apos;m a very curious person who has already tried
              many other things and is always up to learn new technologies.
            </StyledDescription>
            <StyledSkillsWrapper>
              <Skill
                name="ReactJs/NextJs"
                percentage={75}
                barColor="#35322c"
                barBgColor="#f2f0f4"
              />
              <Skill
                name="ReactNative"
                percentage={70}
                barColor="#61DBFB"
                barBgColor="#f2f0f4"
              />
              <Skill
                name="Typescript"
                percentage={70}
                barColor="#3178c6"
                barBgColor="#f2f0f4"
              />
              <Skill
                name="Javascript"
                percentage={75}
                barColor="#ffcf48"
                barBgColor="#f2f0f4"
              />
              <Skill
                name="HTML"
                percentage={75}
                barColor="#ff6d5c"
                barBgColor="#f2f0f4"
              />
              <Skill
                name="CSS"
                percentage={65}
                barColor="#6a72f7"
                barBgColor="#f2f0f4"
              />
              <Skill
                name="NodeJs"
                percentage={60}
                barColor="#68A063"
                barBgColor="#f2f0f4"
              />
              <Skill
                name="SQL"
                percentage={60}
                barColor="#f29111"
                barBgColor="#f2f0f4"
              />
            </StyledSkillsWrapper>
            <StyledButtonsContainer>
              <StyledButton onClick={()=>openCurriculum("/Lucas_Ribeiro_Curriculo.pdf")} type="button">
                Check My CV
              </StyledButton>
              <StyledButton
                onClick={()=>openCurriculum("/Lucas_Ribeiro_Curriculo_ATS.pdf")}
                type="button"
                className={styles.atsCVBtn}
              >
                Check My ATS CV
              </StyledButton>
            </StyledButtonsContainer>
          </StyledSpeechBubble>
        </StyledInformation>
        <StyledBadges>
          <Badge
            name="Projects Completed"
            number={projectsCompleted}
            iconClass="icon-fire"
          />
          <Badge name="Cups of Coffee" number={5670} iconClass="icon-cup" />
          <Badge
            name="Github Stars"
            number={githubStars}
            iconClass="icon-star"
          />
        </StyledBadges>
      </StyledContainerCustom>
    </StyledSectionCustom>
  );
};
export default AboutSection;
