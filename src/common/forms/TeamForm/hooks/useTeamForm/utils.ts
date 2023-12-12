import { TeamFormValues } from "../../../../models/team/TeamFormValues";

export const createDefaultValues = (
  defs?: Partial<TeamFormValues>,
): TeamFormValues => ({
  name: "",
  owner: "",
  members: [""],
  ...defs,
});