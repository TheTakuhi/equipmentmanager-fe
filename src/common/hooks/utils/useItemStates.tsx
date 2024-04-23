import { useGetItemStates } from "../queries/utility/useGetItemStates";
import { SelectOption } from "../../models/utils/SelectOption";

export const useItemStates = () => {
  const { data, isLoading } = useGetItemStates();
  const itemStates: SelectOption[] = [];

  if (data)
    data.map((itemState) =>
      itemStates.push({
        value: itemState,
        label: itemState.toLowerCase(),
      }),
    );

  return { itemStates, isLoading };
};
