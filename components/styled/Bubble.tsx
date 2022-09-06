import styled from "styled-components";

const Bubble = styled.div`
  width: 65%;
  padding: 1.9rem 1.5rem;
  background-color: ${({ theme }) => theme.colors.bubbles};
  border-radius: 20px;
  box-shadow: ${({ theme }) => theme.boxShadow.shadow};

  @media (max-width: 530px) {
    width: 90%;
  }
`;

export default Bubble;
