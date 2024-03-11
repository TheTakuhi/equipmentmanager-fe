import { FC } from "react";

import { Box, SimpleGrid, Skeleton } from "@chakra-ui/react";
import { FormProvider } from "react-hook-form";

import { useLoanForm } from "./hooks/useLoanForm/useLoanForm";
import Button from "../../components/Button";
import RHFDatePicker from "../../components/Inputs/RHFDatePicker";
import RHFSelect from "../../components/Inputs/RHFSelect";
import { useGetItems } from "../../hooks/queries/items/useGetItems";
import { useGetUsers } from "../../hooks/queries/users/useGetUsers";
import { ItemState } from "../../models/item/ItemState";
import { LoanFormValues } from "../../models/loan/LoanFormValues";
import {
  parseItemsToSelectOptions,
  parseUsersToSelectOptions,
} from "../../utils/selectOptionsParser";

export type LoanFormSubmitHandler = (values: LoanFormValues) => void;

type LoanFormProps = {
  handleSubmit: LoanFormSubmitHandler;
  defaultValues?: Partial<LoanFormValues>;
  isEdit?: boolean;
  close: () => void;
  isSubmitting: boolean;
};

const LoanForm: FC<LoanFormProps> = ({
  handleSubmit,
  defaultValues,
  isEdit,
  close,
  isSubmitting,
}) => {
  const form = useLoanForm({ defaultValues });

  const { data: items, isLoading: isLoadingItems } = useGetItems({
    state: ItemState.AVAILABLE,
  });
  const { data: users, isLoading: isLoadingUsers } = useGetUsers();

  if (isLoadingUsers || isLoadingItems) return <Skeleton height="1rem" />;

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <SimpleGrid sx={{ gap: "1rem" }}>
          <RHFSelect<LoanFormValues>
            name="item"
            options={parseItemsToSelectOptions(items?.content)}
            label="Item"
            required={!isEdit}
            isDisabled={isEdit}
          />
          <RHFSelect<LoanFormValues>
            name="borrower"
            options={parseUsersToSelectOptions(users?.content)}
            label="Borrower"
            required={!isEdit}
            isDisabled={isEdit}
          />
          {isEdit ? (
            <RHFDatePicker<LoanFormValues>
              name="returnDate"
              label="Return date"
              required={isEdit}
            />
          ) : (
            <RHFDatePicker<LoanFormValues>
              name="loanDate"
              label="Lending date"
              required
            />
          )}

          <SimpleGrid columns={{ base: 1 }} sx={{ gap: "1rem", pb: "1rem" }}>
            <Box
              sx={{
                display: "inline-flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "full",
              }}
            >
              <Button variant="secondary" label="Cancel" onClick={close} />
              <Button
                variant="primary"
                label={isEdit ? "Return item" : "Lend item"}
                type="submit"
                isLoading={isSubmitting}
                loadingText="Submitting"
              />
            </Box>
          </SimpleGrid>
        </SimpleGrid>
      </form>
    </FormProvider>
  );
};

export default LoanForm;
