import { useGetItemTypes } from "./useGetItemTypes";
import { SelectOption } from "../../../models/utils/SelectOption";

export const useItemTypes = () => {
  const { data, isLoading } = useGetItemTypes();
  const itemTypes: SelectOption[] = [];

  if (data)
    data.map((itemType) =>
      itemTypes.push({
        key: itemType,
        value: itemType.toLowerCase(),
      }),
    );

  return { itemTypes, isLoading };
};
