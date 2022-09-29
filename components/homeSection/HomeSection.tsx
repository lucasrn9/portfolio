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
  StyledContactMe,
} from "./homeSectionStyles";
import StyledContainer from "../styled/Container";
import Shapes from "../shapes/Shapes";
import Mouse from "../mouse/Mouse";

const HomeSection = () => (
  <StyledSectionCustom id="home">
    <Shapes />
    <StyledContainer>
      <StyledImageWrapper>
        <Image src={avatar} alt="lucas ribeiro" />
      </StyledImageWrapper>
      <StyledName>Lucas Ribeiro</StyledName>
      <StyledOccupation>I&apos;m a Front-End developer</StyledOccupation>
      <StyledSocialMedia>
        <a href="https://github.com/lucasrn9" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          href="https://www.linkedin.com/in/lucas-ribeiro-85487920b/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          href="https://mail.google.com/mail/u/0/?fs=1&to=lucas.rn00@gmail.com&tf=cm"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </StyledSocialMedia>
      <StyledContactMe href="#getintouch">Contact Me</StyledContactMe>
      <Mouse />
    </StyledContainer>
  </StyledSectionCustom>
);

export default HomeSection;
