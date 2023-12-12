import { useState } from "react";

import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  useTheme,
} from "@chakra-ui/react";
import { Props, Select, MultiValueRemoveProps } from "chakra-react-select";
import { Controller, FieldPath, useFormContext } from "react-hook-form";

import { SelectOption } from "../../../models/utils/SelectOption";

type RHFMultiSelectProps<T extends object> = Props & {
  variant?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  formLabel: string;
  options: SelectOption[];
  name: FieldPath<T>;
};

const RHFMultiSelect = <T extends object>({
                                       variant,
                                       placeholder,
                                       formLabel,
                                       required,
                                       disabled,
                                       options,
                                       name,
                                       ...rest
                                     }: RHFMultiSelectProps<T>) => {
  const theme = useTheme();
  const { control } = useFormContext();
  const [input, setInput] = useState<MultiValueRemoveProps<SelectOption>>(options[0]);
  const handleInputChange = (newValue: MultiValueRemoveProps<SelectOption>) =>
    setInput(newValue);
  const isError = input === undefined;

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <FormControl
          isRequired={required}
          isInvalid={isError}
          sx={{ display: "flex", flexDirection: "column" }}
          label="String"
        >
          <FormLabel
            sx={{
              fontSize: theme.components.Text.sizes.body2.fontSize,
              mb: "0.4rem",
            }}
          >
            {formLabel}
          </FormLabel>
          <Select
            {...field}
            {...rest}
            isDisabled={disabled}
            value={input}
            // TODO fix ts-ignore
            // @ts-ignore
            onChange={(newValue: MultiValueRemoveProps<SelectOption>, _) =>
              handleInputChange(newValue)
            }
            options={options}
            useBasicStyles
            chakraStyles={{
              menuList: (provided) => ({
                ...provided,
                width: "100%",
                padding: "0.75rem 0",
                gap: "0.25rem",
              }),
              option: (provided) => ({
                ...provided,
                fontSize: "0.875em",
                margin: 0,
                padding: "0.3rem 1rem",
                _selected: {
                  background: theme.palette.secondary.light,
                },
              }),
            }}
          />
          {!isError || !required ? (
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

export default RHFMultiSelect;
