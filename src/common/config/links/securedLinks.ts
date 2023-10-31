import { HomeOutlined } from "@mui/icons-material";

import { MainNavigationLink } from "./index";
import { ADMIN, MANAGER } from "../../security/model/Role";
import { getFullUrl } from "../../utils/getFullUrl";

export const items: MainNavigationLink = {
  url: getFullUrl(`${import.meta.env.VITE_APP_PUBLIC_URL}/items`),
  partialPath: "../items",
  label: "Items",
  key: "Items",
  icon: HomeOutlined,
  allowedRoles: [MANAGER, ADMIN],
};

export const loans: MainNavigationLink = {
  url: getFullUrl(`${import.meta.env.VITE_APP_PUBLIC_URL}/loans`),
  partialPath: "../loans",
  label: "Loans",
  key: "Loans",
  icon: HomeOutlined,
  allowedRoles: [MANAGER, ADMIN],
};

export const teams: MainNavigationLink = {
  url: getFullUrl(`${import.meta.env.VITE_APP_PUBLIC_URL}/teams`),
  partialPath: "../teams",
  label: "Teams",
  key: "Teams",
  icon: HomeOutlined,
  allowedRoles: [MANAGER, ADMIN],
};

export const users: MainNavigationLink = {
  url: getFullUrl(`${import.meta.env.VITE_APP_PUBLIC_URL}/users`),
  partialPath: "../users",
  label: "Users",
  key: "Users",
  icon: HomeOutlined,
  allowedRoles: [ADMIN],
};

export const secLinks = {
  items,
  loans,
  teams,
  users,
};

const links = {
  ...secLinks,
};

export default links;
