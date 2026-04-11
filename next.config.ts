import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Если используешь базовый путь (например, репозиторий называется site9), 
  // иногда может понадобиться basePath, но пока попробуй без него.
};

export default nextConfig;