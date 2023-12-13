import { rest } from "msw";

import { Item } from "../../../models/item/Item";
import { ItemState } from "../../../models/item/ItemState";
import { ItemType } from "../../../models/item/ItemType";
import { QualityState } from "../../../models/item/QualityState";
import { CustomRole } from "../../../security/model/Role";

const getMockedItems = (): Item[] => {
  return [
    {
      id: "123",
      serialCode: "123456789A",
      type: ItemType.CHAIR,
      comment: "Od polívky a kečupu",
      state: ItemState.BORROWED,
      qualityState: QualityState.SLIGHTLY_USED,
      dateOfCreation: "2023-10-31T01:30:00.000-05:00",
      managerOwner: {
        id: "01ef73d8-70b8-4bf9-953d-b69f32c1762c",
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
    },
  ];
};

const getMockedItemByIdResponse = (itemId: string): Item => {
  const ret = [...getMockedItems()].filter((o) => o.id === itemId)[0];
  return ret;
};

export const getItemById = () => {
  return [
    rest.get("*/items/:itemId", (_req, res, ctx) => {
      const { itemId } = _req.params;
      return res(
        ctx.delay(1000),
        ctx.status(200, "Mocked status - Item by ID"),
        ctx.json(getMockedItemByIdResponse(itemId as string)),
      );
    }),
  ];
};
