import { FC } from "react";

import { Avatar as AvatarOrigin } from "@chakra-ui/react";

import { stringAvatar, stringToColor } from "../../utils/colorUtils";

export interface AvatarDataProps {
  firstName?: string | null;
  lastName?: string | null;
  photo?: string | null;
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
    <AvatarOrigin
      {...stringAvatar(getFullName(userDetail))}
      sx={{
        cursor: "pointer",
        backgroundColor: stringToColor(getFullName(userDetail)),
        width: "2.5rem",
        height: "2.5rem",
        position: "relative",
      }}
      src={
        userDetail.photo
          ? `data:image/jpeg;base64,${userDetail.photo}`
          : undefined
      }
      onClick={onClick || undefined}
    />
  );
};

export default Avatar;
