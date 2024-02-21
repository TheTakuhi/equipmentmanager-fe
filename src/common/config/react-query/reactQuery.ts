import { QueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: (failureCount, error) => {
        const isUnauthorized = (error as AxiosError)?.response?.status === 401;
        return isUnauthorized && failureCount < 2;
      },
      staleTime: 5 * 60 * 1000, // 5 minutes,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    },
  },
});
