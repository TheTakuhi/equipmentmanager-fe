import { rest } from "msw";

const getMockedItemQualityStates = (): string[] => {
  return ["NEW", "GOOD", "SLIGHTLY_USED", "USED", "DAMAGED"];
};

export const getMockedItemQualityStatesMSW = () => {
  return [
    rest.get("*/items/item-quality-states", (_req, res, ctx) => {
      return res(
        ctx.delay(1000),
        ctx.status(200, "Mocked item quality states status"),
        ctx.json(getMockedItemQualityStates()),
      );
    }),
  ];
};
