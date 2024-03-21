import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import {
  EnvVariableName,
  getEnvVariable,
} from "../../../config/env/getEnvVariable";
import { Item } from "../../../models/item/Item";
import { UserSelectOption } from "../../../models/user/UserSelectOption";
import { useSecuredAxios } from "../../../security/hooks/useSecuredAxios";

export const useEditItemsOwnerMutation = (fromUserId?: string) => {
  const securedAxios = useSecuredAxios();

  return useMutation<
    Item,
    AxiosError<any, any>,
    Partial<
      Omit<UserSelectOption, "toUserId"> & {
        toUserId: string;
      }
    >
  >({
    mutationFn: (toUserId) =>
      securedAxios
        .patch(
          `${getEnvVariable(
            EnvVariableName.HOST_CORE,
          )}/items/from/${fromUserId}/to/${toUserId.toUserId}`,
        )
        .then((response) => response.data),
  });
};
