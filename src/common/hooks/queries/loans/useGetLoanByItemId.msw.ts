import { rest } from "msw";

import { ItemState } from "../../../models/item/ItemState";
import { ItemType } from "../../../models/item/ItemType";
import { QualityState } from "../../../models/item/QualityState";
import { Loan } from "../../../models/loan/Loan";
import { CustomRole } from "../../../security/model/Role";

const getMockedLoans = (): Loan[] => {
  return [
    {
      id: "123",
      dateOfLending: "2023-10-31T01:30:00.000-05:00",
      dateOfReturning: "2024-10-31T01:30:00.000-05:00",
      item: {
        id: "123",
        serialCode: "123456789A",
        type: ItemType.CHAIR,
        comment: "Od polívky a kečupu",
        state: ItemState.BORROWED,
        qualityState: QualityState.SLIGHTLY_USED,
        creationDate: "2023-10-31T01:30:00.000-05:00",
        owner: {
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
      lender: {
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

const getMockedItemByIdResponse = (itemId: string): Loan => {
  const ret = [...getMockedLoans()].filter((o) => o.id === itemId)[0];
  return ret;
};

export const getLoanByItemId = () => {
  return [
    rest.get("*/loans/:itemId", (_req, res, ctx) => {
      const { itemId } = _req.params;
      return res(
        ctx.delay(1000),
        ctx.status(200, "Mocked status - Loan by Item ID"),
        ctx.json(getMockedItemByIdResponse(itemId as string)),
      );
    }),
  ];
};
