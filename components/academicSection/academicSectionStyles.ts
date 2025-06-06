import styled from "styled-components";
import StyledContainer from "../styled/Container";
import StyledSection from "../styled/Section";

export const StyledSectionCustom = styled(StyledSection)`
  height: auto;
`;

export const StyledContainerCustom = styled(StyledContainer)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 20%;
  padding-right: 20%;
  padding-top: 80px;

  @media (max-width: 1282px) {
    padding-left: 0;
    padding-right: 0;
  }
`;

export const StyledBubbleWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 1rem;
`;
