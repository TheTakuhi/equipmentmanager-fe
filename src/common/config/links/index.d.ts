import { ComponentElement } from "react";

export interface MainNavigationLink extends Link {
  icon?: ComponentElement;
  allowedRoles: Role[];
}

export interface Link {
  url: string | ((url: string) => string);
  partialPath: string;
  label: string;
  key: string;
}
