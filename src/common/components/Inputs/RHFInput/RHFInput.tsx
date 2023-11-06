import { ChangeEvent, FC, useState } from "react";

import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  useTheme,
} from "@chakra-ui/react";
import { css } from "@emotion/react";

interface RHFInputProps {
  variant?: string;
  type?: string;
  placeholder?: string;
  formLabel: string;
  isRequired?: boolean;
  disabled?: boolean;
}

const RHFInput: FC<RHFInputProps> = ({
  variant,
  type,
  placeholder,
  formLabel,
  isRequired,
  disabled,
}) => {
  const theme = useTheme();
  const [input, setInput] = useState("");
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) =>
    setInput(e.target.value);
  const isError = input === "";

  const customStyles = css`
    ::-webkit-calendar-picker-indicator {
      filter: invert(1);
      cursor: pointer;
      width: 1.2rem;
      height: 1.2rem;
      border-radius: 8px;
    }
  `;

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
      <Input
        variant={variant}
        type={type}
        placeholder={placeholder}
        value={input}
        onChange={handleInputChange}
        disabled={disabled}
        css={customStyles}
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

export default RHFInput;
