"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowRightIcon, CaretLeftIcon, CaretRightIcon } from "@phosphor-icons/react";

// Newsroom items from zineps.com (Prismic "newsroom_item", en-us)
const news = [
  {
    title: "Zineps closes late-seed investment to accelerate its next phase of growth",
    excerpt: "Amsterdam, The Netherlands, Zineps has successfully closed its late-seed investment round.",
    category: "News",
    date: "23 Jul 2026",
    image: "/images/news/late-seed.jpg",
    href: "https://www.zineps.com/newsroom/late-seed",
  },
  {
    title: "Late July 2026 platform update: bulk customs automation, smarter address books, and more reliable carriers",
    excerpt: "Full customs-data support for bulk shipment imports, EORI and VAT autofill in the address book.",
    category: "Updates",
    date: "20 Jul 2026",
    image: "/images/news/late-july-update.jpg",
    href: "https://www.zineps.com/newsroom/late-july-2026-platform-update",
  },
  {
    title: "Zineps now integrates with Nova Post",
    excerpt: "Native shipping, tracking, and delivery automation for Ukrainian e-commerce.",
    category: "News",
    date: "15 May 2026",
    image: "/images/news/nova-post.jpg",
    href: "https://www.zineps.com/newsroom/zineps-customers-can-now-connect-nova-post-directl",
  },
  {
    title: "Global shipping at scale: Zineps enables delivery to over 200 countries",
    excerpt: "Zineps now supports shipping to over 200 countries worldwide for both e-commerce and B2B shipments.",
    category: "News",
    date: "21 Dec 2025",
    image: "/images/news/global-shipping.jpg",
    href: "https://www.zineps.com/newsroom/global-shipping",
  },
  {
    title: "Zineps and Brain E-Log partner to scale fulfilment through logistics automation",
    excerpt: "Automating carrier onboarding, logistics support and invoice processing.",
    category: "News",
    date: "28 Nov 2025",
    image: "/images/news/brain-e-log.jpg",
    href: "https://www.zineps.com/newsroom/zineps-brain-e-log-partnership-fulfilment-automation",
  },
];

function ArrowButton({
  direction,
  disabled,
  onClick,
}: {
  direction: "prev" | "next";
  disabled: boolean;
  onClick: () => void;
}) {
  const Icon = direction === "prev" ? CaretLeftIcon : CaretRightIcon;
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={direction === "prev" ? "Previous news" : "Next news"}
      className="flex size-10 items-center justify-center rounded-full bg-white text-ink shadow-border transition-[box-shadow,opacity,scale] duration-150 ease-out hover:shadow-border-hover active:scale-[0.96] disabled:cursor-default disabled:opacity-40 disabled:active:scale-100"
    >
      <Icon size={18} weight="bold" aria-hidden />
    </button>
  );
}

/**
 * Newsroom carousel, same UI as zineps.com: horizontally scrolling cards with prev/next
 * controls. Portrait cards with 20px corners and white text over a bottom fade.
 * The native scrollbar is hidden; arrows and swipe drive the scroll.
 */
export function RecentNews() {
  const trackRef = useRef<HTMLUListElement>(null);
  const [edges, setEdges] = useState({ start: true, end: false });

  const updateEdges = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setEdges({
      start: el.scrollLeft <= 4,
      end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 4,
    });
  }, []);

  useEffect(() => {
    updateEdges();
    window.addEventListener("resize", updateEdges);
    return () => window.removeEventListener("resize", updateEdges);
  }, [updateEdges]);

  const scrollByCard = (dir: 1 | -1) => {
    const el = trackRef.current;
    const card = el?.querySelector("li");
    if (!el || !card) return;
    el.scrollBy({ left: dir * (card.clientWidth + 24), behavior: "smooth" });
  };

  return (
    <section className="mx-auto mt-section w-full max-w-[1600px] px-4 md:px-10 lg:px-20">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div className="max-w-[560px]">
          <h2 className="text-3xl font-medium text-balance text-ink">Recent news</h2>
          <p className="mt-4 text-base text-pretty text-muted">
            Stay updated with the latest news, updates, and insights from Zineps.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="https://www.zineps.com/newsroom"
            className="group inline-flex items-center gap-1.5 text-base font-medium text-forest"
          >
            View all
            <ArrowRightIcon
              size={16}
              weight="bold"
              aria-hidden
              className="transition-transform duration-150 ease-out group-hover:translate-x-0.5"
            />
          </a>
          <div className="flex gap-2">
            <ArrowButton direction="prev" disabled={edges.start} onClick={() => scrollByCard(-1)} />
            <ArrowButton direction="next" disabled={edges.end} onClick={() => scrollByCard(1)} />
          </div>
        </div>
      </div>

      <ul
        ref={trackRef}
        onScroll={updateEdges}
        // Scroll containers clip on both axes: pad the track so card shadows aren't cut off
        className="-mx-2 mt-[calc(var(--spacing-heading)-0.5rem)] -mb-2 flex scroll-px-2 snap-x snap-mandatory gap-6 overflow-x-auto px-2 py-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {news.map((item) => (
          <li key={item.href} className="w-[66%] shrink-0 snap-start sm:w-[280px] lg:w-[310px]">
            {/* Portrait card (4:5): thin white frame + soft frame shadow like the globe stats, dark fade at the bottom */}
            <a
              href={item.href}
              className="group relative block aspect-[4/5] overflow-hidden rounded-[20px] border-[5px] border-white bg-mint-mist shadow-frame"
            >
              <Image
                src={item.image}
                alt=""
                fill
                sizes="(min-width: 1024px) 310px, (min-width: 640px) 280px, 66vw"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
              />
              <div
                aria-hidden
                className="absolute inset-x-0 bottom-0 h-3/4 bg-linear-to-b from-black/0 via-black/45 to-black/85"
              />

              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                <h3 className="line-clamp-3 text-lg font-medium text-balance text-white sm:text-xl">{item.title}</h3>
                <p className="mt-2 hidden text-sm text-pretty text-white/80 sm:line-clamp-2">{item.excerpt}</p>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
