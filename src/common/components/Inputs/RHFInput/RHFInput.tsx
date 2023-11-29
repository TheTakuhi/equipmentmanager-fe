import { ChangeEvent, useState } from "react";

import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  useTheme,
} from "@chakra-ui/react";
import { css } from "@emotion/react";
import { Props } from "chakra-react-select";
import { Controller, FieldPath, useFormContext } from "react-hook-form";

type RHFInputProps<T extends object> = Props & {
  variant?: string;
  type?: string;
  placeholder?: string;
  formLabel: string;
  isRequired?: boolean;
  disabled?: boolean;
  name: FieldPath<T>;
};

// TODO IMPLEMENT WARNING IF EMPTY IF MANDATORY
const RHFInput = <T extends object>({
  variant,
  type,
  placeholder,
  formLabel,
  isRequired,
  disabled,
  name,
  ...rest
}: RHFInputProps<T>) => {
  const theme = useTheme();
  const { control } = useFormContext();
  // const [input] = useState("");
  // const handleInputChange = (e: ChangeEvent<HTMLInputElement>) =>
  //   setInput(e.target.value);
  // const isError = input === "";

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
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => {
        return (
          <FormControl
            isRequired={isRequired}
            // isInvalid={isError}
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
              {...field}
              {...rest}
              variant={variant}
              type={type}
              placeholder={placeholder}
              // value={input}
              // onChange={handleInputChange}
              disabled={disabled}
              css={customStyles}
            />
            {/*{!isError || !isRequired ? (*/}
            {/*  ""*/}
            {/*) : (*/}
            {/*  <FormErrorMessage*/}
            {/*    sx={{*/}
            {/*      fontSize: theme.components.Text.sizes.body3.fontSize,*/}
            {/*      mt: "0.2rem",*/}
            {/*    }}*/}
            {/*  >*/}
            {/*    {error?.message as string}*/}
            {/*  </FormErrorMessage>*/}
            {/*)}*/}
          </FormControl>
        );
      }}
    />
  );
};

export default RHFInput;
