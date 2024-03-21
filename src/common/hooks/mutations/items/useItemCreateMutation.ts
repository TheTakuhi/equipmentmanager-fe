import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import {
  EnvVariableName,
  getEnvVariable,
} from "../../../config/env/getEnvVariable";
import { Item } from "../../../models/item/Item";
import { ItemFormValues } from "../../../models/item/ItemFormValues";
import { useSecuredAxios } from "../../../security/hooks/useSecuredAxios";

export const useItemCreateMutation = () => {
  const securedAxios = useSecuredAxios();

  return useMutation<
    Item,
    AxiosError<any, any>,
    Partial<
      Omit<ItemFormValues, "ownerId" | "type" | "qualityState"> & {
        ownerId: string;
        type: string;
        qualityState: string;
      }
    >,
    unknown
  >({
    mutationFn: (item) =>
      securedAxios
        .post(`${getEnvVariable(EnvVariableName.HOST_CORE)}/items`, item)
        .then((response) => response.data as Item),
  });
};
