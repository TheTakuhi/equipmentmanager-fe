import { FC } from "react";

import { Box, SimpleGrid, Skeleton } from "@chakra-ui/react";
import { FormProvider } from "react-hook-form";

import { useLoanForm } from "./hooks/useLoanForm/useLoanForm";
import Button from "../../components/Button";
import RHFDatePicker from "../../components/Inputs/RHFDatePicker";
import RHFSelect from "../../components/Inputs/RHFSelect";
import { useGetItems } from "../../hooks/queries/items/useGetItems";
import { useGetUsers } from "../../hooks/queries/users/useGetUsers";
import { LoanFormValues } from "../../models/loan/LoanFormValues";
import {
  parseItemsToSelectOptions,
  parseUsersToSelectOptions,
} from "../../utils/selectOptionsParser";

export type LoanFormSubmitHandler = (values: LoanFormValues) => void;

type LoanFormProps = {
  handleSubmit: LoanFormSubmitHandler;
  defaultValues?: Partial<LoanFormValues>;
};

const LoanForm: FC<LoanFormProps & { isEdit?: boolean; close: () => void }> = ({
  handleSubmit,
  defaultValues,
  isEdit,
  close,
}) => {
  const form = useLoanForm({ defaultValues });

  // TODO - specify queries (items from current user + available borrowers according to current user)
  const { data: items, isLoading: isLoadingItems } = useGetItems();
  const { data: users, isLoading: isLoadingUsers } = useGetUsers();

  if (isLoadingUsers || isLoadingItems) return <Skeleton height="1rem" />;

  // TODO - disable field based on isEdit after connection to BE
  // TODO - itemId & borrowerId are selected correctly, but not shown in select
  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <SimpleGrid sx={{ gap: "1rem" }}>
          <RHFSelect<LoanFormValues>
            name="itemId"
            options={parseItemsToSelectOptions(items?.content)}
            label="Item"
            required
          />
          <RHFSelect<LoanFormValues>
            name="borrowerId"
            options={parseUsersToSelectOptions(users?.content)}
            label="Borrower"
            required
          />
          {isEdit ? (
            <RHFDatePicker<LoanFormValues>
              label="Return date"
              name="dateOfReturning"
              required={isEdit}
            />
          ) : (
            <RHFDatePicker<LoanFormValues>
              name="dateOfLending"
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
              />
            </Box>
          </SimpleGrid>
        </SimpleGrid>
      </form>
    </FormProvider>
  );
};

export default LoanForm;
