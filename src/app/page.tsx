import Image from "next/image";
import Link from "next/link";
import { AppWindow, Bot, CalendarDays, Workflow } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 backdrop-blur-sm z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-10">
            {/* Linke Seite - Logo und Text */}
            <div className="flex items-center space-x-4">
              <Link
                href="/"
                className="flex items-center space-x-2"
                tabIndex={0}
                aria-label="Zur Startseite"
              >
                <Image
                  src="michael_stachorski_logo.svg"
                  alt="Logo"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
                <span className="text-lg font-bold text-white">
                  michael stachorski
                </span>
              </Link>
            </div>
            <div className="flex items-center space-x-8">
              <button
                className={cn(
                  "relative inline-flex items-center justify-center gap-2 px-3 py-2 bg-gradient-to-br from-[#1C9AA6] to-[#F9B233] overflow-hidden group",
                  "before:absolute before:bottom-0 before:right-0 before:translate-x-1/2 before:translate-y-1/2 before:blur-lg before:rounded-[50%] before:transition-all before:duration-700 before:size-0 hover:before:size-[200%] before:bg-[#1C9AA6]",
                  "after:absolute after:top-0 after:left-0 after:-translate-x-1/2 after:-translate-y-1/2 after:blur-xl after:transition-all after:duration-700 after:size-0 hover:after:size-[150%] after:bg-[#F9B233]",
                  "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                )}
                aria-label="Terrmin buchen"
              >
                <div className="flex gap-2 z-10 text-slate-900">
                  <CalendarDays strokeWidth={1.5} size={20} />
                  Termin buchen
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight bg-clip-text bg-gradient-to-br from-[#1C9AA6] to-[#F9B233] text-transparent dark:text-white">
              Transformieren Sie Ihre digitale Präsenz
            </h1>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Badges */}
            <div className="flex flex-col gap-3 items-end">
              <span className="inline-flex gap-2 w-fit items-center px-3 py-1 rounded-full text-sm font-medium bg-slate-600 text-white">
                <Workflow strokeWidth={1} />
                Automatisierung
              </span>
              <span className="inline-flex gap-2 w-fit items-center px-3 py-1 rounded-full text-sm font-medium bg-slate-600 text-white">
                <Bot strokeWidth={1} />
                KI-Anwendungen
              </span>
              <span className="inline-flex gap-2 w-fit items-center px-3 py-1 rounded-full text-sm font-medium bg-slate-600 text-white">
                <AppWindow strokeWidth={1} />
                Webentwicklung
              </span>
            </div>

            {/* Description Text */}
            <p className="text-base text-white">
              Entdecken Sie modernste Technologielösungen, die Ihr Unternehmen
              auf das nächste Level heben. Unsere maßgeschneiderten Dienste
              bieten Ihnen die perfekte Kombination aus Innovation und
              Zuverlässigkeit.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-lg bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                aria-label="Jetzt starten"
              >
                Jetzt starten
              </button>
              <button
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-blue-600 rounded-lg text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                aria-label="Mehr erfahren"
              >
                Mehr erfahren
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
          <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
            <li className="mb-2">
              Get started by editing{" "}
              <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
                src/app/page.tsx
              </code>
              .
            </li>
            <li>Save and see your changes instantly.</li>
          </ol>

          <div className="flex gap-4 items-center flex-col sm:flex-row">
            <a
              className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="dark:invert"
                src="/vercel.svg"
                alt="Vercel logomark"
                width={20}
                height={20}
              />
              Deploy now
            </a>
            <a
              className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
              href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read our docs
            </a>
          </div>
        </main>
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/file.svg"
              alt="File icon"
              width={16}
              height={16}
            />
            Learn
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/window.svg"
              alt="Window icon"
              width={16}
              height={16}
            />
            Examples
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/globe.svg"
              alt="Globe icon"
              width={16}
              height={16}
            />
            Go to nextjs.org →
          </a>
        </footer>
      </div>
    </>
  );
}
