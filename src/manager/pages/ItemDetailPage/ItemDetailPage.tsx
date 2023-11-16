import { Box } from "@chakra-ui/react";

import ItemDetailTable from "../../components/ItemDetailTable";
import BreadCrumbHeader from "../../containers/BreadCrumbHeader";
import ItemDetailsContainer from "../../containers/ItemDetailsContainer";

const ItemDetailPage = () => {
  const tableHeight = `calc(100vh - 364px)`;
  return (
    <Box>
      <BreadCrumbHeader />
      <ItemDetailsContainer />
      <ItemDetailTable tableHeight={tableHeight} />
    </Box>
  );
};

export default ItemDetailPage;
