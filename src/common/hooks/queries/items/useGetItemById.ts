import { useQuery, UseQueryOptions } from "@tanstack/react-query";

import {
  EnvVariableName,
  getEnvVariable,
} from "../../../config/env/getEnvVariable";
import { Item } from "../../../models/item/Item";
import { useSecuredAxios } from "../../../security/hooks/useSecuredAxios";
import { getQueryKeys } from "../getQueryKeys";

const rootKey = "item";

type UseGetItemQueryOptions = UseQueryOptions<Item, Error>;

type GetItemQueryKeyHandler = (itemId: string) => string[];

export const getItemQueryKey: GetItemQueryKeyHandler = (itemId) => {
  return getQueryKeys([itemId], rootKey);
};

export const useGetItemById = (
  itemId: string,
  options?: UseGetItemQueryOptions,
) => {
  const securedAxios = useSecuredAxios();

  return useQuery<Item, Error>({
    queryKey: getItemQueryKey(itemId),
    queryFn: () =>
      securedAxios
        .get(`${getEnvVariable(EnvVariableName.HOST_CORE)}/v1/items/${itemId}`)
        .then((response) => response.data as Item),
    ...options,
  });
};
