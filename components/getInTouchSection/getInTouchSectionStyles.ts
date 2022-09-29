import styled from "styled-components";
import StyledContainer from "../styled/Container";
import StyledSection from "../styled/Section";
import Button from "../styled/Button";

export const StyledSectionCustom = styled(StyledSection)`
  height: auto;
`;

export const StyledContainerCustom = styled(StyledContainer)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  padding-top: 80px;
  padding-right: 10%;
  padding-left: 20%;
  padding-bottom: 80px;

  @media (max-width: 1282px) {
    padding-left: 0;
    padding-right: 0;
  }

  @media (min-width: 1283px) {
    align-items: flex-start;
  }
`;

export const StyledSubtitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.6rem;
  text-align: center;
  @media (min-width: 1283px) {
    text-align: left;
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 2.2rem;
  width: 90%;
  max-width: 500px;
  @media (min-width: 1283px) {
    margin-top: 0;
    margin-left: 4.5rem;
    max-width: 490px;
  }
  @media (min-width: 1500px) {
    max-width: 640px;
  }

  @media (min-width: 1600px) {
    max-width: 700px;
  }

  @media (min-width: 1650px) {
    max-width: 780px;
  }
`;
export const StyledInput = styled.input`
  border: none;
  border-radius: 1.5rem;
  padding: 1.2rem;
  margin-bottom: 1.5rem;
  width: 100%;
  box-shadow: ${({ theme }) => theme.boxShadow.shadow};
`;

export const StyledTextArea = styled.textarea`
  border: none;
  border-radius: 1.5rem;
  padding: 1.2rem;
  margin-bottom: 1.5rem;
  resize: none;
`;

export const StyledButtonCustom = styled(Button)`
  align-self: center;
  @media (min-width: 1283px) {
    align-self: flex-start;
  }
`;

export const StyledContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1283px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

export const StyledInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 1500px) {
    flex-direction: row;
    justify-content: space-between;
    input {
      width: 48%;
    }
  }
`;

export const StyledSubtitlesWrapper = styled.div``;

export const StyledParagraph = styled.p`
  padding: 0 1.5rem;
  @media (min-width: 1283px) {
    padding: 0;
  }
`;

export const StyledFormStatusMessage = styled.div<{ success: boolean }>`
  margin-bottom: 1rem;
  color: ${({ success }) => (success ? "green" : "red")};
  text-align: center;
`;