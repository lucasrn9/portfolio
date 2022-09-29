/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/alt-text */
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import renderWithTheme from "../../utils/tests/renderWithTheme";
import GetInTouchSection from "./GetInTouchSection";

jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => <img {...props} />,
}));

describe("GetInTouchSection", () => {
  it("should render the section title", () => {
    renderWithTheme(<GetInTouchSection />);
    const title = screen.getByText(/get in touch/i);
    expect(title).toBeVisible();
  });

  it("should have the correct inputs in the contact form", () => {
    renderWithTheme(<GetInTouchSection />);
    const name = screen.getByPlaceholderText("Insert your name");
    const email = screen.getByPlaceholderText("Insert your email");
    const subject = screen.getByPlaceholderText("Insert your Subject");
    const message = screen.getByPlaceholderText("Write your Message");
    expect(name).toBeVisible();
    expect(email).toBeVisible();
    expect(subject).toBeVisible();
    expect(message).toBeVisible();
  });

  it("all inputs in the contact form should be writable", async () => {
    renderWithTheme(<GetInTouchSection />);
    const user = userEvent.setup();
    const name = screen.getByPlaceholderText("Insert your name");
    const email = screen.getByPlaceholderText("Insert your email");
    const subject = screen.getByPlaceholderText("Insert your Subject");
    const message = screen.getByPlaceholderText("Write your Message");
    await user.type(name, "test name");
    await user.type(email, "testemail@test.com");
    await user.type(subject, "test subject");
    await user.type(message, "test message");
    expect(name).toHaveValue("test name");
    expect(email).toHaveValue("testemail@test.com");
    expect(subject).toHaveValue("test subject");
    expect(message).toHaveValue("test message");
  });

  it("should have a send message button in the contact form", () => {
    renderWithTheme(<GetInTouchSection />);
    const button = screen.getByRole("button", { name: "Send Message" });
    expect(button).toBeVisible();
  });

  it("should display an error message if the field 'name' doesn't pass the yup validations", async () => {
    renderWithTheme(<GetInTouchSection />);
    const user = userEvent.setup();
    const name = screen.getByPlaceholderText("Insert your name");
    const email = screen.getByPlaceholderText("Insert your email");
    const subject = screen.getByPlaceholderText("Insert your Subject");
    const message = screen.getByPlaceholderText("Write your Message");
    const button = screen.getByRole("button", { name: "Send Message" });
    await user.type(name, "a");
    await user.type(email, "test@rn9.com");
    await user.type(subject, "test subject");
    await user.type(message, "test message");
    await user.click(button);
    const errorMsg = screen.getByText("name must be at least 2 characters");
    expect(errorMsg).toBeVisible();
  });

  it("should display an error message if the field 'email' doesn't pass the yup validations", async () => {
    renderWithTheme(<GetInTouchSection />);
    const user = userEvent.setup();
    const name = screen.getByPlaceholderText("Insert your name");
    const email = screen.getByPlaceholderText("Insert your email");
    const subject = screen.getByPlaceholderText("Insert your Subject");
    const message = screen.getByPlaceholderText("Write your Message");
    const button = screen.getByRole("button", { name: "Send Message" });
    await user.type(name, "aa");
    await user.type(email, "test@rn9.c");
    await user.type(subject, "test subject");
    await user.type(message, "test message");
    await user.click(button);
    const errorMsg = screen.getByText("insert a valid email");
    expect(errorMsg).toBeVisible();
  });

  it("should display an error message if the field 'subject' doesn't pass the yup validations", async () => {
    renderWithTheme(<GetInTouchSection />);
    const user = userEvent.setup();
    const name = screen.getByPlaceholderText("Insert your name");
    const email = screen.getByPlaceholderText("Insert your email");
    const subject = screen.getByPlaceholderText("Insert your Subject");
    const message = screen.getByPlaceholderText("Write your Message");
    const button = screen.getByRole("button", { name: "Send Message" });
    await user.type(name, "aa");
    await user.type(email, "test@rn9.com");
    await user.type(
      subject,
      "Il3lKWug8NHujPZ9MGJ5GhSC4UNWDOH4318RqiDHLZvjynmM96SvkOCikFt1UVQNLGi1VfazDCWNhYKo8G4ARPeHrz2uwvRFhlshz"
    );
    await user.type(message, "test message");
    await user.click(button);
    const errorMsg = screen.getByText("subject must be at most 100 characters");
    expect(errorMsg).toBeVisible();
  });

  it("should display an error message if the field 'message' doesn't pass the yup validations", async () => {
    renderWithTheme(<GetInTouchSection />);
    const user = userEvent.setup();
    const name = screen.getByPlaceholderText("Insert your name");
    const email = screen.getByPlaceholderText("Insert your email");
    const subject = screen.getByPlaceholderText("Insert your Subject");
    const message = screen.getByPlaceholderText("Write your Message");
    const button = screen.getByRole("button", { name: "Send Message" });
    await user.type(name, "aa");
    await user.type(email, "test@rn9.com");
    await user.type(subject, "test subject");
    await user.type(
      message,
      "VP8Fn9M3he1XhLg4kpd5wDFKTIVfkKWgqXSL4UxrUBmqhyBCsTGFSaAwGf6LFXaWyLy8Odjyp5CQEiXBCuwUC1UUY72CZzJ7uzuEsZ5VTvzt0b43I0VIkeCuT5Zkj4rUgGDbeGFACJpK1VntDWUM4qhAnrPVoQ3D57Lx46dK08kRQiBzSZHejZxJARhgOXctQVuiUbjCwqPKcLddebE3BY8ZblfAafCCaxxmD9bGOEI4VpXyOtG0bUuPnPjgsu8MHx2QrmNVn7VTpGS2p6U9YDswv4YQNgY4We7bZnycSt50wytV2rQW9leYlNuex42GxxblYeJwvB4J59os9Q7w3pKI7VgevNSd7RWjpFf4VHezur20xK5UwDa3DfZAQ6KXrJVvDOehRIjzFc8ZZOIKA1WDh0dQOmqKEmrnStupCqzPnKw2LfcmcwDRMbEmtM99DOHZrV2JNTPRwZb38kxF1oYwlWN134yzH6IqHJBZkYkGzaXesSTeR"
    );
    await user.click(button);
    const errorMsg = screen.getByText("message must be at most 500 characters");
    expect(errorMsg).toBeVisible();
  });

  it("should display an success message if the submit process is completed", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ ok: true }),
      })
    ) as jest.Mock;
    renderWithTheme(<GetInTouchSection />);
    const user = userEvent.setup();
    const name = screen.getByPlaceholderText("Insert your name");
    const email = screen.getByPlaceholderText("Insert your email");
    const subject = screen.getByPlaceholderText("Insert your Subject");
    const message = screen.getByPlaceholderText("Write your Message");
    const button = screen.getByRole("button", { name: "Send Message" });
    await user.type(name, "test");
    await user.type(email, "test@rn9.com");
    await user.type(subject, "test subject");
    await user.type(message, "test message");
    await user.click(button);
    const successMsg = await screen.findByText("Success");
    expect(successMsg).toBeVisible();
  });

  it("should display a message with color:red if there is an errorMsg", async () => {
    renderWithTheme(<GetInTouchSection />);
    const user = userEvent.setup();
    const name = screen.getByPlaceholderText("Insert your name");
    const email = screen.getByPlaceholderText("Insert your email");
    const subject = screen.getByPlaceholderText("Insert your Subject");
    const message = screen.getByPlaceholderText("Write your Message");
    const button = screen.getByRole("button", { name: "Send Message" });
    await user.type(name, "a");
    await user.type(email, "test@rn9.com");
    await user.type(subject, "test subject");
    await user.type(message, "test message");
    await user.click(button);
    const errorMsg = screen.getByText("name must be at least 2 characters");
    expect(errorMsg).toHaveStyle("color: red");
  });

  it("should display a message with color:green if there is a successMsg", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ ok: true }),
      })
    ) as jest.Mock;
    renderWithTheme(<GetInTouchSection />);
    const user = userEvent.setup();
    const name = screen.getByPlaceholderText("Insert your name");
    const email = screen.getByPlaceholderText("Insert your email");
    const subject = screen.getByPlaceholderText("Insert your Subject");
    const message = screen.getByPlaceholderText("Write your Message");
    const button = screen.getByRole("button", { name: "Send Message" });
    await user.type(name, "test");
    await user.type(email, "test@rn9.com");
    await user.type(subject, "test subject");
    await user.type(message, "test message");
    await user.click(button);
    const successMsg = await screen.findByText("Success");
    expect(successMsg).toHaveStyle("color: green");
  });
});
