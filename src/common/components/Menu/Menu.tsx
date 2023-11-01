import { FC, ReactElement } from "react";

import {
  Menu as MenuOrigin,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { MoreVertical } from "react-feather";

export type MenuItemType = {
  label: string;
  icon: ReactElement;
  onClick: () => void;
};

interface MenuProps {
  menuItems: MenuItemType[];
}

const Menu: FC<MenuProps> = ({ menuItems }) => {
  return (
    <MenuOrigin variant="basic">
      <MenuButton>
        <MoreVertical />
      </MenuButton>
      <MenuList>
        {menuItems.map((item, index) => (
          <MenuItem key={index} icon={item.icon} onClick={item.onClick}>
            <Text size="menuItem">{item.label}</Text>
          </MenuItem>
        ))}
      </MenuList>
    </MenuOrigin>
  );
};

export default Menu;
