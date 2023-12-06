import { FC } from "react";

import { useGetCurrentUser } from "../../../hooks/queries/users/useGetCurrentUser";
import Avatar from "../../Avatar";
import { DefaultRole } from "../../../security/model/Role";

export interface CurrentUserAvatarProps {
  onClick?: (() => void) | undefined;
}

const CurrentUserAvatar: FC<CurrentUserAvatarProps> = ({ onClick }) => {
  const { isLoading: isLoadingUser, data: currentUser } = useGetCurrentUser();

  if (isLoadingUser || !currentUser)
    return (
      <Avatar userDetail={{ userRoles: [DefaultRole.GUEST], photo: currentUser?.photo }} />
    );


  return (
    <Avatar
      userDetail={{ ...currentUser, photo: currentUser?.photo }}
      onClick={onClick}
    />
  );
};

export default CurrentUserAvatar;
