import ItemsTableContainer from "../../containers/ItemsTableContainer";
import ItemsTopContainer from "../../containers/ItemsTopContainer";

const ItemsPage = () => {
  const tableHeight = `calc(100vh - 118px)`;

  return (
    <>
      <ItemsTopContainer />
      <ItemsTableContainer tableHeight={tableHeight} />
    </>
  );
};

export default ItemsPage;
