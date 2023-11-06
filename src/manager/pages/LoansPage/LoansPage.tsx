import { Box, Skeleton, Stack, useTheme } from "@chakra-ui/react";

import RHFAutocomplete from "../../../common/components/Inputs/RHFAutocomplete";
import RHFDatePicker from "../../../common/components/Inputs/RHFDatePicker";
import RHFInput from "../../../common/components/Inputs/RHFInput";
import RHFSelect from "../../../common/components/Inputs/RHFSelect";
import RHFTextArea from "../../../common/components/Inputs/RHFTextArea";
import { useItemTypes } from "../../../common/hooks/queries/utility/useItemTypes";

const LoansPage = () => {
  const theme = useTheme();

  const { itemTypes, isLoading: isLoadingItemTypes } = useItemTypes();

  if (isLoadingItemTypes) return <Skeleton />;

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.default,
        borderRadius: theme.borderRadius.element,
        color: theme.palette.text.primary,
      }}
    >
      LOANS PAGE
      <Stack sx={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
        <RHFInput
          variant="unstyled"
          formLabel="Text input test"
          placeholder="text to test"
        />
        <RHFInput
          variant="unstyled"
          formLabel="Required Text input test"
          placeholder="blablabla"
          isRequired
        />
        <RHFInput
          variant="unstyled"
          formLabel="Text input test"
          placeholder="text to test"
          disabled
        />
        <RHFInput
          variant="unstyled"
          type="date"
          formLabel="Datetime picker test"
        />
        <RHFInput
          variant="unstyled"
          type="date"
          formLabel="Disabled datetime picker test"
          disabled
        />
        <RHFDatePicker formLabel="DatePicker test" />
        <RHFDatePicker formLabel="DatePicker test" isRequired />
        <RHFDatePicker formLabel="DatePicker test" disabled />
        <RHFTextArea
          variant="unstyled"
          formLabel="Text area test"
          placeholder="textarea text text"
        />
        <RHFTextArea
          variant="unstyled"
          formLabel="Text area disabled"
          placeholder="textarea text disabled"
          disabled
        />
        <RHFSelect
          variant="unstyled"
          formLabel="Select test"
          options={itemTypes}
        />
        <RHFSelect
          variant="unstyled"
          formLabel="Select test disabled"
          options={itemTypes}
          disabled
        />
        <RHFSelect
          variant="unstyled"
          formLabel="Select required"
          options={itemTypes}
          isRequired
        />
        <RHFAutocomplete
          variant="unstyled"
          formLabel="Autocomplete test"
          options={itemTypes}
        />
        <RHFAutocomplete
          variant="unstyled"
          formLabel="Autocomplete test"
          options={itemTypes}
          disabled
        />
        <RHFAutocomplete
          variant="unstyled"
          formLabel="Autocomplete test"
          options={itemTypes}
          isRequired
        />
      </Stack>
    </Box>
  );
};

export default LoansPage;
