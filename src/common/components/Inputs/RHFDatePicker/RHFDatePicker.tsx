import { useState } from "react";

import { FormControl, FormLabel, useTheme } from "@chakra-ui/react";
import { DatepickerConfigs, SingleDatepicker } from "chakra-dayzed-datepicker";
import { DateTime } from "luxon";
import { Controller, FieldPath, useFormContext } from "react-hook-form";

import { propsConfigs } from "./propsConfigs";

type RHFDatePickerProps<T extends object> = {
  label: string;
  disabled?: boolean;
  required?: boolean;
  name: FieldPath<T>;
};

const RHFDatePicker = <T extends object>({
  label,
  disabled,
  required,
  name,
  ...rest
}: RHFDatePickerProps<T>) => {
  const theme = useTheme();
  const { control } = useFormContext();

  type FirstDayOfWeek = DatepickerConfigs["firstDayOfWeek"];
  const [firstDayOfWeek] = useState<FirstDayOfWeek>(1);

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <FormControl
          isRequired={required}
          isInvalid={!!error}
          sx={{ display: "flex", flexDirection: "column" }}
        >
          <FormLabel
            sx={{
              fontSize: theme.components.Text.sizes.body2.fontSize,
              mb: "0.4rem",
            }}
          >
            {label}
          </FormLabel>
          <SingleDatepicker
            {...field}
            {...rest}
            date={new Date(Date.parse(field.value))}
            onDateChange={(date) =>
              field.onChange(DateTime.fromJSDate(date).toFormat("yyyy-MM-dd"))
            }
            closeOnSelect
            disabled={disabled}
            configs={{
              firstDayOfWeek,
              dateFormat: "dd. MMM yyyy",
            }}
            propsConfigs={propsConfigs}
          />
        </FormControl>
      )}
    />
  );
};

export default RHFDatePicker;
