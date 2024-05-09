import { Icon } from "@chakra-ui/react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import Button from "./Button";

describe("Button", () => {
  it("renders default label", () => {
    render(<Button variant="primary" label="test-render" />);

    // Use screen.getByText to query the button element by its text content
    // Expect the button element to be defined
    const buttonElement = screen.getByText("test-render");
    expect(buttonElement).toBeDefined();

    // Access the attributes directly from the DOM element
    // Expect the data-test-id attribute to be equal to the expected value
    const dataTestIdAttribute = buttonElement.getAttribute("data-testid");
    expect(dataTestIdAttribute).toBe("button-text-label-test");

    // Check if buttonInstance is not null or undefined before accessing properties
    const buttonInstance = buttonElement.closest("Button");
    expect(buttonInstance).toBeDefined();

    // If buttonInstance is defined, expect the label property to be "test-render"
    if (buttonInstance) {
      expect(buttonInstance).toHaveProperty("label", "test-render");
    }
  });
  it("renders button with outlined secondary variant", () => {
    render(
      <Button
        variant="secondary"
        colorScheme="secondary"
        label="test-outlined"
      />,
    );

    const buttonElement = screen.getByText("test-outlined");
    expect(buttonElement).toBeDefined();

    const buttonInstance = buttonElement.closest("Button");
    expect(buttonInstance).toBeDefined();

    if (buttonInstance) {
      // Check if variant is "outline" and colorScheme is "secondary"
      expect(buttonInstance).toHaveProperty("variant", "outline");
      expect(buttonInstance).toHaveProperty("colorScheme", "secondary");
    }
  });
  it("renders button as a link", () => {
    render(<Button as="a" variant="primary" label="test-link" />);

    const buttonElement = screen.getByText("test-link");
    expect(buttonElement).toBeDefined();

    const buttonInstance = buttonElement.closest("Button");
    expect(buttonInstance).toBeDefined();

    if (buttonInstance) {
      // Check if button is rendered as an anchor element
      expect(buttonInstance.tagName.toLowerCase()).toBe("a");
    }
  });
  it("renders button as disabled when disabled prop is true", () => {
    render(<Button variant="primary" label="test-disabled" disabled />);

    const buttonElement = screen.getByText("test-disabled");
    expect(buttonElement).toBeDefined();

    const buttonInstance = buttonElement.closest("Button");
    expect(buttonInstance).toBeDefined();

    if (buttonInstance) {
      // Check if button is disabled
      expect(buttonInstance).toHaveProperty("disabled", true);
    }
  });
  it("renders button with start icon", () => {
    const startIcon = <Icon name="star" />;
    render(
      <Button variant="primary" label="test-icon" startIcon={startIcon} />,
    );

    const buttonElement = screen.getByText("test-icon");
    expect(buttonElement).toBeDefined();

    const buttonInstance = buttonElement.closest("Button");
    expect(buttonInstance).toBeDefined();

    if (buttonInstance) {
      // Check if startIcon is rendered inside the button
      const startIconElement = buttonElement.querySelector("Icon");
      expect(startIconElement).toBeDefined();
    }
  });
});
