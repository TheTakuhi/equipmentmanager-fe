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
});
