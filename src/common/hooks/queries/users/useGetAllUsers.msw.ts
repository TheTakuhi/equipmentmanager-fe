import { rest } from "msw";

import { User } from "../../../models/user/User";
import { ADMIN, MANAGER } from "../../../security/model/Role";

const getMockedUsers = (): User[] => {
  return [
    {
      id: "1",
      personalNumber: "123456789",
      ldapId: "1234543",
      login: "stevejobs",
      email: "steve.jobs@email.com",
      firstName: "Steve",
      lastName: "Jobs",
      fullName: "Steve Jobs",
      photo: "steve.jpg",
      userRoles: [ADMIN],
      ownedContractIds: ["contract1", "contract2"],
      managedContractIds: ["contract3", "contract4"],
    },
    {
      id: "2",
      personalNumber: "987654321",
      ldapId: "1554543",
      login: "janedoe",
      email: "jane.doe@email.com",
      firstName: "Jane",
      lastName: "Doe",
      fullName: "Jane Doe",
      photo: "jane.jpg",
      userRoles: [MANAGER],
      ownedContractIds: ["contract2"],
      managedContractIds: ["contract4", "contract5"],
    },
    {
      id: "3",
      personalNumber: "555555555",
      ldapId: "12345333",
      login: "johnsmith",
      email: "john.smith@email.com",
      firstName: "John",
      lastName: "Smith",
      fullName: "John Smith",
      photo: "john.jpg",
      userRoles: [MANAGER],
      ownedContractIds: [],
      managedContractIds: ["contract1", "contract3"],
    },
    {
      id: "4",
      personalNumber: "777777777",
      ldapId: "4434543",
      login: "maryjane",
      email: "mary.jane@email.com",
      firstName: "Mary",
      lastName: "Jane",
      fullName: "Mary Jane",
      photo: "mary.jpg",
      userRoles: [],
      ownedContractIds: [],
      managedContractIds: [],
    },
    {
      id: "5",
      personalNumber: "111111111",
      ldapId: "5554543",
      login: "bobbrown",
      email: "bob.brown@email.com",
      firstName: "Bob",
      lastName: "Brown",
      fullName: "Bob Brown",
      photo: "bob.jpg",
      userRoles: [MANAGER],
      ownedContractIds: ["contract5"],
      managedContractIds: [],
    },
  ];
};

export const getUsersMSW = () => {
  return [
    rest.get("*/users", (_req, res, ctx) => {
      return res(
        ctx.delay(1000),
        ctx.status(200, "Mocked status"),
        ctx.json(getMockedUsers()),
      );
    }),
  ];
};