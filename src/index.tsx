import { ChakraProvider } from "@chakra-ui/react";
import ReactDOM from "react-dom/client";

import Contexts from "./common/contexts/Contexts";
import { customTheme } from "./common/providers/ThemeProvider/customTheme";
import { inMockedDevEnv } from "./common/utils/environment";
import { worker as workerMocks } from "./mock";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

if (inMockedDevEnv()) {
  workerMocks.start();
}

root.render(
  <ChakraProvider theme={customTheme}>
    <Contexts />
  </ChakraProvider>,
);
