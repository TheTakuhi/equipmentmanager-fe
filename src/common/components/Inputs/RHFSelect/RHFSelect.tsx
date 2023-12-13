import { useState } from "react";

import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  useTheme,
} from "@chakra-ui/react";
import { Props, Select, SingleValue } from "chakra-react-select";
import { Controller, FieldPath, useFormContext } from "react-hook-form";

import { SelectOption } from "../../../models/utils/SelectOption";

type RHFSelectProps<T extends object> = Props & {
  required?: boolean;
  disabled?: boolean;
  formLabel: string;
  options: SelectOption[];
  name: FieldPath<T>;
};

const RHFSelect = <T extends object>({
  formLabel,
  required,
  disabled,
  options,
  name,
  ...rest
}: RHFSelectProps<T>) => {
  const theme = useTheme();
  const { control } = useFormContext();
  const [input, setInput] = useState<SingleValue<SelectOption>>(options[0]);
  const handleInputChange = (newValue: SingleValue<SelectOption>) =>
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
            onChange={(newValue: SingleValue<SelectOption>, _) =>
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

export default RHFSelect;
