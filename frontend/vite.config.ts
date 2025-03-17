import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js"], // ✅ Ensure .tsx is resolved
  },
});
