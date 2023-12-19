import { TeamFormValues } from "../../../../models/team/TeamFormValues";

export const createDefaultValues = (
  defs?: Partial<TeamFormValues>,
): TeamFormValues => ({
  teamName: "",
  owner: "",
  members: [],
  ...defs,
});
