import { FC } from "react";

import {
  Flex,
  Heading,
  HStack,
  Input,
  Select,
  Skeleton,
  Spacer,
} from "@chakra-ui/react";
import { useParams } from "@tanstack/react-router";
import { Download } from "react-feather";

import Button from "../../../common/components/Button";
import SortFilter from "../../../common/components/SortFilter";
import { useGetUserById } from "../../../common/hooks/queries/users/useGetUserById";
import {
  USERDETAILRoute,
  userDetailRoute,
} from "../../../common/routes/common/userDetail/userDetailRoute";
import LoansHistoryTableContainer from "../../../manager/containers/LoansHistoryTableContainer";
import { useLoansHistoryUserDetailTableColumns } from "../../../manager/hooks/useLoansHistoryUserDetailTableColumns";

interface UserDetailTableProps {
  tableHeight: string;
}

const UserDetailTable: FC<UserDetailTableProps> = ({ tableHeight }) => {
  const columns = useLoansHistoryUserDetailTableColumns();
  const params: { userDetailId: string } = useParams({
    from: USERDETAILRoute.id,
  });

  const { data: user, isLoading } = useGetUserById(params.userDetailId);

  if (isLoading) return <Skeleton />;

  return (
    <>
      <Heading size="h2" sx={{ paddingX: "1.5rem", paddingTop: "1rem" }}>
        Lending history
      </Heading>
      <Flex sx={{ padding: "1rem 1.5rem" }}>
        <HStack gap="0.625rem">
          <SortFilter
            options={[
              { label: "Newest", value: "NEWEST" },
              { label: "Oldest", value: "OLDEST" },
            ]}
            sx={{ width: "max-content" }}
          />
          <HStack gap="0">
            <Select variant="filled">
              <option>Item code</option>
              <option>Item type</option>
            </Select>
            <Input placeholder="Search..." />
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
        route={`${userDetailRoute.id}/$userDetailId`}
        columns={columns}
        userName={user?.login}
      />
    </>
  );
};

export default UserDetailTable;
