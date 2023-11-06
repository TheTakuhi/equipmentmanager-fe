import { useGetItemQualityStates } from "./useGetItemQualityStates";
import { SelectOption } from "../../../models/utils/SelectOption";

export const useItemQualityStates = () => {
  const { data, isLoading } = useGetItemQualityStates();
  const itemQualityStates: SelectOption[] = [];

  if (data)
    data.map((itemQualityState) =>
      itemQualityStates.push({
        key: itemQualityState,
        value: itemQualityState.toLowerCase(),
      }),
    );

  return { itemQualityStates, isLoading };
};
