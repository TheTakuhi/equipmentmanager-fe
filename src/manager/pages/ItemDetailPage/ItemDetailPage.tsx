import { Box } from "@chakra-ui/react";
import { useParams } from "@tanstack/react-router";

import { itemDetailRoute } from "../../../common/routes/common/itemDetail/itemDetailRoute";
import ItemDetailTable from "../../components/ItemDetailTable";
import BreadCrumbHeader from "../../containers/BreadCrumbHeader";
import ItemDetailsContainer from "../../containers/ItemDetailsContainer";

const ItemDetailPage = () => {
  const tableHeight = `calc(100vh - 364px)`;
  const params: { itemDetailId: string } = useParams({
    from: itemDetailRoute.id,
  });

  return (
    <Box>
      <BreadCrumbHeader />
      <ItemDetailsContainer itemIdParam={params.itemDetailId} />
      <ItemDetailTable tableHeight={tableHeight} itemId={params.itemDetailId} />
    </Box>
  );
};

export default ItemDetailPage;
