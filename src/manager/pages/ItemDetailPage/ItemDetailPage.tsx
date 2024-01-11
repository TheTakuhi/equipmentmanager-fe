import { Box } from "@chakra-ui/react";
import { useParams } from "@tanstack/react-router";

import { itemDetailRoute } from "../../../common/routes/common/itemDetail/itemDetailRoute";
import ItemDetailTable from "../../components/ItemDetailTable";
import BreadCrumbHeader from "../../containers/BreadCrumbHeader";
import ItemDetailsContainer from "../../containers/ItemDetailsContainer";

const ItemDetailPage = () => {
  const tableHeight = `calc(100vh - 364px)`;
  const itemIdParam = useParams({ from: itemDetailRoute }).itemId;

  return (
    <Box>
      <BreadCrumbHeader />
      <ItemDetailsContainer itemIdParam={itemIdParam} />
      <ItemDetailTable tableHeight={tableHeight} itemIdParam={itemIdParam} />
    </Box>
  );
};

export default ItemDetailPage;
