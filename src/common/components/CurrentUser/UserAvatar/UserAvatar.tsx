import { FC } from "react";

import Avatar from "../../Avatar";
import { DefaultRole } from "../../../security/model/Role";
import { User } from "../../../models/user/User";

export interface CurrentUserAvatarProps {
  onClick?: (() => void) | undefined;
  avatarWidth?: string;
  avatarHeight?: string;
  badgeTop?: string;
  badgeLeft?: string;
  isLoadingUser: boolean;
  currentUser: User | undefined;
}

const UserAvatar: FC<CurrentUserAvatarProps> = ({ onClick , avatarWidth, avatarHeight, badgeTop, badgeLeft, isLoadingUser, currentUser}) => {
  if (isLoadingUser || !currentUser)
    return (
      <Avatar userDetail={{ userRoles: [DefaultRole.GUEST], photo: currentUser?.photo }} />
    );

  return (
    <Avatar
      userDetail={{ ...currentUser, photo: currentUser?.photo }}
      onClick={onClick}
      avatarWidth={avatarWidth}
      avatarHeight={avatarHeight}
      badgeTop={badgeTop}
      badgeLeft={badgeLeft}
    />
  );
};

export default UserAvatar;