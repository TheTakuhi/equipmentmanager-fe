import { useQuery, UseQueryOptions } from "@tanstack/react-query";

import {
  EnvVariableName,
  getEnvVariable,
} from "../../../config/env/getEnvVariable";
import { Item } from "../../../models/item/Item";
import { useSecuredAxios } from "../../../security/hooks/useSecuredAxios";
import { getQueryKeys } from "../utility/getQueryKeys";

const rootKey = "items-by-owner";

type UseGetItemsByOwnerQueryOptions = UseQueryOptions<Item[], Error>;

type GetItemsByOwnerQueryKeyHandler = (itemId?: string) => string[];

export const getItemsByOwnerQueryKey: GetItemsByOwnerQueryKeyHandler = (
  itemId,
) => {
  return getQueryKeys([itemId], rootKey);
};

export const useGetItemsByOwnerId = (
  itemId?: string,
  options?: UseGetItemsByOwnerQueryOptions,
) => {
  const securedAxios = useSecuredAxios();

  return useQuery<Item[], Error>({
    queryKey: getItemsByOwnerQueryKey(itemId),
    queryFn: () =>
      securedAxios
        .get(
          `${getEnvVariable(
            EnvVariableName.HOST_CORE,
          )}/items/by-owner/${itemId}`,
        )
        .then((response) => response.data as Item[]),
    ...options,
  });
};
