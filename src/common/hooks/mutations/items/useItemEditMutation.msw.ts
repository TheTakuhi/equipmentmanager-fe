import { rest } from "msw";

import { Item } from "../../../models/item/Item";
import { ItemState } from "../../../models/item/ItemState";
import { ItemType } from "../../../models/item/ItemType";
import { QualityState } from "../../../models/item/QualityState";
import { CustomRole } from "../../../security/model/Role";

const getMockedEditItemResponse = (): Item => {
  return {
    id: "123",
    serialCode: "123",
    type: ItemType.LAPTOP,
    comment: "updated",
    state: ItemState.AVAILABLE,
    qualityState: QualityState.GOOD,
    dateOfCreation: "2023-10-31T01:30:00.000-05:00",
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

export const putEditItem = () => {
  return [
    rest.put("*/items/:itemId", (_req, res, ctx) => {
      return res(
        ctx.delay(1000),
        ctx.status(200, "Mocked status - Item edited"),
        ctx.json(getMockedEditItemResponse()),
      );
    }),
  ];
};
