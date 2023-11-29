import { useState } from "react";

import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  useTheme,
} from "@chakra-ui/react";
import { DatepickerConfigs, SingleDatepicker } from "chakra-dayzed-datepicker";
import { Props } from "chakra-react-select";
import { Controller, FieldPath, useFormContext } from "react-hook-form";

import { propsConfigs } from "./propsConfigs";

type RHFDatePickerProps<T extends object> = Props & {
  formLabel: string;
  disabled?: boolean;
  isRequired?: boolean;
  name: FieldPath<T>;
};

const RHFDatePicker = <T extends object>({
  formLabel,
  disabled,
  isRequired,
  name,
  ...rest
}: RHFDatePickerProps<T>) => {
  const theme = useTheme();
  const { control } = useFormContext();
  const [date, setDate] = useState(new Date());

  type FirstDayOfWeek = DatepickerConfigs["firstDayOfWeek"];
  const [firstDayOfWeek] = useState<FirstDayOfWeek>(1);

  const isError = date.getDate().toString() === "";

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
          <SingleDatepicker
            {...field}
            {...rest}
            name={name}
            date={date}
            onDateChange={setDate}
            closeOnSelect
            disabled={disabled}
            configs={{
              firstDayOfWeek,
              dateFormat: "dd. MMM yyyy",
            }}
            propsConfigs={propsConfigs}
          />
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

export default RHFDatePicker;
