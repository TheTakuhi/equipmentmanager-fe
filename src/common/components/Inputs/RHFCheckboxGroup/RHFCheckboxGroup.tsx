import {
  Checkbox,
  CheckboxGroup,
  FormControl,
  FormLabel,
  Stack,
  Text,
  useTheme,
} from "@chakra-ui/react";
import { Props } from "chakra-react-select";
import { Controller, FieldPath, useFormContext } from "react-hook-form";

type RHFCheckboxGroupProps<T extends object> = Props & {
  name: FieldPath<T>;
  label: string;
  options: string[];
  required?: boolean;
};

const RHFCheckboxGroup = <T extends object>({
  name,
  label,
  options,
  required,
}: RHFCheckboxGroupProps<T>) => {
  const { control } = useFormContext();
  const theme = useTheme();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => {
        return (
          <FormControl isRequired={required} sx={{ width: "100%" }}>
            <FormLabel
              id={`${name}-label`}
              sx={{
                fontSize: theme.components.Text.sizes.body2.fontSize,
                mb: "0.4rem",
              }}
            >
              {label}
            </FormLabel>

            <CheckboxGroup defaultValue={field.value || []}>
              <Stack spacing={[1, 5]} direction={["column", "row"]}>
                {options.map((option: string) => (
                  <Checkbox
                    key={option}
                    value={option}
                    onChange={() => {
                      const selectedValues = field.value || [""];
                      if (
                        Array.isArray(selectedValues) &&
                        selectedValues.includes(option)
                      ) {
                        field.onChange(
                          selectedValues.filter((v: string) => v !== option),
                        );
                      } else {
                        field.onChange([...selectedValues, option]);
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
