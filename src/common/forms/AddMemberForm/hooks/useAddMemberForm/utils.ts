export const createDefaultValues = (defs?: { id: string }): { id: string } => ({
  id: "",
  ...defs,
});
