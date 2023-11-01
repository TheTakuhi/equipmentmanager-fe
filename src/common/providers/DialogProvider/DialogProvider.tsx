import { FC, ReactNode, useState } from "react";

import { createPortal } from "react-dom";

import { DialogContext } from "./Context/dialogContext";

interface DialogProviderProps {
  portalNodeName: string;
  children?: ReactNode;
}

const DialogProvider: FC<DialogProviderProps> = ({
  portalNodeName,
  children,
}) => {
  const [dialogs, setDialogs] = useState<ReactNode[]>([]);

  let dialogPortalNode = document.getElementById(portalNodeName);

  if (!dialogPortalNode) {
    dialogPortalNode = document.createElement("div");
    dialogPortalNode.setAttribute("id", portalNodeName);
  }

  const show = (dialog: ReactNode) => {
    setDialogs((prevDialogs) => [...prevDialogs, dialog]);
  };

  const close = () => {
    setDialogs((arr) => arr.slice(0, -1));
  };

  return (
    <DialogContext.Provider
      value={{
        show,
        close,
      }}
    >
      {dialogs.length > 0 &&
        dialogs.map((dialog) =>
          createPortal(dialog, dialogPortalNode as HTMLElement),
        )}
      {children}
    </DialogContext.Provider>
  );
};

export default DialogProvider;
