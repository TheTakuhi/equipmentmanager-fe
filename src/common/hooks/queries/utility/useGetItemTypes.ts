import { useQuery, UseQueryOptions } from "@tanstack/react-query";

import {
  EnvVariableName,
  getEnvVariable,
} from "../../../config/env/getEnvVariable";
import { useSecuredAxios } from "../../../security/hooks/useSecuredAxios";

const rootKey = "itemTypes";

type UseGetItemTypesQueryOptions = UseQueryOptions<string[], Error>;

export const getItemTypesQueryKey = () => [rootKey];

export const useGetItemTypes = (options?: UseGetItemTypesQueryOptions) => {
  const securedAxios = useSecuredAxios();
  return useQuery<string[], Error>({
    queryKey: getItemTypesQueryKey(),
    queryFn: () =>
      securedAxios
        .get(`${getEnvVariable(EnvVariableName.HOST_CORE)}/v1/items/item-types`)
        .then((response) => response.data as string[]),
    ...options,
  });
};
