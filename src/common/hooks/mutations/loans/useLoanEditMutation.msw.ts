import { DateTime } from "luxon";
import { rest } from "msw";

import { Loan } from "../../../models/loan/Loan";
import { CustomRole } from "../../../security/model/Role";

const getMockedEditLoanResponse = (): Loan => {
  return {
    id: "123",
    dateOfLending: DateTime.local(),
    dateOfReturning: DateTime.local().plus(1),
    item: {
      id: "123",
      serialCode: "123",
      type: ["LAPTOP"],
      comment: "",
      state: ["AVAILABLE"],
      qualityState: ["GOOD"],
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
    },
    lender: {
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

export const getEditLoan = () => {
  return [
    rest.put("*/loans/:loanId", (_req, res, ctx) => {
      return res(
        ctx.delay(1000),
        ctx.status(200, "Mocked status - Loan edited"),
        ctx.json(getMockedEditLoanResponse()),
      );
    }),
  ];
};
