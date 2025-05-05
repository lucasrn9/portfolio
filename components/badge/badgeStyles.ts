import styled from "styled-components";

export const StyledBadge = styled.div`
  display: flex;
  width: 206px;
  margin-bottom: 3rem;
  &:last-of-type {
    margin-bottom: 0;
  }

  @media (min-width: 960px) {
    margin-bottom: 0;
  }
`;

export const StyledText = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.4rem;
`;

export const StyledNumber = styled.span`
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: 2rem;
  line-height: 1;
`;

export const StyledIcon = styled.span`
  font-size: 2.3rem;
  color: #e2e0e8;
`;
