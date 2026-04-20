import type { NextConfig } from "next";
import { rmSync } from "fs";

try { rmSync("./out", { recursive: true, force: true }); } catch {}

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;