import { ChangeEvent, useState } from "react";

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
import { Props } from "chakra-react-select";
import { Controller, FieldPath, useFormContext } from "react-hook-form";

import { autocompleteListStyle } from "./style";
import { SelectOption } from "../../../models/utils/SelectOption";

type RHFAutocompleteProps<T extends object> = Props & {
  variant?: string;
  placeholder?: string;
  formLabel: string;
  disabled?: boolean;
  isRequired?: boolean;
  options: SelectOption[];
  name: FieldPath<T>;
};

const RHFAutocomplete = <T extends object>({
  variant,
  placeholder,
  formLabel,
  disabled,
  isRequired,
  options,
  name,
  ...rest
}: RHFAutocompleteProps<T>) => {
  const theme = useTheme();
  const { control } = useFormContext();
  const [input, setInput] = useState("");
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) =>
    setInput(e.target.value);
  const isError = input === "";

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
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
              {...field}
              {...rest}
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
              {formLabel} is required. {error?.message as string}
            </FormErrorMessage>
          )}
        </FormControl>
      )}
    />
  );
};

export default RHFAutocomplete;
