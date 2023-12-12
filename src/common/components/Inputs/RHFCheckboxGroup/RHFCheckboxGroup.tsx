import { FC } from "react";

import {
  Checkbox,
  CheckboxGroup,
  FormControl,
  FormLabel,
  Stack,
  Text,
  useTheme,
} from "@chakra-ui/react";
import { Controller, useFormContext } from "react-hook-form";

interface RHFCheckboxGroupProps {
  name: string;
  label: string;
  options: string[];
  required?: boolean;
}

const RHFCheckboxGroup: FC<RHFCheckboxGroupProps> = ({
  name,
  label,
  options,
  required,
}) => {
  const { control } = useFormContext();
  const theme = useTheme();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => {
        return (
          <FormControl required={required} sx={{ width: "100%" }}>
            <FormLabel
              id={`${name}-label`}
              sx={{
                fontSize: theme.components.Text.sizes.body2.fontSize,
                mb: "0.4rem",
              }}
            >
              {label}
            </FormLabel>

            <CheckboxGroup defaultValue={field.value}>
              <Stack spacing={[1, 5]} direction={["column", "row"]}>
                {options.map((option) => (
                  <Checkbox
                    key={option}
                    value={option}
                    onChange={() => {
                      if (field.value.includes(option)) {
                        field.onChange(field.value.filter((v) => v !== option));
                      } else {
                        field.onChange([...field.value, option]);
                      }
                    }}
                  >
                    <Text sx={{ textTransform: "capitalize" }}>
                      {option.toLowerCase()}
                    </Text>
                  </Checkbox>
                ))}
              </Stack>
            </CheckboxGroup>
          </FormControl>
        );
      }}
    />
  );
};

export default RHFCheckboxGroup;
