import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve("src", "src/components/index.jsx"),
      name: "100096-dowell-customer-support-chat-npm-package",
      fileName: (format) =>
        `100096-dowell-customer-support-chat-npm-package.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
        },
      },
    },
  },
  plugins: [react()],
});
