import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr'; // Plugin SVGR pour gérer les SVG en tant que composants React
import react from '@vitejs/plugin-react-swc'; // Plugin React SWC

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),  // Intégration du plugin React pour gérer le JSX et autres fonctionnalités React
        svgr({
            svgrOptions: {
                exportType: 'named',
                ref: true,
                svgo: false,
                titleProp: true,
            },
            include: '**/*.svg',
        }),
    ],
});

