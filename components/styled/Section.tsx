import styled from "styled-components";

const StyledSection = styled.section`
  width: 100%;
  height: 100vh;
  min-width: fit-content;
  position: relative;

  h1 {
    font-size: ${({ theme }) => theme.fontSizes.h1};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
  }
`;

export default StyledSection;
