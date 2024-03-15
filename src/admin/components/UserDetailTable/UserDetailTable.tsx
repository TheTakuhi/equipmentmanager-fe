import { FC } from "react";

import { Flex, Heading, HStack, Skeleton, Spacer } from "@chakra-ui/react";
import { useParams } from "@tanstack/react-router";
import { Download } from "react-feather";

import Button from "../../../common/components/Button";
import SearchBar from "../../../common/components/SearchBar";
import { useGetUserById } from "../../../common/hooks/queries/users/useGetUserById";
import { ONEUSERDETAILRoute } from "../../../common/routes/common/userDetail/user/oneUserDetailRoute";
import LoansHistoryTableContainer from "../../../manager/containers/LoansHistoryTableContainer";
import { useLoansHistoryUserDetailTableColumns } from "../../../manager/hooks/useLoansHistoryUserDetailTableColumns";

interface UserDetailTableProps {
  tableHeight: string;
}

const UserDetailTable: FC<UserDetailTableProps> = ({ tableHeight }) => {
  const columns = useLoansHistoryUserDetailTableColumns();
  const params: { userDetailId: string } = useParams({
    from: ONEUSERDETAILRoute.id,
  });

  const { data: user, isLoading } = useGetUserById(params.userDetailId);

  if (isLoading) return <Skeleton />;

  return (
    <>
      <Heading size="h2" sx={{ paddingX: "1.5rem", paddingTop: "1rem" }}>
        Borrowing history
      </Heading>
      <Flex sx={{ padding: "1rem 1.5rem" }}>
        <HStack gap="0.625rem">
          <HStack gap="0">
            <SearchBar
              route={ONEUSERDETAILRoute.id}
              options={[
                { value: "serialCode", label: "Item code" },
                { value: "type", label: "Item type" },
              ]}
            />
          </HStack>
        </HStack>
        <Spacer />
        <HStack gap="0.625rem" align="flex-end" paddingLeft="0.625rem">
          <Button
            variant="secondary"
            label="Export list"
            startIcon={<Download />}
          />
        </HStack>
      </Flex>
      <LoansHistoryTableContainer
        tableHeight={tableHeight}
        route={ONEUSERDETAILRoute.id}
        columns={columns}
        userName={user?.login}
      />
    </>
  );
};

export default UserDetailTable;
