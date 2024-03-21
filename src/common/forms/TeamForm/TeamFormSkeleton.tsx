import { FC } from "react";

import { Box, SimpleGrid, Skeleton } from "@chakra-ui/react";

import { InputSkeleton } from "../../components/Skeletons/InputSkeleton";

export const TeamFormSkeleton: FC = () => {
  return (
    <SimpleGrid sx={{ gap: "1rem" }}>
      <SimpleGrid columns={{ base: 1 }} sx={{ gap: "1rem" }}>
        <InputSkeleton />
        <InputSkeleton />
        <InputSkeleton />
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1 }} sx={{ gap: "1rem", pb: "1rem" }}>
        <Box
          sx={{
            display: "inline-flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "full",
          }}
        >
          <Skeleton sx={{ width: "120px", height: "36px" }} />
          <Skeleton sx={{ width: "120px", height: "36px" }} />
        </Box>
      </SimpleGrid>
    </SimpleGrid>
  );
};
