"use client";

import Image from "next/image";
import { useRef } from "react";

const logos = [
  { src: "/images/12mate.png", alt: "12Mate", width: 200, height: 86, className: "h-16" },
  { src: "/images/101kruiden.svg", alt: "101kruiden", width: 232, height: 50, className: "h-11" },
  { src: "/images/monkeyparts.png", alt: "Monkey Parts", width: 226, height: 57, className: "h-12" },
  { src: "/images/thetester.svg", alt: "The Tester", width: 225, height: 75, className: "h-14" },
  { src: "/images/trentdierenvoer.png", alt: "Trentdierenvoer", width: 175, height: 54, className: "h-12" },
];

// Two identical halves; the track slides by exactly one half so the loop is seamless.
const track = [...logos, ...logos, ...logos, ...logos];

const NORMAL_RATE = 1;
const HOVER_RATE = 0.25;

export function TrustedBy() {
  const trackRef = useRef<HTMLDivElement>(null);

  // Changing playbackRate (instead of animation-duration) slows down without jumping position.
  const setRate = (rate: number) => {
    trackRef.current?.getAnimations().forEach((animation) => animation.updatePlaybackRate(rate));
  };

  return (
    <section className="mx-auto mt-24 w-full max-w-[1600px] px-4 md:px-10 lg:px-20">
      <h2 className="text-center text-3xl font-medium text-ink">Trusted by</h2>

      <div
        className="marquee-mask mt-10 overflow-hidden"
        onMouseEnter={() => setRate(HOVER_RATE)}
        onMouseLeave={() => setRate(NORMAL_RATE)}
      >
        <div ref={trackRef} className="animate-marquee flex w-max items-center">
          {track.map((logo, i) => (
            <div
              key={i}
              className="flex shrink-0 items-center px-10 md:px-14"
              aria-hidden={i >= logos.length}
            >
              <Image
                src={logo.src}
                alt={i < logos.length ? logo.alt : ""}
                width={logo.width}
                height={logo.height}
                className={`w-auto ${logo.className}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
