import { cva } from "class-variance-authority";

// Base definition
const base = "rounded w-fit";

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
      small: ["text-sm", "py-1", "px-2"],
      medium: ["text-base", "py-3", "px-4"],
      bigNoBack: ["text-lg", "font-semibold"],
    },
  },
  compoundVariants: [{ intent: "primary", size: "medium", class: "uppercase" }],
  defaultVariants: {
    intent: "primary",
    size: "medium",
  },
});

export default function Button({ intent, size, className, ...rest }) {
  return <button {...rest} className={button({ intent, size, className })} />;
}
