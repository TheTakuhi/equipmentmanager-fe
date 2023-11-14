import { setupWorker } from "msw";

import { postCreateItem } from "./common/hooks/mutations/items/useItemCreateMutation.msw";
import { getDeleteItem } from "./common/hooks/mutations/items/useItemDeleteMutation.msw";
import { postCreateLoan } from "./common/hooks/mutations/loans/useLoanCreateMutation.msw";
import { getEditLoan } from "./common/hooks/mutations/loans/useLoanEditMutation.msw";
import { getDeleteUser } from "./common/hooks/mutations/users/useUserDeleteMutatuon.msw";
import { getEditUser } from "./common/hooks/mutations/users/useUserEditMutation.msw";
import { getMockedAllUserRolesMSW } from "./common/hooks/queries/users/useGetAllUserRoles.msw";
import { getCurrentUserMSW } from "./common/hooks/queries/users/useGetCurrentUser.msw";
import { getUsersMSW } from "./common/hooks/queries/users/useGetUsers.msw";
import { getBeVersionMSW } from "./common/hooks/queries/utility/useGetBackendVersion.msw";
import { getMockedItemQualityStatesMSW } from "./common/hooks/queries/utility/useGetItemQualityStates.msw";
import { getMockedItemStatesMSW } from "./common/hooks/queries/utility/useGetItemStates.msw";
import { getMockedItemTypesMSW } from "./common/hooks/queries/utility/useGetItemTypes.msw";
import { postUser } from "./common/hooks/mutations/user/usePostUser.msw";
import { putUser } from "./common/hooks/mutations/user/usePutUser.msw";
import { getUserById } from "./common/hooks/queries/users/useGetUserById.msw";

export const worker = setupWorker(
  ...getUsersMSW(),
  ...getBeVersionMSW(),
  ...getCurrentUserMSW(),
  ...postCreateItem(),
  ...postCreateLoan(),
  ...getEditUser(),
  ...getEditLoan(),
  ...getDeleteItem(),
  ...getDeleteUser(),
  ...getMockedAllUserRolesMSW(),
  ...getMockedItemTypesMSW(),
  ...getMockedItemStatesMSW(),
  ...getMockedItemQualityStatesMSW(),
);
export const worker = setupWorker(
  ...getUserById(),
  ...postUser(),
  ...putUser(),
);
