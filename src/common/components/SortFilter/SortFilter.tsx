import { FC } from "react";

import { Box, Select, Text } from "@chakra-ui/react";

export type SelectOptionType = {
  value: string;
  label: string;
};

interface SortFilterProps {
  options: SelectOptionType[];
}

const SortFilter: FC<SortFilterProps> = ({ options }) => {
  return (
    <Box sx={{ position: "relative" }}>
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
