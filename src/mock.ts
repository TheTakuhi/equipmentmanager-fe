import { setupWorker } from "msw";

import { postCreateItem } from "./common/hooks/mutations/items/useItemCreateMutation.msw";
import { getDeleteItem } from "./common/hooks/mutations/items/useItemDeleteMutation.msw";
import { getUsersMSW } from "./common/hooks/queries/users/useGetAllUsers.msw";
import { getCurrentUserMSW } from "./common/hooks/queries/users/useGetCurrentUser.msw";
import { getBeVersionMSW } from "./common/hooks/queries/utility/useGetBackendVersion.msw";
import { getMockedItemQualityStatesMSW } from "./common/hooks/queries/utility/useGetItemQualityStates.msw";
import { getMockedItemStatesMSW } from "./common/hooks/queries/utility/useGetItemStates.msw";
import { getMockedItemTypesMSW } from "./common/hooks/queries/utility/useGetItemTypes.msw";

export const worker = setupWorker(
  ...getUsersMSW(),
  ...getBeVersionMSW(),
  ...getCurrentUserMSW(),
  ...getDeleteItem(),
  ...postCreateItem(),
  ...getMockedItemTypesMSW(),
  ...getMockedItemStatesMSW(),
  ...getMockedItemQualityStatesMSW(),
);
