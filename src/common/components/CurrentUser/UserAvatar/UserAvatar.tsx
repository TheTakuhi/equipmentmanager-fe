import { FC } from "react";

import { User } from "../../../models/user/User";
import { DefaultRole } from "../../../security/model/Role";
import Avatar from "../../Avatar";

export interface CurrentUserAvatarProps {
  onClick?: (() => void) | undefined;
  avatarWidth?: string;
  avatarHeight?: string;
  badgeTop?: string;
  badgeLeft?: string;
  isLoadingUser: boolean;
  currentUser: User | undefined;
}

const UserAvatar: FC<CurrentUserAvatarProps> = ({
  onClick,
  avatarWidth,
  avatarHeight,
  badgeTop,
  badgeLeft,
  isLoadingUser,
  currentUser,
}) => {
  if (isLoadingUser || !currentUser)
    return (
      <Avatar
        userDetail={{
          userRoles: [DefaultRole.GUEST],
          photo: currentUser?.photo,
        }}
      />
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
