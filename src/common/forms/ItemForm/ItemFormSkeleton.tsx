import { FC } from "react";

import { Box, SimpleGrid, Skeleton } from "@chakra-ui/react";

import { InputSkeleton } from "../../components/Skeletons/InputSkeleton";

export const ItemFormSkeleton: FC = () => {
  return (
    <SimpleGrid sx={{ gap: "1rem" }}>
      <SimpleGrid columns={{ base: 2 }} sx={{ gap: "1rem" }}>
        <InputSkeleton />
        <InputSkeleton />
      </SimpleGrid>
      <SimpleGrid columns={{ base: 2 }} sx={{ gap: "1rem" }}>
        <InputSkeleton />
        <InputSkeleton />
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1 }} sx={{ gap: "1rem" }}>
        <InputSkeleton inputProps={{ sx: { height: "80px" } }} />
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
