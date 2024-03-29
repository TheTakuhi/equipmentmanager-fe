import { FC } from "react";

import { Box, Heading, SkeletonText, useTheme } from "@chakra-ui/react";
import { useNavigate, useParams } from "@tanstack/react-router";

import { useGetItemById } from "../../../common/hooks/queries/items/useGetItemById";
import { itemDetailRoute } from "../../../common/routes/common/itemDetail/itemDetailRoute";

const BreadCrumbHeader: FC = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const params: { itemDetailId: string } = useParams({
    from: itemDetailRoute.id,
  });

  const { data: item, isLoading } = useGetItemById(params.itemDetailId);

  const handleRedirectBack = () => {
    navigate({
      to: "/equipment-manager/management/items",
    });
  };

  if (isLoading)
    return (
      <SkeletonText
        noOfLines={1}
        spacing="2"
        skeletonHeight="3"
        mt="1.5rem"
        px="1.5rem"
        startColor="#222222"
        endColor="#444444"
        width="20rem"
        fontSize={theme.components.Heading.sizes.h1.fontSize}
      />
    );

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "inline-flex",
        paddingX: "1.5rem",
        paddingTop: "1rem",
      }}
    >
      <Heading
        size="h1"
        sx={{
          color: theme.palette.text.disabled,
          cursor: "pointer",
        }}
        onClick={handleRedirectBack}
      >
        Items &nbsp;&gt;&nbsp;
      </Heading>
      <Heading
        size="h1"
        sx={{
          color: theme.palette.text.primary,
        }}
      >
        {item?.serialCode}, {item?.type}
      </Heading>
    </Box>
  );
};

export default BreadCrumbHeader;
