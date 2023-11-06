import { useQuery, UseQueryOptions } from "@tanstack/react-query";

import {
  EnvVariableName,
  getEnvVariable,
} from "../../../config/env/getEnvVariable";
import { useSecuredAxios } from "../../../security/hooks/useSecuredAxios";

const rootKey = "itemStates";

type UseGetItemStatesQueryOptions = UseQueryOptions<string[], Error>;

export const getItemStatesQueryKey = () => [rootKey];

export const useGetItemStates = (options?: UseGetItemStatesQueryOptions) => {
  const securedAxios = useSecuredAxios();
  return useQuery<string[], Error>(
    getItemStatesQueryKey(),
    () =>
      securedAxios
        .get(`${getEnvVariable(EnvVariableName.HOST_CORE)}/items/item-states`)
        .then((response) => response.data as string[]),
    options,
  );
};
