import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/chat": {
        target: "https://api.replicate.com/v1/predictions",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/chat/, ""),
      },
    },
  },
});
