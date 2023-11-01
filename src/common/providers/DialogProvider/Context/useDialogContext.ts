import { useContext } from "react";

import { DialogContext } from "./dialogContext";

const useDialogContext = () => {
  const context = useContext(DialogContext);

  if (!context) {
    throw new Error(
      "useDialogContext needs to be called inside DialogProvider!",
    );
  }

  return context;
};

export default useDialogContext;
