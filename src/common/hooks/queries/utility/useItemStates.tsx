import { useGetItemStates } from "./useGetItemStates";
import { SelectOption } from "../../../models/utils/SelectOption";

export const useItemStates = () => {
  const { data, isLoading } = useGetItemStates();
  const itemStates: SelectOption[] = [];

  if (data)
    data.map((itemState) =>
      itemStates.push({
        key: itemState,
        value: itemState.toLowerCase(),
      }),
    );

  return { itemStates, isLoading };
};
