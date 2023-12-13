import { rest } from "msw";

import { ItemState } from "../../../models/item/ItemState";
import { ItemType } from "../../../models/item/ItemType";
import { QualityState } from "../../../models/item/QualityState";
import { Loan } from "../../../models/loan/Loan";
import { CustomRole } from "../../../security/model/Role";

const getMockedPostLoanCreation = (): Loan => {
  return {
    id: "123",
    dateOfLending: "2023-08-31T01:30:00.000-05:00",
    dateOfReturning: "2024-10-31T01:30:00.000-05:00",
    item: {
      id: "123",
      serialCode: "123",
      type: ItemType.LAPTOP,
      comment: "",
      state: ItemState.AVAILABLE,
      qualityState: QualityState.GOOD,
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
  };
};

export const postCreateLoan = () => {
  return [
    rest.post("*/loans", (_req, res, ctx) => {
      return res(
        ctx.delay(1000),
        ctx.status(200, "Mocked status - Loan created"),
        ctx.json(getMockedPostLoanCreation()),
      );
    }),
  ];
};
