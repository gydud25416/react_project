import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    // 서버가 server 폴더에 있는 데이터가 바뀌어도 감지하지 않는다.
    watch: {
      ignored: ["**/server/**"],
    },
  },
});
