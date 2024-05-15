import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";


const exercisePath = "C:\\Users\\user3\\OneDrive\\Pulpit\\Projekt-zaliczeniowy\\Projekt-zaliczeniowy";


export default defineConfig({
    root: exercisePath,
    server: {
        port: 3000,
    },
    plugins: [react()],
});
