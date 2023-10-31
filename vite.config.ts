import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    plugins: [react()],
    define: {
      PUBLIC_URL: JSON.stringify(env.VITE_APP_PUBLIC_URL),
    },
  };
});
