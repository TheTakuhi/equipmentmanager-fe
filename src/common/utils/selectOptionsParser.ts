import { Item } from "../models/item/Item";
import { User } from "../models/user/User";
import { SelectOption } from "../models/utils/SelectOption";
import { CustomRole } from "../security/model/Role";

export const parseUsersToSelectOptions = (
  users?: User[],
  currentUser?: User,
) => {
  const options: SelectOption[] = [];

  if (!users) return options;
  if (currentUser?.userRoles.some((role) => role === CustomRole.MANAGER)) {
    options.push({
      value: currentUser.id,
      label: currentUser.fullName,
      id: currentUser.id,
    });
  } else {
    users.map((user) =>
      options.push({
        value: user.id,
        label: user.fullName,
        id: user.id,
      }),
    );
  }

  return options;
};

export const parseItemsToSelectOptions = (items?: Item[]) => {
  const options: SelectOption[] = [];

  if (!items) return options;

  items.map((item) =>
    options.push({
      value: item.id,
      label: `${item.serialCode}, ${item.type.toLowerCase().replace("_", " ")}`,
      id: item.id,
    }),
  );

  return options;
};
