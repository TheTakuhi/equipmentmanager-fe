import { ChangeEvent, FC, useState } from "react";

import {
  Text,
  FormControl,
  FormErrorMessage,
  FormLabel,
  useTheme,
} from "@chakra-ui/react";
import {
  AutoComplete,
  AutoCompleteInput,
  AutoCompleteItem,
  AutoCompleteList,
} from "@choc-ui/chakra-autocomplete";

import { autocompleteListStyle } from "./style";
import { SelectOption } from "../../../models/utils/SelectOption";

interface RHFAutocompleteProps {
  variant?: string;
  placeholder?: string;
  formLabel: string;
  disabled?: boolean;
  isRequired?: boolean;
  options: SelectOption[];
}

const RHFAutocomplete: FC<RHFAutocompleteProps> = ({
  variant,
  placeholder,
  formLabel,
  disabled,
  isRequired,
  options,
}) => {
  const theme = useTheme();
  const [input, setInput] = useState("");
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) =>
    setInput(e.target.value);
  const isError = input === "";

  return (
    <FormControl
      isRequired={isRequired}
      isInvalid={isError}
      sx={{ display: "flex", flexDirection: "column" }}
    >
      <FormLabel
        sx={{
          fontSize: theme.components.Text.sizes.body2.fontSize,
          mb: "0.4rem",
        }}
      >
        {formLabel}
      </FormLabel>
      <AutoComplete openOnFocus>
        <AutoCompleteInput
          variant={variant}
          placeholder={placeholder}
          disabled={disabled}
          onChange={handleInputChange}
        />
        <AutoCompleteList sx={autocompleteListStyle}>
          {options.map((option) => (
            <AutoCompleteItem key={option.value} value={option.value}>
              <Text size="menuItem">{option.label}</Text>
            </AutoCompleteItem>
          ))}
        </AutoCompleteList>
      </AutoComplete>
      {!isError || !isRequired ? (
        ""
      ) : (
        <FormErrorMessage
          sx={{
            fontSize: theme.components.Text.sizes.body3.fontSize,
            mt: "0.2rem",
          }}
        >
          {formLabel} is required.
        </FormErrorMessage>
      )}
    </FormControl>
  );
};

export default RHFAutocomplete;
