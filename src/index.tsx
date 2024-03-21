import { ChakraProvider } from "@chakra-ui/react";
import ReactDOM from "react-dom/client";

import Contexts from "./common/contexts/Contexts";
import { theme } from "./common/theme";
import { inMockedDevEnv } from "./common/utils/environment";
import { worker as workerMocks } from "./mock";
import "./style.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

if (inMockedDevEnv()) {
  workerMocks.start();
}

root.render(
  <ChakraProvider theme={theme}>
    <Contexts />
  </ChakraProvider>,
);
