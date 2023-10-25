import { setupWorker } from "msw";

import { getUsersMSW } from "./common/hooks/queries/users/useGetAllUsers.msw";
import { getCurrentUserMSW } from "./common/hooks/queries/users/useGetCurrentUser.msw";
import { getBeVersionMSW } from "./common/hooks/queries/utility/useGetBackendVersion.msw";

export const worker = setupWorker(
  ...getUsersMSW(),
  ...getBeVersionMSW(),
  ...getCurrentUserMSW(),
);
