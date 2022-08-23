import styled, { keyframes } from "styled-components";

const mouseWheel = keyframes`
100%{
    transform: translateY(100%) translateX(-50%) ;
}
`;

export const StyledMouse = styled.span`
  border: 2px solid #454360;
  height: 25.6px;
  width: 20px;
  margin-top: 12px;
  border-radius: 16px;
  display: block;
  position: relative;

  &::after {
    content: "";
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: #454360;
    position: absolute;
    top: 10%;
    right: 0;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    animation: ${mouseWheel} 1s ease infinite;
  }
`;

export const StyledMouseWrapper = styled.span`
  position: absolute;
  bottom: 1%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-height:530px) {
    display: none ;
  }
`;

export const StyledMessage = styled.span`
text-align: center ;
@media (max-width:278px) {
  font-size:0.9rem ;
}
`