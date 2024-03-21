import { FC } from "react";

import { Box, Skeleton, SkeletonText, useTheme } from "@chakra-ui/react";

const UserDetailSkeleton: FC = () => {
  const theme = useTheme();
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "inline-flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <SkeletonText
          noOfLines={1}
          spacing="4"
          skeletonHeight="5"
          mt="1.75rem"
          px="1.5rem"
          startColor="#222222"
          endColor="#444444"
          fontSize={theme.components.Heading.sizes.h2.fontSize}
          width="8rem"
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "inline-flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Skeleton
            height="40px"
            width="9rem"
            mt="1.75rem"
            mr="0.625rem"
            startColor="#222222"
            endColor="#444444"
          />
          <Skeleton
            height="40px"
            width="7rem"
            mt="1.75rem"
            mr="1.25rem"
            startColor="#222222"
            endColor="#444444"
          />
        </Box>
      </Box>
      <SkeletonText
        noOfLines={5}
        spacing="4"
        skeletonHeight="3"
        mt="0.75rem"
        pb="1.85rem"
        px="1.5rem"
        startColor="#222222"
        endColor="#444444"
        fontSize={theme.components.Heading.sizes.h2.fontSize}
        width="65%"
      />
    </>
  );
};

export default UserDetailSkeleton;
