import { useGetItemTypes } from "../queries/utility/useGetItemTypes";
import { SelectOption } from "../../models/utils/SelectOption";

export const useItemTypes = () => {
  const { data, isLoading } = useGetItemTypes();
  const itemTypes: SelectOption[] = [];

  if (data)
    data.map((itemType) =>
      itemTypes.push({
        value: itemType,
        label: itemType.toLowerCase(),
      }),
    );

  return { itemTypes, isLoading };
};
