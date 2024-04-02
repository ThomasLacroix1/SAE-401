import { cva } from "class-variance-authority";

// Base definition
const base = "w-fit";

const button = cva(base, {
  variants: {
    intent: {
      primary: [
        "bg-boutonBackground",
        "text-bontonFont",
        "border-transparent",
        "hover:opacity-75",
      ],
      navigation: [
        "hover:text-font",
      ],
      underline: [
        "text-navigation",
        "hover:underline",
      ],
    },
    size: {
      small: ["text-xs", "py-2", "px-2", "rounded"],
      medium: ["text-base", "py-3", "px-4", "rounded", "font-semibold"],
      navigation: ["text-lg", "font-semibold"],
      catNavigation: ["text-lg", "py-3", "px-4", "font-semibold"],
      footer: ["text-xl", "font-semibold"],
      big: ["text-lg", "py-3", "px-4", "rounded", "font-semibold", "w-96", "flex", "justify-center", "items-center", "gap-3"],
    },
  },
  compoundVariants: [{ intent: "primary", size: "medium", class: "uppercase" }],
  defaultVariants: {
    intent: "primary",
    size: "medium",
  },
});

export default function Bouton({ intent, size, className, ...rest }) {
  return <button {...rest} className={button({ intent, size, className })} />;
}
