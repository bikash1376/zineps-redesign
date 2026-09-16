"use client";

import { useId, useState } from "react";
import { CheckCircleIcon } from "@phosphor-icons/react";
import { ShootingArrow } from "./motion/ShootingArrow";

/** Email field with an inset square submit button (Figma contact-us inspo). */
export function SubscribeForm() {
  const inputId = useId();
  const [status, setStatus] = useState<"idle" | "invalid" | "done">("idle");

  return (
    <form
      noValidate
      className="mx-auto mt-8 w-full max-w-[380px]"
      onSubmit={(e) => {
        e.preventDefault();
        const email = new FormData(e.currentTarget).get("email")?.toString() ?? "";
        setStatus(/^\S+@\S+\.\S+$/.test(email) ? "done" : "invalid");
      }}
    >
      <label htmlFor={inputId} className="sr-only">
        Email address
      </label>
      {/* 12px outer radius with 6px inset → 6px button radius */}
      <div className="flex h-12 items-center rounded-xl bg-white p-1.5 pl-4 shadow-border transition-[box-shadow] duration-150 ease-out focus-within:shadow-border-hover">
        <input
          id={inputId}
          name="email"
          type="email"
          autoComplete="email"
          placeholder="Email address"
          aria-invalid={status === "invalid"}
          className="min-w-0 flex-1 bg-transparent text-base text-ink outline-none placeholder:text-muted"
        />
        <button
          type="submit"
          aria-label="Sign up for updates"
          className="relative flex size-9 shrink-0 items-center justify-center overflow-hidden rounded-md bg-linear-to-b from-teal to-green text-white inset-shadow-glow transition-[scale,filter] duration-150 ease-out hover:brightness-110 active:scale-[0.96] after:absolute after:-inset-1"
        >
          <ShootingArrow size={16} />
        </button>
      </div>
      <p aria-live="polite" className="mt-3 min-h-5 text-sm">
        {status === "done" && (
          <span className="inline-flex items-center gap-1.5 text-forest">
            <CheckCircleIcon size={16} weight="bold" aria-hidden />
            Thanks, you&apos;re on the list.
          </span>
        )}
        {status === "invalid" && <span className="text-[#b4432b]">Please enter a valid email address.</span>}
      </p>
    </form>
  );
}
