import { ChangeEvent, FormEvent, useState } from "react";
import SectionTitle from "../sectionTitle/SectionTitle";
import schema from "../../schemas/getInTouchFormSchema";
import {
  StyledButtonCustom,
  StyledContainerCustom,
  StyledContentWrapper,
  StyledForm,
  StyledFormStatusMessage,
  StyledInput,
  StyledInputWrapper,
  StyledParagraph,
  StyledSectionCustom,
  StyledSubtitle,
  StyledSubtitlesWrapper,
  StyledTextArea,
} from "./getInTouchSectionStyles";

const GetInTouchSection = () => {
  const [formContent, setFormContent] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formStatusMessage, setFormStatusMessage] = useState<string>();

  const handleFormChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    setFormContent((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const submitForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await schema.validate(formContent);
    } catch (err: any) {
      setFormStatusMessage(err.message);
      return;
    }

    const req = await fetch("https://formspree.io/f/mqkjqjge", {
      method: "POST",
      body: JSON.stringify(formContent),
      headers: { Accept: "application/json" },
    });

    const submit = await req.json();
    if (!submit.ok) {
      setFormStatusMessage(
        "Ops! An error occured while trying to submit your form"
      );
      return;
    }

    setFormStatusMessage("Success");
    setFormContent({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <StyledSectionCustom id="getintouch">
      <StyledContainerCustom>
        <SectionTitle>Get In Touch</SectionTitle>
        <StyledContentWrapper>
          <StyledSubtitlesWrapper>
            <StyledSubtitle>Let&apos;s talk about everything!</StyledSubtitle>
            <StyledParagraph>
              Have an opportunity? Send me an email.👋
            </StyledParagraph>
          </StyledSubtitlesWrapper>
          <StyledForm
            onSubmit={(e) => submitForm(e)}
          >
            <StyledInputWrapper>
              <StyledInput
                type="text"
                name="name"
                id="name"
                onChange={(e) => handleFormChange(e)}
                value={formContent.name}
                placeholder="Insert your name"
                required
              />
              <StyledInput
                type="email"
                name="email"
                id="email"
                onChange={(e) => handleFormChange(e)}
                value={formContent.email}
                placeholder="Insert your email"
                required
              />
            </StyledInputWrapper>
            <StyledInput
              type="text"
              name="subject"
              id="subject"
              onChange={(e) => handleFormChange(e)}
              value={formContent.subject}
              placeholder="Insert your Subject"
              required
            />
            <StyledTextArea
              name="message"
              id="message"
              value={formContent.message}
              onChange={(e) => handleFormChange(e)}
              cols={30}
              rows={10}
              placeholder="Write your Message"
              required
            />
            {formStatusMessage && (
              <StyledFormStatusMessage
                success={formStatusMessage === "Success"}
              >
                {formStatusMessage}
              </StyledFormStatusMessage>
            )}
            <StyledButtonCustom type="submit">Send Message</StyledButtonCustom>
          </StyledForm>
        </StyledContentWrapper>
      </StyledContainerCustom>
    </StyledSectionCustom>
  );
};

export default GetInTouchSection;
