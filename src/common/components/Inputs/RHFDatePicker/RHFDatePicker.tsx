import { FC, useState } from "react";

import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  useTheme,
} from "@chakra-ui/react";
import { DatepickerConfigs, SingleDatepicker } from "chakra-dayzed-datepicker";

import { propsConfigs } from "./propsConfigs";

interface RHFDatePickerProps {
  formLabel: string;
  disabled?: boolean;
  isRequired?: boolean;
}

const RHFDatePicker: FC<RHFDatePickerProps> = ({
  formLabel,
  disabled,
  isRequired,
}) => {
  const theme = useTheme();
  const [date, setDate] = useState(new Date());

  type FirstDayOfWeek = DatepickerConfigs["firstDayOfWeek"];
  const [firstDayOfWeek] = useState<FirstDayOfWeek>(1);

  const isError = date.getDate().toString() === "";

  return (
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
        name="date-input"
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
          {formLabel} is required.
        </FormErrorMessage>
      )}
    </FormControl>
  );
};

export default RHFDatePicker;
