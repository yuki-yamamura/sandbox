import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";

const headingVariants = cva("font-bold", {
  variants: {
    variant: {
      default: "text-green-300",
      secondary: "text-green-600",
    },
    size: {
      default: "text-3xl",
      lg: "text-5xl",
    },
    interactive: {
      true: "hover:underline",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

type Props = Omit<React.ComponentPropsWithoutRef<"h1">, "className"> &
  VariantProps<typeof headingVariants>;

export default function Heading({
  variant,
  size,
  interactive,
  ...props
}: Props) {
  return (
    <h1
      className={headingVariants({ variant, size, interactive })}
      {...props}
    />
  );
}
