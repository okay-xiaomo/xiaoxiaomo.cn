import { defineConfig } from "vite";
import path from "path";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";
import tailwindcss from "@tailwindcss/vite";
import { webUpdateNotice } from "@plugin-web-update-notification/vite";

// https://vite.dev/config/
export default defineConfig({
  base: "/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] }),
    tailwindcss(),
     webUpdateNotice({
      logVersion: true,
      hiddenDefaultNotification: true,
      notificationProps: {
        title: "更新提示",
        description: "应用已升级，建议刷新页面查看最新内容",
        buttonText: "刷新",
      },
    }),
  ],
});
