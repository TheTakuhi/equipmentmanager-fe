export const getQueryKeys = (params: any, rootKey: string) => {
  const key = [];
  const values = Object.values(params);
  if (values.some((value) => value !== undefined))
    values.forEach((value) => key.push(value));

  key.push(rootKey);

  return key;
};
