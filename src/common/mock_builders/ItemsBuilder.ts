import { getItemsCroppedMock } from "../hooks/queries/items/mocks/utils/getItemCroppedMock";
import { getItemsMock } from "../hooks/queries/items/mocks/utils/getItemMock";
import { Item } from "../models/item/Item";
import { ItemCropped } from "../models/item/ItemCropped";

type ItemsBuilderType = Item | ItemCropped;

class ItemsBuilder<T extends ItemsBuilderType> {
  items: T[] = [];

  isCropped?: boolean;

  constructor(count: number | undefined = 50, isCropped?: boolean) {
    this.isCropped = isCropped;

    if (isCropped) (this.items as ItemCropped[]) = getItemsCroppedMock(count);
    (this.items as Item[]) = getItemsMock(count);
  }

  getItems() {
    return this.items;
  }

  getPartialItems(startIndex: number, endIndex: number) {
    return this.items.slice(startIndex, endIndex);
  }

  getItemById(itemId: string) {
    return this.items.filter(({ id }) => id === itemId)[0];
  }

  getItemsByUserId(userId: string) {
    return this.items.filter((item) =>
      this.isCropped
        ? (item as ItemCropped).ownerId === userId
        : (item as Item).owner.id === userId,
    );
  }
}
export const itemsBuilder: ItemsBuilder<Item> = new ItemsBuilder(50);
export const itemsCroppedBuilder: ItemsBuilder<ItemCropped> = new ItemsBuilder(
  50,
  true,
);
