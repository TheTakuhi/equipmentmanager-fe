import { ChangeEvent, FC } from "react";

import { Checkbox, Flex, Heading, HStack, Spacer } from "@chakra-ui/react";
import { Download, Plus } from "react-feather";

import Button from "../../../common/components/Button";
import SearchBar from "../../../common/components/SearchBar";
import ItemsTopContainerSkeleton from "../../../common/components/Skeletons/ItemsTopContainerSkeleton";
import SortFilter from "../../../common/components/SortFilter";
import ItemCreateDialog from "../../../common/dialogs/ItemDialogs/ItemCreateDialog";
import { useGetCurrentUser } from "../../../common/hooks/queries/users/useGetCurrentUser";
import { useActionDialog } from "../../../common/providers/ActionDialogProvider/ActionDialogProvider";
import { ITEMSRoute } from "../../../common/routes/common/items/itemsRoute";

interface ItemsTopContainerProps {
  includeDiscarded: boolean;
  onIncludeDiscardedChange: (includeDiscarded: boolean) => void;
}
const ItemsTopContainer: FC<ItemsTopContainerProps> = ({
  includeDiscarded,
  onIncludeDiscardedChange,
}) => {
  const { show } = useActionDialog();

  const { data: currentUser, isLoading: isLoadingCurrentUser } =
    useGetCurrentUser();

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newIncludeDiscarded = event.target.checked;
    onIncludeDiscardedChange(newIncludeDiscarded);
  };

  if (isLoadingCurrentUser || currentUser === undefined)
    return <ItemsTopContainerSkeleton />;

  const addItemDialogOpen = () => {
    show(<ItemCreateDialog currentUser={currentUser} />);
  };

  return (
    <>
      <Heading size="h1" sx={{ paddingX: "1.5rem", paddingTop: "1rem" }}>
        Items
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
          <HStack gap="0.625rem">
            <SearchBar
              route={ITEMSRoute.id}
              options={[
                { value: "serialCode", label: "Item code" },
                { value: "type", label: "Item type" },
                { value: "state", label: "Item state" },
                { value: "qualityState", label: "Item quality" },
              ]}
            />
            <Checkbox
              checked={includeDiscarded}
              onChange={handleCheckboxChange}
            >
              Include discarded items
            </Checkbox>
          </HStack>
        </HStack>
        <Spacer />
        <HStack gap="0.625rem" align="flex-end" paddingLeft="0.625rem">
          <Button
            variant="primary"
            label="Add item"
            startIcon={<Plus />}
            onClick={() => addItemDialogOpen()}
          />
          <Button
            variant="secondary"
            label="Export list"
            startIcon={<Download />}
          />
        </HStack>
      </Flex>
    </>
  );
};

export default ItemsTopContainer;
