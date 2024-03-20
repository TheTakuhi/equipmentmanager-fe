import { faker } from "@faker-js/faker";

import { usersBuilder } from "../../../../../mock_builders/UsersBuilder";
import { ItemCropped } from "../../../../../models/item/ItemCropped";
import { ItemState } from "../../../../../models/item/ItemState";
import { ItemType } from "../../../../../models/item/ItemType";
import { QualityState } from "../../../../../models/item/QualityState";
import { getRandomElement } from "../../../../../utils/arrayUtils";

export const getItemCroppedMock = (): ItemCropped => ({
  id: faker.string.uuid(),
  serialCode: faker.helpers.fromRegExp("[A-Z0-9]{3}F-[A-Z0-9]{4}-W[A-Z0-9]{3}"),
  type: faker.helpers.enumValue(ItemType),
  comment: faker.lorem.sentence({ min: 3, max: 15 }),
  state: faker.helpers.enumValue(ItemState),
  qualityState: faker.helpers.enumValue(QualityState),
  creationDate: faker.date.recent().toDateString(),
  ownerId: getRandomElement(usersBuilder.getUsers()).id,
  loansIds: [
    ...Array.from({ length: faker.number.int({ min: 0, max: 10 }) }, () =>
      faker.string.uuid(),
    ),
  ],
});

export const getItemsCroppedMock = (numItems: number): ItemCropped[] =>
  Array.from({ length: numItems }, getItemCroppedMock);
