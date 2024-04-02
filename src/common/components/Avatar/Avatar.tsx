import { FC } from "react";

import { Avatar as AvatarOrigin, Box } from "@chakra-ui/react";

import { CustomRole, Role } from "../../security/model/Role";
import RoleBadge from "../RoleBadge";

export interface AvatarDataProps {
  firstName?: string | null;
  lastName?: string | null;
  photo?: string | null;
  userRoles: Role[];
}

interface AvatarProps {
  userDetail?: AvatarDataProps;
  onClick?: () => void;
  avatarWidth?: string;
  avatarHeight?: string;
  badgeTop?: string;
  badgeLeft?: string;
}

const getFullName = ({
  firstName,
  lastName,
}: {
  firstName?: string | null;
  lastName?: string | null;
}): string => `${lastName} ${firstName}`;

const Avatar: FC<AvatarProps> = ({
  userDetail,
  onClick,
  avatarWidth,
  avatarHeight,
  badgeTop,
  badgeLeft,
}) => {
  if (!userDetail) return <AvatarOrigin />;

  const getHighestRole = (roles: Role[]) => {
    if (roles.includes(CustomRole.ADMIN)) return "A";
    if (roles.includes(CustomRole.MANAGER)) return "M";
    return "G";
  };

  return (
    <Box sx={{ position: "relative" }}>
      <AvatarOrigin
        sx={{
          cursor: "default",
          backgroundColor: "#b06d5f",
          color: (t) => t.palette.text.primary,
          width: avatarWidth || "2.5rem",
          height: avatarHeight || "2.5rem",
          position: "relative",
          border: (t) => `1px solid ${t.palette.secondary.light}`,
        }}
        name={getFullName(userDetail)}
        src={
          userDetail.photo
            ? `data:image/jpeg;base64,${userDetail.photo}`
            : undefined
        }
        onClick={onClick || undefined}
      />
      {userDetail.userRoles ? (
        <RoleBadge
          label={getHighestRole(userDetail.userRoles)}
          sx={{
            position: "absolute",
            top: badgeTop || "1.75rem",
            left: badgeLeft || "1.75rem",
          }}
        />
      ) : null}
    </Box>
  );
};

export default Avatar;
