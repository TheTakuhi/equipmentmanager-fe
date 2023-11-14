import { rest } from "msw";

export const postUser = () => {
  return [
    rest.post("*/users/", (_req, res, ctx) => {
      return res(
        ctx.delay(1000),
        ctx.status(200, "Mocked status - User created"),
      );
    }),
  ];
};
