export const getFullUrl = (url: string): string => {
  return `${process.env.PUBLIC_URL}${url}`;
};
