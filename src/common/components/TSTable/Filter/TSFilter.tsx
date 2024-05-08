import React, { FC, useState } from "react";

import {
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useTheme,
} from "@chakra-ui/react";
import { Column, ColumnFilter } from "@tanstack/react-table";
import { Filter } from "react-feather";

interface FilterItem {
  value: string | number;
  label: string;
}

interface FilterProps {
  column: Column<unknown, unknown>;
  onChange: (values: ColumnFilter[]) => void;
  data: FilterItem[];
}

const TSFilter: FC<FilterProps> = ({ column, onChange, data }) => {
  const theme = useTheme();
  const [selectedValue, setSelectedValue] = useState<string | undefined>("");

  const handleMenuItemClick = (
    _: React.MouseEvent<HTMLButtonElement>,
    value: string | undefined,
  ) => {
    setSelectedValue(value);
    onChange([{ id: column.id, value }]);
  };

  return (
    <Menu>
      <MenuButton
        sx={{
          svg: {
            width: "1rem",
            height: "1rem",
            color: theme.palette.text.disabled,
          },
          _hover: {
            bg: theme.palette.secondary.main,
            svg: {
              color: theme.palette.text.primary,
            },
          },
        }}
      >
        <Filter />
      </MenuButton>
      <MenuList>
        <MenuItem
          value=""
          onClick={(event) => handleMenuItemClick(event, undefined)}
        >
          All
        </MenuItem>
        {data
          ? data.map((item) => (
              <MenuItem
                key={item.value}
                value={selectedValue} // TODO
                onClick={(event) =>
                  handleMenuItemClick(event, item.value.toString())
                }
                sx={{ textTransform: "capitalize" }}
              >
                {item.label}
              </MenuItem>
            ))
          : ""}
      </MenuList>
    </Menu>
  );
};

export default TSFilter;
