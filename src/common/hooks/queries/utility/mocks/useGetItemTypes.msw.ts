import { rest } from "msw";

const getMockedItemTypes = (): string[] => {
  return [
    "MONITOR",
    "TABLE",
    "LAPTOP",
    "DOCKING_STATION",
    "CHAIR",
    "WEBCAM",
    "KEYBOARD",
    "HEADPHONES",
    "OTHER",
  ];
};

export const getMockedItemTypesMSW = () => {
  return [
    rest.get("*/v1/items/item-types", (_req, res, ctx) => {
      return res(
        ctx.delay(1000),
        ctx.status(200, "Mocked item types status"),
        ctx.json(getMockedItemTypes()),
      );
    }),
  ];
};
