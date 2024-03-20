import { faker } from "@faker-js/faker";

import { itemsBuilder } from "../../../../../mock_builders/ItemsBuilder";
import { usersBuilder } from "../../../../../mock_builders/UsersBuilder";
import { LoanCropped } from "../../../../../models/loan/LoanCropped";
import { getRandomElement } from "../../../../../utils/arrayUtils";

export const getLoanCroppedMock = (): LoanCropped => ({
  id: faker.string.uuid(),
  loanDate: faker.date.past().toISOString().split("T")[0],
  returnDate: faker.datatype.boolean()
    ? faker.date.past().toISOString().split("T")[0]
    : null,
  itemId: getRandomElement(itemsBuilder.getItems()).id,
  borrowerId: getRandomElement(usersBuilder.getUsers()).id,
  lenderId: getRandomElement(usersBuilder.getUsers()).id,
});

export const getLoansCroppedMock = (numLoans: number): LoanCropped[] =>
  Array.from({ length: numLoans }, getLoanCroppedMock);
