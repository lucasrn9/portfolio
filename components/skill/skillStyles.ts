import styled from "styled-components";

export const StyledSkill = styled.div`
  width: 100%;
`;

export const StyledInformation = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const StyledName = styled.span`
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
`;

export const StyledProgressbar = styled.div<{
  barBgColor: string;
  barColor: string;
  percentage: number;
}>`
  width: 100%;
  height: 8px;
  background-color: ${({ barBgColor }) => barBgColor};
  border-radius: 20px;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: ${({ barColor }) => barColor};
    border-radius: 20px;
    width: ${({ percentage }) => percentage}%;
    height: 100%;
  }
`;