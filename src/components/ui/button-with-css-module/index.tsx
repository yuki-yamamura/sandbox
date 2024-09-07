"use client";

import { cva, type VariantProps } from "class-variance-authority";
import styles from "./index.module.scss";
import { StopCircle } from "lucide-react";

const variant = cva(styles.module, {
  variants: {
    intent: {
      primary: styles.primary,
      secondary: styles.secondary,
    },
    status: {
      disabled: styles.disabled,
      waiting: styles.waiting,
    },
    maxWidth: {
      default: true,
      full: styles.maxWidthFull,
      half: styles.maxWidthHalf,
    },
  },
  defaultVariants: {
    intent: "primary",
    maxWidth: "default",
  },
});

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof variant> & {
    children?: React.ReactNode;
  };

export function Button({
  intent,
  status,
  maxWidth,
  children = "click me",
  ...props
}: Props) {
  return (
    <div>
      <button className={variant({ intent, status, maxWidth })} {...props}>
        {children}
        {status === "waiting" && <StopCircle />}
      </button>
      {status === "waiting" && <div>here it is</div>}
    </div>
  );
}
