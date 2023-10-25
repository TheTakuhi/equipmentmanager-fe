import { HomeOutlined } from "@mui/icons-material";

import { MainNavigationLink } from "./index";
import { ADMIN, MANAGER } from "../../security/model/Role";
import { getFullUrl } from "../../utils/getFullUrl";

export const items: MainNavigationLink = {
  url: getFullUrl(`${import.meta.env.PUBLIC_URL}/items`),
  partialPath: "../dashboard",
  label: "Items",
  key: "Items",
  icon: HomeOutlined,
  allowedRoles: [MANAGER, ADMIN],
};

export const secLinks = {
  items,
};

const links = {
  ...secLinks,
};

export default links;
