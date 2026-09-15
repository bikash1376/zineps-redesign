import Image from "next/image";
import { TranslateIcon } from "@phosphor-icons/react/ssr";
import { Button } from "./Button";

const links = ["Products", "Integrations", "Pricing", "Blogs", "Knowledge base"];

export function Navbar() {
  return (
    <header className="mx-auto flex w-full max-w-[1440px] items-center justify-between gap-4 px-4 pt-5 md:px-[100px]">
      {/* Spacer keeps the pill centered on wide screens */}
      <div className="hidden w-[208px] xl:block" />

      <nav className="flex h-[54px] shrink-0 items-center gap-8 rounded-2xl border-[0.7px] border-black/8 bg-white px-5 shadow-nav">
        <a href="#" aria-label="Zineps home" className="shrink-0">
          <Image src="/images/zineps-logo.svg" alt="Zineps" width={100} height={22} priority />
        </a>
        <ul className="hidden items-center gap-6 text-base font-medium whitespace-nowrap text-ink lg:flex">
          {links.map((link) => (
            <li key={link}>
              <a href="#" className="transition-colors hover:text-green">
                {link}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex items-center gap-5">
        <button
          type="button"
          aria-label="Change language"
          className="hidden h-[42px] items-center gap-1 rounded-xl border-[0.7px] border-line bg-linear-to-b from-white to-line-soft px-3 text-subtle transition-colors hover:text-ink sm:flex"
        >
          <TranslateIcon size={26} className="size-[26px] shrink-0" />
          <Image src="/icons/chevron-down.svg" alt="" width={20} height={20} />
        </button>
        <Button href="#" className="px-7 shadow-none">
          Sign up
        </Button>
      </div>
    </header>
  );
}
