"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";

import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";

const checkboxVariants = cva("", {
  variants: {
    variant: {
      default:
        "border-slate-200 border-slate-900 ring-offset-white focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-slate-900 data-[state=checked]:text-slate-50 dark:border-slate-800 dark:border-slate-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300 dark:data-[state=checked]:bg-slate-50 dark:data-[state=checked]:text-slate-900",
      primary:
        "border-green-200 border-green-900 ring-offset-white focus-visible:ring-green-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-green-900 data-[state=checked]:text-slate-50 dark:border-slate-800 dark:border-slate-50 dark:ring-offset-slate-950 dark:focus-visible:ring-green-300 dark:data-[state=checked]:bg-green-50 dark:data-[state=checked]:text-green-900",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

type Props = Omit<
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>,
  "className"
> &
  VariantProps<typeof checkboxVariants>;

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  Props
>(({ ...props }, ref) => {
  return (
    <CheckboxPrimitive.Root
      ref={ref}
      className={cn(
        checkboxVariants({ variant: "default" }),
        "peer h-4 w-4 shrink-0 rounded-sm border focus-visible:outline-none focus-visible:ring-2",
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        className={cn("flex items-center justify-center text-current")}
      >
        <Check className="h-4 w-4" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
});
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
