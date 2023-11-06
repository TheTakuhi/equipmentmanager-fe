import { ChangeEvent, FC, useState } from "react";

import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Select,
  useTheme,
} from "@chakra-ui/react";

import { SelectOption } from "../../../models/utils/SelectOption";

interface RHFSelectProps {
  variant?: string;
  placeholder?: string;
  formLabel: string;
  isRequired?: boolean;
  disabled?: boolean;
  options: SelectOption[];
}

const RHFSelect: FC<RHFSelectProps> = ({
  variant,
  placeholder,
  formLabel,
  disabled,
  isRequired,
  options,
}) => {
  const theme = useTheme();
  const [input, setInput] = useState("");
  const handleInputChange = (e: ChangeEvent<HTMLSelectElement>) =>
    setInput(e.target.value);
  const isError = input === "";

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
      <Select
        variant={variant}
        placeholder={placeholder}
        disabled={disabled}
        onChange={handleInputChange}
      >
        {options.map((option) => (
          <option
            style={{
              backgroundColor: theme.palette.secondary.main,
              border: `1px solid ${theme.palette.secondary.light}`,
              borderRadius: theme.borderRadius.element,
              fontSize: "1em",
            }}
            key={option.key}
            value={option.key}
          >
            {option.value}
          </option>
        ))}
      </Select>
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

export default RHFSelect;
