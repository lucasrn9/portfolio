import styled, { css } from "styled-components";
import Bubble from "../styled/Bubble";

export const StyledContent = styled.div<{ isActive: boolean }>`
  width: 100%;
  height: 100%;
  visibility: hidden;
  opacity: 0;
  padding: 1.9rem 1.5rem;
  position: absolute;
  top: 0;
  background-color: hsla(236, 79%, 71%, 98%);
  border-radius: 20px;
  transition: opacity 0.12s ease-in;

  ${({ isActive }) =>
    isActive &&
    css`
      visibility: visible;
      opacity: 1;
    `}
`;

export const StyledBubbleCustom = styled(Bubble)`
  padding: 0;
  height: 270px;

  @media (min-width:426px) {
    height: 290px ;
  }

  @media (min-width: 1024px) {
    width: 100%;
  }

  @media (min-width: 1100px) {
    width: 47%;
        margin-right: 1.8rem;

    &:nth-child(even) {
      margin-right: 0;
    }
  }

  @media (min-width: 1550px) {
    width: 47% ;
    height:320px ;
  }
`;



export const StyledBubbleWrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 240px;
  position: relative;
  * {
    color: white;
  }
  @media (min-width:961px){
  &:hover{
    ${StyledContent}{
      visibility: visible;
      opacity: 1;
    }
  }
}
`;

export const StyledProjectImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
    border-radius: 20px;
    object-fit: cover;
  }
`;

export const StyledTag = styled.span`
  background-color: ${({ theme }) => theme.colors.primary};
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;
  padding: 0.2rem 0.8rem;
  position: absolute;
  top: 0;
`;

export const StyledProjectName = styled.h2`
  font-size: 1.7rem;
  margin: 1rem 0;
  max-height: 35.5px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const StyledProjectDescription = styled.p`
    max-height:110.47px ;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    position:absolute;
    padding-right: 1.5rem ;

    @media (min-width:426px) {
      -webkit-line-clamp: 4;
    }

    @media (min-width:1550px){
      -webkit-line-clamp: 5;
      max-height: 130.47px ;
    }
`

export const StyledLinks = styled.div`
  display: flex;
  position: absolute;
  bottom: 0;
  margin-bottom: 1.9rem;
`;
export const StyledLinkButton = styled.a<{ bgColor: string }>`
  width: 37px;
  height: 37px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 1.5rem;
  background-color: ${({ bgColor }) => bgColor};
`;

export const StyledLinkIcon = styled.span`
  font-size: 1.4rem;
`;

export const StyledToggleContent = styled.span<{ isActive: boolean }>`
  font-size: 1.6rem;
  background-color: ${({ theme }) => theme.colors.primary};
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  position: absolute;
  top: 0;
  z-index: 1;
  left: 50%;
  transform: translateX(-50%);

  ${({ isActive }) =>
    isActive &&
    css`
      background-color: transparent;
      margin-top: 0.3rem;
    `}

    @media (min-width:961px){
      display: none ;
    }
`;