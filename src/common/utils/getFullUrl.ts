export const getFullUrl = (url: string): string => {
  return `${import.meta.env.PUBLIC_URL}${url}`;
};
