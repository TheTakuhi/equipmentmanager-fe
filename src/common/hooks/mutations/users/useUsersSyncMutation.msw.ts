import { rest } from "msw";

const getMockedSyncResponse = () => {
  return {
    sync: true,
  };
};

export const syncUserMSW = () => {
  return [
    rest.post("*/users/sync", (_req, res, ctx) => {
      return res(
        ctx.delay(1000),
        ctx.status(200, "Mocked status - User sync from AD"),
        ctx.json(getMockedSyncResponse()),
      );
    }),
  ];
};
