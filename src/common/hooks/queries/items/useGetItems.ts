import { useQuery, UseQueryOptions } from "@tanstack/react-query";

import {
  EnvVariableName,
  getEnvVariable,
} from "../../../config/env/getEnvVariable";
import { Item } from "../../../models/item/Item";
import { ItemState } from "../../../models/item/ItemState";
import { ItemType } from "../../../models/item/ItemType";
import { QualityState } from "../../../models/item/QualityState";
import { Pageable, PageableParam } from "../../../models/utils/Pageable";
import { useSecuredAxios } from "../../../security/hooks/useSecuredAxios";
import { getQueryKeys } from "../utility/getQueryKeys";

const rootKey = "items";

type UseGetItemsQueryOptions = UseQueryOptions<Pageable<Item>, Error>;

type UseGetItemsQueryParams = {
  serialCode?: string;
  type?: ItemType;
  state?: ItemState;
  qualityState?: QualityState;
  includeDiscarded: boolean;
  pageable?: PageableParam;
};

type GetItemsQueryKeyHandler = (
  params?: UseGetItemsQueryParams,
) => (string | boolean | undefined)[];

export const getItemsQueryKey: GetItemsQueryKeyHandler = (params) => {
  return getQueryKeys(params ?? [], rootKey);
};

export const useGetItems = (
  params?: UseGetItemsQueryParams,
  options?: UseGetItemsQueryOptions,
) => {
  const securedAxios = useSecuredAxios();
  const { pageable, ...restParams } = params || {};

  return useQuery<Pageable<Item>, Error>({
    queryKey: getItemsQueryKey(),
    queryFn: () =>
      securedAxios
        .get(`${getEnvVariable(EnvVariableName.HOST_CORE)}/items`, {
          params: { ...pageable, ...restParams },
        })
        .then((response) => response.data as Pageable<Item>),
    ...options,
  });
};
