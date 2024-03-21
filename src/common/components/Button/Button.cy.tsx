import Button from "./Button";

describe("<Button />", () => {
  it("renders", () => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    cy.mount(<Button variant="primary" label="cypress test" />);
  });
});
