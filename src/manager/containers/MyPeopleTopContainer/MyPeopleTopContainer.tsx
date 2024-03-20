import { FC } from "react";

import { Flex, Heading, HStack, Spacer } from "@chakra-ui/react";
import { Download } from "react-feather";

import Button from "../../../common/components/Button";
import SearchBar from "../../../common/components/SearchBar";
import { allMyPeopleRoute } from "../../../common/routes/common/myPeople/allMyPeople/allMyPeopleRoute";

const MyPeopleTopContainer: FC = () => {
  return (
    <>
      <Heading size="h1" sx={{ paddingX: "1.5rem", paddingTop: "1rem" }}>
        My People
      </Heading>
      <Flex sx={{ padding: "1rem 1.5rem" }}>
        <HStack gap="0.625rem">
          <SearchBar
            route={allMyPeopleRoute.id}
            options={[
              { value: "login", label: "Login" },
              { value: "fullName", label: "Name" },
              { value: "email", label: "E-mail" },
            ]}
          />
        </HStack>
        <Spacer />
        <HStack gap="0.625rem" align="flex-end" paddingLeft="0.625rem">
          <Button
            variant="secondary"
            label="Export list"
            startIcon={<Download />}
            // TODO - enable after export is implemented
            isDisabled
          />
        </HStack>
      </Flex>
    </>
  );
};

export default MyPeopleTopContainer;
