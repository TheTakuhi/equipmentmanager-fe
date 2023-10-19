import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      staleTime: 5 * 60 * 1000, // 5 minutes,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    },
  },
});
