import { faker } from "@faker-js/faker";

import { CustomRole } from "../../../../../security/model/Role";

export const getUserBasicInfoMock = () => ({
  id: faker.string.uuid(),
  login: faker.internet.userName(),
  email: faker.internet.email(),
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  fullName: faker.person.fullName(),
  photo: "",
  userRoles: [faker.helpers.enumValue(CustomRole)],
  removed: false,
});
