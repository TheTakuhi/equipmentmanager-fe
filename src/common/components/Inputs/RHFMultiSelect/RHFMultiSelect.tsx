import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  useTheme,
} from "@chakra-ui/react";
import { Props, Select } from "chakra-react-select";
import { Controller, FieldPath, useFormContext } from "react-hook-form";

import { SelectOption } from "../../../models/utils/SelectOption";

type RHFMultiSelectProps<T extends object> = Props & {
  required?: boolean;
  disabled?: boolean;
  formLabel: string;
  options: SelectOption[];
  name: FieldPath<T>;
};

const RHFMultiSelect = <T extends object>({
  formLabel,
  required,
  disabled,
  options,
  name,
  ...rest
}: RHFMultiSelectProps<T>) => {
  const theme = useTheme();
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <FormControl
          isRequired={required}
          isInvalid={!!error}
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
            // TODO - nechat value jako object SelectOption (upravit tedy schema na typ objektu a vytahovat si value potom při odeslání), nebo to jde osetrit uz zde??
            value={field.value}
            isMulti
            closeMenuOnSelect={false}
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
          <FormErrorMessage
            sx={{
              fontSize: theme.components.Text.sizes.body3.fontSize,
              mt: "0.2rem",
            }}
          >
            {error && (error.message as string)}
            {/* TODO - Aktualne neprojde, protoze schema chce string ale prichazi mu object SelectOption */}
            {/* {console.log(error)} */}
          </FormErrorMessage>
        </FormControl>
      )}
    />
  );
};

export default RHFMultiSelect;
