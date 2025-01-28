import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "/test-app-2",
  css: {
    preprocessorOptions: {
      less: {
// Дополнительные настройки для less, если необходимо
      },
    },
  },
});
