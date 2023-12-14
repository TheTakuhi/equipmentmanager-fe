import { setupWorker } from "msw";

import { postCreateItem } from "./common/hooks/mutations/items/useItemCreateMutation.msw";
import { getDeleteItem } from "./common/hooks/mutations/items/useItemDeleteMutation.msw";
import { putEditItem } from "./common/hooks/mutations/items/useItemEditMutation.msw";
import { postCreateLoan } from "./common/hooks/mutations/loans/useLoanCreateMutation.msw";
import { putEditLoan } from "./common/hooks/mutations/loans/useLoanEditMutation.msw";
import { putAddMemberToTeam } from "./common/hooks/mutations/teams/useTeamAddMemberMutation.msw";
import { postCreateTeam } from "./common/hooks/mutations/teams/useTeamCreateMutation.msw";
import { getDeleteTeam } from "./common/hooks/mutations/teams/useTeamDeleteMutation.msw";
import { putEditTeam } from "./common/hooks/mutations/teams/useTeamEditMutation.msw";
import { putRemoveMemberToTeam } from "./common/hooks/mutations/teams/useTeamRemoveMemberMutation.msw";
import { getDeleteUser } from "./common/hooks/mutations/users/useUserDeleteMutatuon.msw";
import { putEditUser } from "./common/hooks/mutations/users/useUserEditMutation.msw";
import { syncUserMSW } from "./common/hooks/mutations/users/useUsersSyncMutation.msw";
import { getItemById } from "./common/hooks/queries/items/useGetItemById.msw";
import { getItemsMSW } from "./common/hooks/queries/items/useGetItems.msw";
import { getLoanByItemId } from "./common/hooks/queries/loans/useGetLoanByItemId.msw";
import { getLoansMSW } from "./common/hooks/queries/loans/useGetLoans.msw";
import { getTeamById } from "./common/hooks/queries/teams/useGetTeamById.msw";
import { getTeamsMSW } from "./common/hooks/queries/teams/useGetTeams.msw";
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
  ...getLoansMSW(),
  ...getItemsMSW(),
  ...getTeamsMSW(),
  ...getBeVersionMSW(),
  ...getCurrentUserMSW(),
  ...syncUserMSW(),
  ...postCreateItem(),
  ...postCreateLoan(),
  ...postCreateTeam(),
  ...putEditUser(),
  ...putEditLoan(),
  ...putEditItem(),
  ...putEditTeam(),
  ...putAddMemberToTeam(),
  ...putRemoveMemberToTeam(),
  ...getDeleteItem(),
  ...getDeleteUser(),
  ...getDeleteTeam(),
  ...getMockedAllUserRolesMSW(),
  ...getMockedItemTypesMSW(),
  ...getMockedItemStatesMSW(),
  ...getMockedItemQualityStatesMSW(),
  ...getUserById(),
  ...getItemById(),
  ...getLoanByItemId(),
  ...getTeamById(),
);
