import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0", // Mengizinkan akses dari semua alamat IP
    port: 5173, // Port yang digunakan oleh Vite
    strictPort: true, // Menghindari konflik port
  },
});
