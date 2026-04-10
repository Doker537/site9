export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-white/[0.02] backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-10 sm:flex-row sm:justify-between">
        <p className="text-sm text-zinc-500">
          &copy; {new Date().getFullYear()}{" "}
          <span className="text-yellow-400">Chare</span>X. Все права защищены.
        </p>
        <div className="flex gap-6">
          <a
            href="https://t.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-zinc-500 transition-colors hover:text-yellow-400"
          >
            Telegram
          </a>
          <a
            href="https://vk.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-zinc-500 transition-colors hover:text-yellow-400"
          >
            VK
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-zinc-500 transition-colors hover:text-yellow-400"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
