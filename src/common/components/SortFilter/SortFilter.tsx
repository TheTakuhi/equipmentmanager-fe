import { FC, useState } from "react";

import { Box, SystemStyleObject, Text, useTheme } from "@chakra-ui/react";
import { Select, SingleValue } from "chakra-react-select";

import { SelectOption } from "../../models/utils/SelectOption";

interface SortFilterProps {
  options: SelectOption[];
  sx?: SystemStyleObject;
}

const SortFilter: FC<SortFilterProps> = ({ options, sx }) => {
  const theme = useTheme();
  const [input, setInput] = useState<SingleValue<SelectOption>>(options[0]);

  const handleInputChange = (newValue: SingleValue<SelectOption>) =>
    setInput(newValue);

  return (
    <Box sx={{ position: "relative", ...sx }}>
      <Text
        sx={{
          zIndex: 1,
          position: "absolute",
          top: "0.5rem",
          left: "1rem",
          color: (t) => t.palette.text.disabled,
        }}
      >
        by
      </Text>
      <Select
        options={options}
        value={input}
        onChange={(newValue: SingleValue<SelectOption>, _) =>
          handleInputChange(newValue)
        }
        isSearchable={false}
        useBasicStyles
        variant="sortFilter"
        chakraStyles={{
          control: (provided) => ({
            ...provided,
            h: "auto",
            height: "auto",
            minH: "36px",
            minHeight: "36px",
            bg: theme.palette.secondary.header,
            cursor: "pointer",
          }),
          singleValue: (provided) => ({
            ...provided,
            marginLeft: "1.75rem",
          }),
          dropdownIndicator: (provided) => ({
            ...provided,
            color: theme.palette.text.disabled,
          }),
          menuList: (provided) => ({
            ...provided,
            width: "100%",
            padding: "0.5rem 0",
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
    </Box>
  );
};

export default SortFilter;
