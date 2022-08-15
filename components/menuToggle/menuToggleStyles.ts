import styled from "styled-components";

const StyledMenuToggle = styled.button`
  width: 45px;
  height: 45px;
  border: 2px solid #e4e3ec;
  display: none;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.body};
  @media (max-width: 768px) {
    display: flex;
  }
`;

export default StyledMenuToggle;
