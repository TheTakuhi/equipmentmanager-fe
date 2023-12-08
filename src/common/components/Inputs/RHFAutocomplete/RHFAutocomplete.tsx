import {
  Text,
  FormControl,
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

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <FormControl
          isRequired={isRequired}
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
          <AutoComplete openOnFocus {...field} {...rest}>
            <AutoCompleteInput
              variant={variant}
              placeholder={placeholder}
              disabled={disabled}
            />
            <AutoCompleteList sx={autocompleteListStyle}>
              {options.map((option) => (
                <AutoCompleteItem key={option.value} value={option.value} label={option.label}>
                  <Text size="menuItem">{option.label}</Text>
                </AutoCompleteItem>
              ))}
            </AutoCompleteList>
          </AutoComplete>
        </FormControl>
      )}
    />
  );
};

export default RHFAutocomplete;
