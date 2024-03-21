import { useQuery, UseQueryOptions } from "@tanstack/react-query";

import {
  EnvVariableName,
  getEnvVariable,
} from "../../../config/env/getEnvVariable";
import { useSecuredAxios } from "../../../security/hooks/useSecuredAxios";

const rootKey = "itemQualityStates";

type UseGetItemQualityStatesQueryOptions = UseQueryOptions<string[], Error>;

export const getItemQualityStatesQueryKey = () => [rootKey];

export const useGetItemQualityStates = (
  options?: UseGetItemQualityStatesQueryOptions,
) => {
  const securedAxios = useSecuredAxios();
  return useQuery<string[], Error>({
    queryKey: getItemQualityStatesQueryKey(),
    queryFn: () =>
      securedAxios
        .get(
          `${getEnvVariable(
            EnvVariableName.HOST_CORE,
          )}/items/item-quality-states`,
        )
        .then((response) => response.data as string[]),
    ...options,
  });
};
