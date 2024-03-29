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
        "text-navigation",
        "hover:text-font",
      ],
      underline: [
        "text-font",
        "hover:underline",
      ],
    },
    size: {
      small: ["text-sm", "py-1", "px-2", "rounded"],
      medium: ["text-base", "py-3", "px-4", "rounded"],
      bigNoBack: ["text-lg", "py-3", "px-4", "font-semibold"],
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
