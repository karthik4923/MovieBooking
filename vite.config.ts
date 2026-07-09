import { defineConfig } from 'vite';
import plugin from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [plugin()],
    base: '/MovieBooking/'
    server: {
        port: 54343,
    }
})
