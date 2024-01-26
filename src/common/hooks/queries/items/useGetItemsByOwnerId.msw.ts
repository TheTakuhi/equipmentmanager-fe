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
      creationDate: "2023-10-31T01:30:00.000-05:00",
      owner: {
        id: "1",
        login: "stevejobs",
        email: "steve.jobs@email.com",
        firstName: "Steve",
        lastName: "Jobs",
        fullName: "Steve Jobs",
        photo: "steve.jpg",
        userRoles: [CustomRole.ADMIN],
        ownedContractIds: ["contract1", "contract2"],
        managedContractIds: ["contract3", "contract4"],
      },
    },
    {
      id: "1234",
      serialCode: "123456789B",
      type: ItemType.DOCKING_STATION,
      comment: "Jako nová chalupa",
      state: ItemState.AVAILABLE,
      qualityState: QualityState.NEW,
      creationDate: "2024-01-01T01:30:00.000-05:00",
      owner: {
        id: "1",
        login: "stevejobs",
        email: "steve.jobs@email.com",
        firstName: "Steve",
        lastName: "Jobs",
        fullName: "Steve Jobs",
        photo: "steve.jpg",
        userRoles: [CustomRole.ADMIN],
        ownedContractIds: ["contract1", "contract2"],
        managedContractIds: ["contract3", "contract4"],
      },
    },
  ];
};

const getMockedItemByIdResponse = (itemId: string): Item => {
  const ret = [...getMockedItems()].filter((o) => o.id === itemId)[0];
  return ret;
};

export const getItemsByOwnerId = () => {
  return [
    rest.get("*/items/by-owner/:itemId", (_req, res, ctx) => {
      const { itemId } = _req.params;
      return res(
        ctx.delay(1000),
        ctx.status(200, "Mocked status - Items by owner ID"),
        ctx.json(getMockedItemByIdResponse(itemId as string)),
      );
    }),
  ];
};
