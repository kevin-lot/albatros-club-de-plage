import path, { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
    ...(process.env.BASE_PATH_IMG && {
        basePath: process.env.BASE_PATH_IMG,
    }),
    images: {
        unoptimized: true,
    },
    output: "export",
    reactStrictMode: true,
    sassOptions: {
        includePaths: [path.join(__dirname, "src", "styles")],
    },
};

export default nextConfig;
