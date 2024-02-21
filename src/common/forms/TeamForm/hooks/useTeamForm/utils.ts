import { TeamFormValues } from "../../../../models/team/TeamFormRequestValues";

export const createDefaultValues = (
  defs?: Partial<TeamFormValues>,
): TeamFormValues => ({
  teamName: "",
  owner: { value: "", label: "" },
  members: [],
  ...defs,
});
