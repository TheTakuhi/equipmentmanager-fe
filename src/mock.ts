import { setupWorker } from "msw";

import { postCreateItem } from "./common/hooks/mutations/items/useItemCreateMutation.msw";
import { getDeleteItem } from "./common/hooks/mutations/items/useItemDeleteMutation.msw";
import { putEditItem } from "./common/hooks/mutations/items/useItemEditMutation.msw";
import { postCreateLoan } from "./common/hooks/mutations/loans/useLoanCreateMutation.msw";
import { putEditLoan } from "./common/hooks/mutations/loans/useLoanEditMutation.msw";
import { postUser } from "./common/hooks/mutations/users/usePostUser.msw";
import { getDeleteUser } from "./common/hooks/mutations/users/useUserDeleteMutatuon.msw";
import { putEditUser } from "./common/hooks/mutations/users/useUserEditMutation.msw";
import { getItemById } from "./common/hooks/queries/items/useGetItemById.msw";
import { getLoanByItemId } from "./common/hooks/queries/loans/useGetLoanByItemId.msw";
import { getMockedAllUserRolesMSW } from "./common/hooks/queries/users/useGetAllUserRoles.msw";
import { getCurrentUserMSW } from "./common/hooks/queries/users/useGetCurrentUser.msw";
import { getUserById } from "./common/hooks/queries/users/useGetUserById.msw";
import { getUsersMSW } from "./common/hooks/queries/users/useGetUsers.msw";
import { getBeVersionMSW } from "./common/hooks/queries/utility/useGetBackendVersion.msw";
import { getMockedItemQualityStatesMSW } from "./common/hooks/queries/utility/useGetItemQualityStates.msw";
import { getMockedItemStatesMSW } from "./common/hooks/queries/utility/useGetItemStates.msw";
import { getMockedItemTypesMSW } from "./common/hooks/queries/utility/useGetItemTypes.msw";

export const worker = setupWorker(
  ...getUsersMSW(),
  ...getBeVersionMSW(),
  ...getCurrentUserMSW(),
  ...postUser(),
  ...postCreateItem(),
  ...postCreateLoan(),
  ...putEditUser(),
  ...putEditLoan(),
  ...putEditItem(),
  ...getDeleteItem(),
  ...getDeleteUser(),
  ...getMockedAllUserRolesMSW(),
  ...getMockedItemTypesMSW(),
  ...getMockedItemStatesMSW(),
  ...getMockedItemQualityStatesMSW(),
  ...getUserById(),
  ...getItemById(),
  ...getLoanByItemId(),
);
