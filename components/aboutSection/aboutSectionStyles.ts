import styled from "styled-components";
import StyledSection from "../styled/Section";
import StyledContainer from "../styled/Container";
import { StyledBadge } from "../badge/badgeStyles";

export const StyledSectionCustom = styled(StyledSection)`
  height: auto;

  @media (min-width: 960px) {
    height: 100vh;
  }
`;

export const StyledContainerCustom = styled(StyledContainer)`
  width: 100%;
  height: 100%;
  display:flex;
  justify-content: center ;
  align-items: flex-start ;
  padding-left: 20%;
  padding-right: 10%;

  @media (max-width: 1282px) {
    display: flex;
    align-items: center;
    padding-left: 0;
    padding-right: 0;
    padding-top: 80px;
  }
`;

export const StyledInformation = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 1282px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const StyledSpeechBubble = styled.div`
  width: 65%;
  padding: 1.9rem 1.5rem;
  display: flex;
  flex-direction: column ;
  align-items: flex-start ;
  position: relative ;
  background-color: white;
  border-radius: 20px;
  box-shadow: ${({ theme }) => theme.boxShadow.shadow};

  @media (max-width: 1282px) {
    margin-top: 2.5rem;
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 530px) {
    width: 90%;
  }
`;

export const StyledDescription = styled.p`
width:45%;
margin-bottom: 1rem ;
text-align: justify ;
@media (max-width:1024px) {
width:100%;
margin-bottom:0;
}
`

export const StyledSkillsWrapper = styled.div`
  width: 47%;
  height: 100% ;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position:absolute ;
  top: 0 ;
  padding-top: inherit ;
  padding-bottom: inherit ;
  right:1.5rem ;
  @media (max-width: 1024px) {
    width: 100%;
    position:static ;
    padding-top: 0 ;
    padding-bottom: 0 ;
    margin-left: 0;
    margin-top: 1rem;
    margin-bottom:2rem;
  }
`;

export const StyledBadges = styled.div`
  margin-top: 3rem;
  width: 100%;
  display: flex ;
  flex-direction: column ;
  align-items: center ;
  ${StyledBadge} {
    margin-bottom: 3rem;
  }
  @media (min-width: 960px) {
    flex-direction: row ;
    justify-content: space-around;
    margin-top: 5rem;
  }
  @media (min-width: 1283px) {
    justify-content: space-between;
  }
`;