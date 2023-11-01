import { DateTime } from "luxon";
import { rest } from "msw";

import { Item } from "../../../models/item/Item";
import { ItemType } from "../../../models/item/ItemType";
import { QualityState } from "../../../models/item/QualityState";
import { State } from "../../../models/item/State";
import { CustomRole } from "../../../security/model/Role";

const getMockedDeleteItemResponse = (): Item => {
  return {
    id: "123",
    serialCode: "123",
    type: ItemType.LAPTOP,
    comment: "",
    state: State.AVAILABLE,
    qualityState: QualityState.DAMAGED,
    dateOfCreation: DateTime.now().minus(24),
    managerOwner: {
      id: "01ef73d8-70b8-4bf9-953d-b69f32c1762c",
      personalNumber: "123456",
      ldapId: "01ef73d8-70b8-4bf9-953d-b69f32c1762c",
      login: "theshrek",
      email: "shrek@swamp.ffa",
      firstName: "Shrek",
      lastName: "Joe",
      fullName: "Joe Shrek",
      photo: "",
      userRoles: [CustomRole.ADMIN],
      ownedContractIds: [""],
      managedContractIds: [""],
    },
  };
};

export const postCreateItem = () => {
  return [
    rest.post("*/items/:itemId", (_req, res, ctx) => {
      return res(
        ctx.delay(1000),
        ctx.status(200, "Mocked status - Item created"),
        ctx.json(getMockedDeleteItemResponse()),
      );
    }),
  ];
};
