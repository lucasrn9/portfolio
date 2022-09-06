import styled from "styled-components";

export const StyledAcademicExperience = styled.div`
  border-left: 1px solid ${({ theme }) => theme.colors.primary};
  min-height: 100px;
  padding-bottom:2.5rem ;
  padding-left: 2.5rem;
  position: relative;
  margin-bottom:0.5rem ;
`;

export const StyledAcademicIcon = styled.span`
  font-size: 1.8rem;
  color: ${({ theme }) => theme.colors.primary};
  position: absolute;
  top: 0;
  left: 0;
  transform: translateX(-50%);
  background-color: ${({ theme }) => theme.colors.bubbles};
  padding-bottom: 0.5rem;
`;

export const StyledYears = styled.span`
  position: relative;
  top: -3px;
  color: #97969e;
  font-size:0.9rem ;
`;

export const StyledUncompleted = styled.span`
  font-size: 0.8rem;
`;

export const StyledTitle = styled.h2`
  font-size: 1.2rem;
  margin: 0.2rem 0;
`;