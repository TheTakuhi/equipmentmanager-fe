import { FC } from "react";

import { Skeleton, SkeletonProps, SkeletonText, Stack } from "@chakra-ui/react";

type InputSkeletonProps = {
  labelProps?: SkeletonProps;
  inputProps?: SkeletonProps;
};

export const InputSkeleton: FC<InputSkeletonProps> = ({
  labelProps,
  inputProps,
}) => {
  return (
    <Stack>
      <SkeletonText
        noOfLines={1}
        skeletonHeight="18px"
        sx={{ width: "120px" }}
        {...labelProps}
      />
      <Skeleton sx={{ width: "100%", height: "40px" }} {...inputProps} />
    </Stack>
  );
};
