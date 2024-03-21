import UsersTableContainer from "../../containers/user/UsersTableContainer";
import UsersTopContainer from "../../containers/user/UsersTopContainer";

const UsersPage = () => {
  const tableHeight = `calc(100vh - 118px)`;

  return (
    <>
      <UsersTopContainer />
      <UsersTableContainer tableHeight={tableHeight} />
    </>
  );
};

export default UsersPage;
