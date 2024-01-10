import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import {
  EnvVariableName,
  getEnvVariable,
} from "../../../config/env/getEnvVariable";
import { Item } from "../../../models/item/Item";
import { useSecuredAxios } from "../../../security/hooks/useSecuredAxios";

// TODO EDIT ITEMS OWNER MUTATION AFTER ENDPOINT IS DONE
export const useEditItemsOwnerMutation = (itemId?: string) => {
  const securedAxios = useSecuredAxios();

  return useMutation<Item, AxiosError<any, any>, { id: string }>({
    mutationFn: (id) =>
      securedAxios
        .put(`${getEnvVariable(EnvVariableName.HOST_CORE)}/items/${itemId}`, id)
        .then((response) => response.data as Item),
  });
};
