import type { NextConfig } from "next";
import { rmSync } from "fs";

try { rmSync("./out", { recursive: true, force: true }); } catch {}

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Если используешь базовый путь (например, репозиторий называется site9), 
  // иногда может понадобиться basePath, но пока попробуй без него.
};

export default nextConfig;