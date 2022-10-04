import styled, { keyframes } from "styled-components";
import StyledSection from '../styled/Section'

export const StyledSectionCustom = styled(StyledSection)`
height: 100% ;
min-height:480px ;
`

export const StyledSocialMedia = styled.div`
  font-size: 1.5rem;
  margin: 1.1rem 0;

  a {
    margin-right: 1.5rem;
    transition: ${({ theme }) => theme.transitions.color};

    &:last-of-type {
      margin-right: 0;
    }

    &,
    &:visited {
      color: ${({ theme }) => theme.colors.secondary};
    }

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export const StyledImageWrapper = styled.div`
  margin-bottom: 1rem;
`;

export const StyledName = styled.h1`
  text-align: center;
`;

export const StyledOccupation = styled.span`
  margin-top: 0.4rem;
  text-align: center;
`;

const buttonPush = keyframes`
50%{
    transform: scale(0.8) ;
}
100%{
    transform:scale(1) ;
}
`;

export const StyledContactMe = styled.a`
  padding: 0.75rem 2rem;
  line-height: 1;
  border-radius: 1.875rem;
  box-shadow: 0 0 1px rgb(0 0 0 / 0%);
  border: 1px solid transparent;
  color: #fff;
  display: inline-block;
  color: white;
  background-color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.fontWeights.bold};

  &:visited{
    color:white;
  }

  &:hover {
    animation: ${buttonPush} 0.3s linear 1;
  }

  @media (max-width: 365px) {
    font-size: 0.9rem;
    padding: 0.75rem 1.3rem;
  }
`