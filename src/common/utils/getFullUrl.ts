export const getFullUrl = (url: string): string => {
  return `${import.meta.env.VITE_APP_PUBLIC_URL}${url}`;
};
