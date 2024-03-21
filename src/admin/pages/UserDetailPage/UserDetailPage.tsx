import { Box } from "@chakra-ui/react";

import UserDetailTable from "../../components/UserDetailTable";
import UserBreadCrumbHeader from "../../containers/user/UserBreadCrumbHeader";
import UserDetailsContainer from "../../containers/user/UserDetailsContainer";

const UserDetailPage = () => {
  const tableHeight = `calc(100vh - 364px)`;
  return (
    <Box>
      <UserBreadCrumbHeader />
      <UserDetailsContainer />
      <UserDetailTable tableHeight={tableHeight} />
    </Box>
  );
};

export default UserDetailPage;
