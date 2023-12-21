import { Item } from "../models/item/Item";
import { User } from "../models/user/User";
import { SelectOption } from "../models/utils/SelectOption";

export const parseUsersToSelectOptions = (users?: User[]) => {
  const options: SelectOption[] = [];

  if (!users) return options;

  users.map((user) =>
    options.push({
      value: user.id,
      label: user.fullName,
    }),
  );

  return options;
};

export const parseItemsToSelectOptions = (items?: Item[]) => {
  const options: SelectOption[] = [];

  if (!items) return options;

  items.map((item) =>
    options.push({
      value: item.id,
      label: `${item.serialCode}, ${item.type.toLowerCase().replace("_", " ")}`,
    }),
  );

  return options;
};
