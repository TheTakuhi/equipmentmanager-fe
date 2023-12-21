import MyPeopleTableContainer from "../../containers/MyPeopleTableContainer";
import MyPeopleTopContainer from "../../containers/MyPeopleTopContainer";

const MyPeoplePage = () => {
  const tableHeight = `calc(100vh - 118px)`;

  return (
    <>
      <MyPeopleTopContainer />
      <MyPeopleTableContainer tableHeight={tableHeight} />
    </>
  );
};

export default MyPeoplePage;
