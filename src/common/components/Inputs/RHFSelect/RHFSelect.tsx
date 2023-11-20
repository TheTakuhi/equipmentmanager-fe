import { FC, useState } from "react";

import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  useTheme,
} from "@chakra-ui/react";
import { Props, Select, SingleValue } from "chakra-react-select";

import { SelectOption } from "../../../models/utils/SelectOption";

interface RHFSelectProps {
  variant?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  formLabel: string;
  options: SelectOption[];
}

const RHFSelect: FC<RHFSelectProps & Props> = ({
  variant,
  placeholder,
  formLabel,
  required,
  disabled,
  options,
  ...rest
}) => {
  const theme = useTheme();
  // const { control } = useFormContext();
  const [input, setInput] = useState<SingleValue<SelectOption>>(options[0]);
  const handleInputChange = (newValue: SingleValue<SelectOption>) =>
    setInput(newValue);
  const isError = input === undefined;

  // TODO - implement Controller
  return (
    // <Controller
    //   control={control}
    //   name={name}
    //   render={({ field, fieldState: { error } }) => (
    <FormControl
      isRequired={required}
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
      <Select
        {...rest}
        isDisabled={disabled}
        value={required ? undefined : input}
        // TODO
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
          {formLabel} is required.
        </FormErrorMessage>
      )}
    </FormControl>
    // )}
    // />
  );
};

export default RHFSelect;
