import styled from "styled-components";

const Section = styled.section`
  padding-top: 7rem;
  padding-bottom: 2rem;

  h1 {
    font-size: ${({ theme }) => theme.fontSizes.h1};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    margin-left: 0.875rem;
    margin-bottom: 3.75rem;
    position: relative;
  }

  h1::before {
    content: "";
    position: absolute;
    left: -0.875rem;
    top: -0.875rem;
    background: url(../../assets/dots-bg.svg);
    height: 2.25rem;
    width: 2.25rem;
  }
`;

export default Section;
