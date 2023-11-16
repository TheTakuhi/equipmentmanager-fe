import { FileText, Grid, User, Users } from "react-feather";

import { MainNavigationLink } from "./index";
import { ADMIN, MANAGER } from "../../security/model/Role";
import { getFullUrl } from "../../utils/getFullUrl";

// TODO FIX from items/123 and users/123

export const items: MainNavigationLink = {
  url: getFullUrl(`${import.meta.env.VITE_APP_PUBLIC_URL}/items`),
  partialPath: "/equipment-manager/management/items",
  label: "Items",
  key: "Items",
  icon: Grid,
  allowedRoles: [MANAGER, ADMIN],
};

export const loans: MainNavigationLink = {
  url: getFullUrl(`${import.meta.env.VITE_APP_PUBLIC_URL}/loans`),
  partialPath: "/equipment-manager/management/loans",
  label: "Loans",
  key: "Loans",
  icon: FileText,
  allowedRoles: [MANAGER, ADMIN],
};

export const teams: MainNavigationLink = {
  url: getFullUrl(`${import.meta.env.VITE_APP_PUBLIC_URL}/teams`),
  partialPath: "/equipment-manager/management/teams",
  label: "Teams",
  key: "Teams",
  icon: Users,
  allowedRoles: [MANAGER, ADMIN],
};

export const users: MainNavigationLink = {
  url: getFullUrl(`${import.meta.env.VITE_APP_PUBLIC_URL}/my-people`),
  partialPath: "/equipment-manager/management/my-people",
  label: "My people",
  key: "My people",
  icon: User,
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
