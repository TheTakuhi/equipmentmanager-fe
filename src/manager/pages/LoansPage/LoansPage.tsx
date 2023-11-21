import LoansTableContainer from "../../containers/LoansTableContainer";
import LoansTopContainer from "../../containers/LoansTopContainer";

const LoansPage = () => {
  const tableHeight = `calc(100vh - 118px)`;

  return (
    <>
      <LoansTopContainer />
      <LoansTableContainer tableHeight={tableHeight} />
    </>
  );
};

export default LoansPage;
