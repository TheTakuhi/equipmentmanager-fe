import { faker } from "@faker-js/faker";

import { itemsCroppedBuilder } from "../../../../../mock_builders/ItemsBuilder";
import { usersCroppedBuilder } from "../../../../../mock_builders/UsersBuilder";
import { Loan } from "../../../../../models/loan/Loan";
import { getRandomElement } from "../../../../../utils/arrayUtils";

export const getLoanMock = (): Loan => ({
  id: faker.string.uuid(),
  loanDate: faker.date.past().toISOString().split("T")[0],
  returnDate: faker.datatype.boolean()
    ? faker.date.past().toISOString().split("T")[0]
    : null,
  item: { ...getRandomElement(itemsCroppedBuilder.getItems()) },
  borrower: { ...getRandomElement(usersCroppedBuilder.getUsers()) },
  lender: { ...getRandomElement(usersCroppedBuilder.getUsers()) },
});

export const getLoansMock = (count: number): Loan[] =>
  Array.from({ length: count }, getLoanMock);
