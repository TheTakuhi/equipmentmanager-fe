import {
  FormControl,
  FormLabel,
  Radio,
  RadioGroup,
  Stack,
  Text,
  useTheme,
} from "@chakra-ui/react";
import { Props } from "chakra-react-select";
import {
  Controller,
  FieldPath,
  FieldValues,
  useFormContext,
} from "react-hook-form";

type RHFRadioGroupProps<T extends object> = Props & {
  name: FieldPath<T>;
  label: string;
  options: string[];
};

const RHFRadioGroup = <T extends object>({
  name,
  label,
  options,
}: RHFRadioGroupProps<T>) => {
  const { control } = useFormContext<FieldValues, T>();
  const theme = useTheme();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => {
        const selectedValues = field.value || [""];
        return (
          <FormControl sx={{ width: "100%" }}>
            <FormLabel
              id={`${name}-label`}
              sx={{
                fontSize: theme.components.Text.sizes.body2.fontSize,
                mb: "0.4rem",
              }}
            >
              {label}
            </FormLabel>
            <RadioGroup defaultValue={selectedValues[0]}>
              <Stack spacing={[1, 5]} direction={["column", "row"]}>
                {options.map((option: string) => (
                  <Radio
                    key={option}
                    isChecked={field.value === option}
                    value={option}
                    onChange={() => {
                      field.onChange([option]);
                    }}
                  >
                    <Text sx={{ textTransform: "capitalize" }}>
                      {option.toLowerCase()}
                    </Text>
                  </Radio>
                ))}
              </Stack>
            </RadioGroup>
          </FormControl>
        );
      }}
    />
  );
};

export default RHFRadioGroup;
