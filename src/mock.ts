import { setupWorker } from "msw";

import { postCreateItem } from "./common/hooks/mutations/items/mocks/useItemCreateMutation.msw";
import { getDeleteItem } from "./common/hooks/mutations/items/mocks/useItemDeleteMutation.msw";
import { putEditItem } from "./common/hooks/mutations/items/mocks/useItemEditMutation.msw";
import { postCreateLoan } from "./common/hooks/mutations/loans/mocks/useLoanCreateMutation.msw";
import { patchLoan } from "./common/hooks/mutations/loans/mocks/useLoanPatchMutation.msw";
import { patchAddMemberToTeam } from "./common/hooks/mutations/teams/mocks/useTeamAddMemberMutation.msw";
import { postCreateTeam } from "./common/hooks/mutations/teams/mocks/useTeamCreateMutation.msw";
import { getDeleteTeam } from "./common/hooks/mutations/teams/mocks/useTeamDeleteMutation.msw";
import { putEditTeam } from "./common/hooks/mutations/teams/mocks/useTeamEditMutation.msw";
import { patchRemoveMemberToTeam } from "./common/hooks/mutations/teams/mocks/useTeamRemoveMemberMutation.msw";
import { getDeleteUser } from "./common/hooks/mutations/users/mocks/useUserDeleteMutatuon.msw";
import { putEditUser } from "./common/hooks/mutations/users/mocks/useUserEditMutation.msw";
import { syncUserMSW } from "./common/hooks/queries/users/mocks/useUsersSync.msw";
import { getItemById } from "./common/hooks/queries/items/mocks/useGetItemById.msw";
import { getItemsMSW } from "./common/hooks/queries/items/mocks/useGetItems.msw";
import { getItemsByOwnerId } from "./common/hooks/queries/items/mocks/useGetItemsByOwnerId.msw";
import { getLoansMSW } from "./common/hooks/queries/loans/mocks/useGetLoans.msw";
import { getTeamById } from "./common/hooks/queries/teams/mocks/useGetTeamById.msw";
import { getTeamsMSW } from "./common/hooks/queries/teams/mocks/useGetTeams.msw";
import { getMockedAllUserRolesMSW } from "./common/hooks/queries/users/mocks/useGetAllUserRoles.msw";
import { getCurrentUserMSW } from "./common/hooks/queries/users/mocks/useGetCurrentUser.msw";
import { getUserById } from "./common/hooks/queries/users/mocks/useGetUserById.msw";
import { getUsersMSW } from "./common/hooks/queries/users/mocks/useGetUsers.msw";
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
  ...patchLoan(),
  ...putEditItem(),
  ...putEditTeam(),
  ...patchAddMemberToTeam(),
  ...patchRemoveMemberToTeam(),
  ...getDeleteItem(),
  ...getDeleteUser(),
  ...getDeleteTeam(),
  ...getMockedAllUserRolesMSW(),
  ...getMockedItemTypesMSW(),
  ...getMockedItemStatesMSW(),
  ...getMockedItemQualityStatesMSW(),
  ...getUserById(),
  ...getItemById(),
  ...getTeamById(),
  ...getItemsByOwnerId(),
);
