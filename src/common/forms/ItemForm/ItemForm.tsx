import { FC } from "react";

import { Box, SimpleGrid, Skeleton } from "@chakra-ui/react";
import { FormProvider } from "react-hook-form";

import { useItemForm } from "./hooks/useItemForm/useItemForm";
import RHFInput from "../../components/Inputs/RHFInput";
import RHFSelect from "../../components/Inputs/RHFSelect";
import RHFTextArea from "../../components/Inputs/RHFTextArea";
import { useItemQualityStates } from "../../hooks/queries/utility/useItemQualityStates";
import { useItemTypes } from "../../hooks/queries/utility/useItemTypes";
import { ItemFormValues } from "../../models/item/ItemFormValues";
import Button from "../../components/Button";

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

  // TODO IMPLEMENT ITEM FORM SKELETON LOADING
  if (isLoadingItemTypes || isLoadingQualityStates) return <Skeleton />;

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <SimpleGrid sx={{ gap: "1rem" }}>
          <SimpleGrid columns={{ base: 2 }} sx={{ gap: "1rem" }}>
            <RHFInput<typeof form>
              name="serialCode"
              formLabel="Serial number"
              type="text"
              disabled={disabled}
              isRequired
            />
            <RHFSelect<typeof form>
              name="type"
              formLabel="Type"
              options={itemTypes}
              disabled={disabled}
              isRequired
            />
          </SimpleGrid>
          <SimpleGrid columns={{ base: 1 }} sx={{ gap: "1rem" }}>
            <RHFSelect<typeof form>
              name="qualityState"
              formLabel="Quality state"
              options={itemQualityStates}
              disabled={disabled}
              isRequired
            />
            <RHFTextArea<typeof form>
              name="comment"
              formLabel="Comment"
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
