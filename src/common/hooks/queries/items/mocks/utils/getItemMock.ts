import { faker } from "@faker-js/faker";

import { Item } from "../../../../../models/item/Item";
import { ItemState } from "../../../../../models/item/ItemState";
import { ItemType } from "../../../../../models/item/ItemType";
import { QualityState } from "../../../../../models/item/QualityState";
import { getUserCroppedMock } from "../../../users/mocks/utils/getUserCroppedMock";

export const getItemMock = (): Item => ({
  id: faker.string.uuid(),
  serialCode: faker.helpers.fromRegExp("[A-Z0-9]{3}F-[A-Z0-9]{4}-W[A-Z0-9]{3}"),
  type: faker.helpers.enumValue(ItemType),
  comment: faker.lorem.sentence({ min: 3, max: 15 }),
  state: faker.helpers.enumValue(ItemState),
  qualityState: faker.helpers.enumValue(QualityState),
  creationDate: faker.date.past().toISOString(),
  owner: { ...getUserCroppedMock() },
  loans: [
    // ...loansBuilder.getPartialLoans(0, faker.number.int({ min: 0, max: 10 })),
  ],
});

export const getItemsMock = (numItems: number): Item[] =>
  Array.from({ length: numItems }, getItemMock);
