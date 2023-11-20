import { Skeleton } from "@chakra-ui/react";

import { useGetCurrentUser } from "../../../common/hooks/queries/users/useGetCurrentUser";
import MyPeopleTableContainer from "../../containers/MyPeopleTableContainer";
import MyPeopleTopContainer from "../../containers/MyPeopleTopContainer";

const MyPeoplePage = () => {
  const tableHeight = `calc(100vh - 118px)`;
  const { data: currentUser, isLoading: isLoadingCurrentUser } =
    useGetCurrentUser();

  if (isLoadingCurrentUser) return <Skeleton />;

  return (
    <>
      <MyPeopleTopContainer />
      <MyPeopleTableContainer
        tableHeight={tableHeight}
        currentUser={currentUser}
      />
    </>
  );
};

export default MyPeoplePage;
