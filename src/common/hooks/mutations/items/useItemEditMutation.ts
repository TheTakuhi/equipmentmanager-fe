import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { toast } from "react-toastify";

import {
  EnvVariableName,
  getEnvVariable,
} from "../../../config/env/getEnvVariable";
import { Item } from "../../../models/item/Item";
import { ItemFormValues } from "../../../models/item/ItemFormValues";
import { useSecuredAxios } from "../../../security/hooks/useSecuredAxios";
import { toastOptions } from "../../../utils/toastOptions";

export const useItemEditMutation = (itemId?: string) => {
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
        .put(
          `${getEnvVariable(EnvVariableName.HOST_CORE)}/v1/items/${itemId}`,
          item,
        )
        .then((response) => response.data as Item),
    onError: (error) =>
      toast.error(
        error.response?.data.message ?? "An error has occurred",
        toastOptions,
      ),
  });
};
