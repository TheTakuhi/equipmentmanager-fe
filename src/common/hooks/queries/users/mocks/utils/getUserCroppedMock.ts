import { getUserBasicInfoMock } from "./getUserBasicInfoMock";
import { UserCropped } from "../../../../../models/user/UserCropped";

export const getUserCroppedMock = (): UserCropped => ({
  ...getUserBasicInfoMock(),
  teamsIds: [],
  loansIds: [],
  borrowingsIds: [],
  ownedItemsIds: [],
  ownedTeamsIds: [],
});

export const getUsersCroppedMock = (numUsers: number): UserCropped[] =>
  Array.from({ length: numUsers }, getUserCroppedMock);
