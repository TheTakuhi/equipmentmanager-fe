import { FC } from "react";

import { useGetCurrentUser } from "../../../hooks/queries/users/useGetCurrentUser";
import { useKeycloakParsedToken } from "../../../security/hooks/queries/useKeycloakParsedToken";
import Avatar from "../../Avatar";

export interface CurrentUserAvatarProps {
  onClick?: (() => void) | undefined;
}

const CurrentUserAvatar: FC<CurrentUserAvatarProps> = ({ onClick }) => {
  const { isLoading: isLoadingToken } = useKeycloakParsedToken();
  const { isLoading: isLoadingUser, data: currentUser } = useGetCurrentUser();

  if (isLoadingToken || isLoadingUser || !currentUser)
    return (
      <Avatar userDetail={{ ...currentUser, photo: currentUser?.photo }} />
    );

  return (
    <Avatar
      userDetail={{ ...currentUser, photo: currentUser?.photo }}
      onClick={onClick}
    />
  );
};

export default CurrentUserAvatar;
