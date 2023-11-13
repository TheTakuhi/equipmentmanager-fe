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

  return useMutation<Item, AxiosError<any, any>, ItemFormValues, unknown>({
    mutationFn: (item: ItemFormValues) =>
      securedAxios
        .post(`${getEnvVariable(EnvVariableName.HOST_CORE)}/items`, item)
        .then((response) => response.data as Item),
  });
};
