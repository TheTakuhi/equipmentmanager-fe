import { rest } from "msw";

const getMockedBeVersion = (): string => {
  return "0.0.1.beta";
};

export const getBeVersionMSW = () => {
  return [
    rest.get("*/utility/be-version", (_req, res, ctx) => {
      return res(
        ctx.delay(1000),
        ctx.status(200, "Mocked status"),
        ctx.json(getMockedBeVersion()),
      );
    }),
  ];
};
