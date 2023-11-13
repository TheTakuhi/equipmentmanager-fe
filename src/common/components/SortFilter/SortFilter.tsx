import { FC } from "react";

import { Box, Select, SystemStyleObject, Text } from "@chakra-ui/react";

export type SelectOptionType = {
  value: string;
  label: string;
};

interface SortFilterProps {
  options: SelectOptionType[];
  sx?: SystemStyleObject;
}

const SortFilter: FC<SortFilterProps> = ({ options, sx }) => {
  return (
    <Box sx={{ position: "relative", ...sx }}>
      <Text
        sx={{
          zIndex: 1,
          position: "absolute",
          top: 2.5,
          left: "1rem",
          color: (t) => t.palette.text.disabled,
        }}
      >
        by
      </Text>
      <Select variant="sortFilter">
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </Select>
    </Box>
  );
};

export default SortFilter;
