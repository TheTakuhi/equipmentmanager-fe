import React, { FC, ReactNode, useContext, useState } from "react";

import { useDisclosure } from "@chakra-ui/react";
import { createPortal } from "react-dom";

interface ActionDialogProviderProps {
  children?: ReactNode;
}

interface ActionDialogContextValue {
  isOpen: boolean;
  show: (component: ReactNode) => void;
  close: () => void;
}

const ActionDialogStateContext = React.createContext<
  ActionDialogContextValue | undefined
>(undefined);

const ActionDialogProvider: FC<ActionDialogProviderProps> = ({ children }) => {
  const [dialogs, setDialogs] = useState<ReactNode[]>([]);
  const { isOpen, onOpen } = useDisclosure();

  let dialogPortalNode = document.getElementById("action");

  if (!dialogPortalNode) {
    dialogPortalNode = document.createElement("div");
    dialogPortalNode.setAttribute("id", "action");
  }

  const show = (dialog: ReactNode) => {
    onOpen();
    setDialogs((prevDialogs) => [...prevDialogs, dialog]);
  };

  const close = () => {
    setDialogs((arr) => arr.slice(0, -1));
  };

  return (
    <ActionDialogStateContext.Provider
      value={{
        isOpen,
        show,
        close,
      }}
    >
      {dialogs.length > 0 &&
        dialogs.map((dialog) =>
          createPortal(dialog, dialogPortalNode as HTMLElement),
        )}
      {children}
    </ActionDialogStateContext.Provider>
  );
};

export function useActionDialog() {
  const context = useContext(ActionDialogStateContext);
  if (!context) {
    throw new Error(
      "useActionDialog must be used within a ActionDialogProvider",
    );
  }
  return context;
}

export default ActionDialogProvider;
