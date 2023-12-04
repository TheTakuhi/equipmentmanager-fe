import { FC } from "react";

import { Avatar as AvatarOrigin, Box } from "@chakra-ui/react";

import { Role } from "../../security/model/Role";
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
}

const getFullName = ({
  firstName,
  lastName,
}: {
  firstName?: string | null;
  lastName?: string | null;
}): string => `${lastName} ${firstName}`;

const Avatar: FC<AvatarProps> = ({ userDetail, onClick }) => {
  if (!userDetail) return <AvatarOrigin />;

  return (
    <Box sx={{ position: "relative" }}>
      <AvatarOrigin
        sx={{
          cursor: "pointer",
          backgroundColor: "#b06d5f",
          color: (t) => t.palette.text.primary,
          width: "2.5rem",
          height: "2.5rem",
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
      <RoleBadge
        label={userDetail ? userDetail.userRoles[0].toString() : "u"}
        sx={{ position: "absolute", top: "1.75rem", left: "1.75rem" }}
      />
    </Box>
  );
};

export default Avatar;
