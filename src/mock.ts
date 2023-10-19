import { setupWorker } from "msw";

import { getUsersMSW } from "./common/hooks/queries/users/useGetAllUsers.msw";

export const worker = setupWorker(...getUsersMSW());
