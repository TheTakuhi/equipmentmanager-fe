import { rest } from "msw";

const getMockedItemStates = (): string[] => {
  return ["AVAILABLE", "BORROWED", "DISCARDED"];
};

export const getMockedItemStatesMSW = () => {
  return [
    rest.get("*/items/item-states", (_req, res, ctx) => {
      return res(
        ctx.delay(1000),
        ctx.status(200, "Mocked item states status"),
        ctx.json(getMockedItemStates()),
      );
    }),
  ];
};
