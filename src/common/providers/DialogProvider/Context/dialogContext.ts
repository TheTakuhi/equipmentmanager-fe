import React, { ReactNode } from "react";

export interface DialogInterface {
  show: (component: ReactNode) => void;
  close: () => void;
}

export const DialogContext = React.createContext<DialogInterface | null>(null);
