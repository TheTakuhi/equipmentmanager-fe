import { TeamMemberRequestType } from "../../AddMemberForm";

export const createDefaultValues = (
  defs?: TeamMemberRequestType,
): TeamMemberRequestType => ({
  member: {
    value: "",
    label: "",
  },
  ...defs,
});
