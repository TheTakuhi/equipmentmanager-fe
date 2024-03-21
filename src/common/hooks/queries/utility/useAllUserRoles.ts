import { SelectOption } from "../../../models/utils/SelectOption";
import { useGetAllUserRoles } from "../users/useGetAllUserRoles";

export const useAllUserRoles = () => {
  const { data, isLoading } = useGetAllUserRoles();
  const userRoles: SelectOption[] = [];

  if (data)
    data.map((userRole) =>
      userRoles.push({
        value: userRole,
        label: userRole.toLowerCase(),
      }),
    );

  return { userRoles, isLoading };
};
