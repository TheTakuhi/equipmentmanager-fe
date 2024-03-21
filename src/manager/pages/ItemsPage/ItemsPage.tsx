import { useState } from "react";

import ItemsTableContainer from "../../containers/ItemsTableContainer";
import ItemsTopContainer from "../../containers/ItemsTopContainer";

const ItemsPage = () => {
  const tableHeight = `calc(100vh - 118px)`;

  const [includeDiscarded, setIncludeDiscarded] = useState(false);

  const handleIncludeDiscardedChange = (newIncludeDiscarded: boolean) => {
    setIncludeDiscarded(newIncludeDiscarded);
  };

  return (
    <>
      <ItemsTopContainer
        includeDiscarded={includeDiscarded}
        onIncludeDiscardedChange={handleIncludeDiscardedChange}
      />
      <ItemsTableContainer
        tableHeight={tableHeight}
        includeDiscarded={includeDiscarded}
      />
    </>
  );
};

export default ItemsPage;
