import styled, { css } from "styled-components";
import StyledContainer from "../styled/Container";
import StyledSection from "../styled/Section";
import { StyledBubbleCustom } from "../projectCard/projectCardStyles";

export const StyledSectionCustom = styled(StyledSection)`
  height: auto;
`;

export const StyledContainerCustom = styled(StyledContainer)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  padding-top: 80px;
  padding-right: 10%;
  padding-left: 20%;

  @media (max-width: 1282px) {
    padding-left: 0;
    padding-right: 0;
  }

  @media (min-width: 1283px) {
    align-items: flex-start;
  }
`;

export const StyledFilters = styled.div`
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-left: 20px;

  @media (min-width: 1283px) {
    justify-content: flex-start;
  }
`;

export const StyledFilterOption = styled.span<{ selected?: boolean }>`
  font-size: 1.2rem;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  margin-right: 20px;
  color: #625f81;
  border-radius: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 0.7rem;
  margin-top: 1rem;
  cursor: pointer;
  text-align: center;

  &:focus-visible {
    background-color: ${({ theme }) => theme.colors.tertiary};
    color: white;
  }

  ${({ selected }) =>
    selected &&
    css`
      background-color: ${({ theme }) => theme.colors.tertiary};
      color: white;
    `}
`;

export const StyledProjects = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
  ${StyledBubbleCustom} {
    margin-top: 4rem;
  }

  @media (min-width: 1024px) {
    width: 66%;
    flex-direction: row;
    flex-wrap: wrap;
  }

  @media (min-width: 1283px) {
    width: 100%;
  }
`;

export const StyledViewMoreButton = styled.button`
  background-color: transparent;
  font-size: 1.2rem;
  border-radius: 2rem;
  padding: 0 0.7rem;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: #625f81;
  text-transform: capitalize;
  cursor: pointer;
  margin: 0 auto;

  &:focus-visible{
    border: 2px solid black ;
  }

  @media (min-width: 1283px) {
    transform: translateX(-65%);
  }
  @media (min-width: 1440px) {
    transform: translateX(-75%);
  }
  @media (min-width: 1550px) {
    transform: translateX(-50%);
  }
`;

export const StyledProjectsMessage = styled.div`
margin-top: 1rem ;
`;