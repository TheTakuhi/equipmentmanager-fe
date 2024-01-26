import { FC } from "react";

import { Flex, Heading, Skeleton, SkeletonText } from "@chakra-ui/react";

const ItemsTopContainerSkeleton: FC = () => {
  return (
    <>
      <Heading size="h1" sx={{ paddingX: "1.5rem", paddingTop: "1rem" }}>
        <SkeletonText
          noOfLines={1}
          skeletonHeight="32px"
          startColor="#222222"
          endColor="#444444"
          width="8rem"
        />
      </Heading>
      <Flex sx={{ padding: "1rem 1.5rem" }}>
        <Skeleton
          height="34px"
          width="90vw"
          startColor="#222222"
          endColor="#444444"
        />
      </Flex>
    </>
  );
};

export default ItemsTopContainerSkeleton;
