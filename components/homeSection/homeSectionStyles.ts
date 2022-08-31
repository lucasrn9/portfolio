import styled from "styled-components";
import StyledSection from '../styled/Section'

export const StyledSectionCustom = styled(StyledSection)`
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

    &:hover,
    &:focus {
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