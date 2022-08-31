import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import avatar from "../../public/assets/avatar-1.svg";
import {
  StyledSectionCustom,
  StyledImageWrapper,
  StyledName,
  StyledOccupation,
  StyledSocialMedia,
} from "./homeSectionStyles";
import StyledContainer from "../styled/Container";
import StyledButton from "../styled/Button";
import Shapes from "../shapes/Shapes";
import Mouse from "../mouse/Mouse";

const HomeSection = () => (
  <StyledSectionCustom>
    <Shapes />
    <StyledContainer>
      <StyledImageWrapper>
        <Image src={avatar} alt="lucas ribeiro" />
      </StyledImageWrapper>
      <StyledName>Lucas Ribeiro</StyledName>
      <StyledOccupation>I&apos;m a Front-End developer</StyledOccupation>
      <StyledSocialMedia>
        <a href="https://github.com/lucasrn9">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://www.linkedin.com/in/lucas-ribeiro-85487920b/">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="#contact">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </StyledSocialMedia>
      <StyledButton type="button">Contact Me</StyledButton>
      <Mouse />
    </StyledContainer>
  </StyledSectionCustom>
);

export default HomeSection;
