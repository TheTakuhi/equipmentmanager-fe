import { useGetItemQualityStates } from "../queries/utility/useGetItemQualityStates";
import { SelectOption } from "../../models/utils/SelectOption";

export const useItemQualityStates = () => {
  const { data, isLoading } = useGetItemQualityStates();
  const itemQualityStates: SelectOption[] = [];

  if (data)
    data.map((itemQualityState) =>
      itemQualityStates.push({
        value: itemQualityState,
        label: itemQualityState.toLowerCase(),
      }),
    );

  return { itemQualityStates, isLoading };
};
