import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import { User } from "../../../models/user/User";
import { useSecuredAxios } from "../../../security/hooks/useSecuredAxios";
import { getQueryKeys } from "../getQueryKeys";
import { EnvVariableName, getEnvVariable } from "../../../config/env/getEnvVariable";

const rootKey = "user";

type UseGetUserQueryOptions = UseQueryOptions<User, Error>;

type GetUserQueryKeyHandler = (userId: string) => string[];

export const getUserQueryKey: GetUserQueryKeyHandler = (userId) => {
  return getQueryKeys([userId], rootKey);
};

// export const useGetUser = (
//   userId: string,
//   options?: UseGetUserQueryOptions
// ) => {
//   const securedAxios = useSecuredAxios();
//   return useQuery<User, Error>({
//     const {userId, rootKey}: getUserQueryKey(userId),
//     queryFn: () =>
//       securedAxios
//         .get(${getEnvVariable(EnvVariableName.HOST_CORE)}/users/${userId})
//         .then((response) => response.data as User),
//     ...options,
//   });
// };

export const useGetUser = (
  userId: string,
  options?: UseGetUserQueryOptions
) => {
  const securedAxios = useSecuredAxios();
  

  return useQuery<User, Error>({
    queryKey: getUserQueryKey(userId),
    queryFn: () =>
      securedAxios
        .get(`${getEnvVariable(EnvVariableName.HOST_CORE)}/users/${userId}`)
        .then((response) => response.data as User),
    ...options,
  });
};