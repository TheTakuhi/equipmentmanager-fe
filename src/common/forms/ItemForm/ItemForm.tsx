import { FC } from "react";

import { Box, SimpleGrid, Skeleton } from "@chakra-ui/react";
import { FormProvider } from "react-hook-form";

import { useItemForm } from "./hooks/useItemForm/useItemForm";
import Button from "../../components/Button";
import RHFAutocomplete from "../../components/Inputs/RHFAutocomplete";
import RHFInput from "../../components/Inputs/RHFInput";
import RHFSelect from "../../components/Inputs/RHFSelect";
import RHFTextArea from "../../components/Inputs/RHFTextArea";
import { useGetUsers } from "../../hooks/queries/users/useGetUsers";
import { useItemQualityStates } from "../../hooks/queries/utility/useItemQualityStates";
import { useItemTypes } from "../../hooks/queries/utility/useItemTypes";
import { ItemFormValues } from "../../models/item/ItemFormValues";
import { parseUsersToSelectOptions } from "../../utils/selectOptionsParser";

export type ItemFormSubmitHandler = (values: ItemFormValues) => void;

interface ItemFormProps {
  handleSubmit: ItemFormSubmitHandler;
  disabled?: boolean;
  defaultValues?: Partial<ItemFormValues>;
  close: () => void;
  isEdit?: true;
}

const ItemForm: FC<ItemFormProps> = ({
  handleSubmit,
  disabled,
  defaultValues,
  close,
  isEdit,
}) => {
  const form = useItemForm({ defaultValues });

  const { itemTypes, isLoading: isLoadingItemTypes } = useItemTypes();
  const { itemQualityStates, isLoading: isLoadingQualityStates } =
    useItemQualityStates();

  // TODO IMPLEMENT FOR BOTH MANAGER & ADMIN
  const { data: ownerCandidates, isLoading: isLoadingOwnerCandidates } =
    useGetUsers();

  if (isLoadingItemTypes || isLoadingQualityStates || isLoadingOwnerCandidates)
    return (
      <Skeleton
        height="1rem"
        width="auto"
        mt="1rem"
        startColor="#222222"
        endColor="#444444"
      />
    );

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <SimpleGrid sx={{ gap: "1rem" }}>
          <SimpleGrid columns={{ base: 2 }} sx={{ gap: "1rem" }}>
            <RHFInput<ItemFormValues>
              name="serialCode"
              label="Serial number"
              type="text"
              disabled={disabled}
              required
            />
            <RHFSelect<ItemFormValues>
              name="type"
              label="Type"
              options={itemTypes}
              disabled={disabled}
              required
            />
          </SimpleGrid>
          <SimpleGrid columns={{ base: 2 }} sx={{ gap: "1rem" }}>
            <RHFSelect<ItemFormValues>
              name="qualityState"
              label="Quality state"
              options={itemQualityStates}
              disabled={disabled}
              required
            />
            <RHFAutocomplete<ItemFormValues>
              name="managerOwner"
              label="Item owner"
              options={parseUsersToSelectOptions(ownerCandidates?.content)}
              disabled={disabled}
              required
            />
          </SimpleGrid>
          <SimpleGrid columns={{ base: 1 }} sx={{ gap: "1rem" }}>
            <RHFTextArea<ItemFormValues>
              name="comment"
              label="Comment"
              disabled={disabled}
              placeholder="ex. more info about item's state"
            />
          </SimpleGrid>
          <SimpleGrid columns={{ base: 1 }} sx={{ gap: "1rem", pb: "1rem" }}>
            <Box
              sx={{
                display: "inline-flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "full",
              }}
            >
              <Button variant="secondary" label="Close" onClick={close} />
              <Button
                variant="primary"
                label={isEdit ? "Edit item" : "Add item"}
                type="submit"
              />
            </Box>
          </SimpleGrid>
        </SimpleGrid>
      </form>
    </FormProvider>
  );
};

export default ItemForm;
