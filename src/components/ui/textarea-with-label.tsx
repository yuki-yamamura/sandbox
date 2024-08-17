import { Label } from "@radix-ui/react-label";
import { Textarea } from "./textarea";
import { cva, type VariantProps } from "class-variance-authority";

const variants = cva("grid w-full gap-1.5", {
  variants: {
    size: {
      sm: "text-sm",
      base: "text-base",
      lg: "text-lg",
    },
    align: {
      left: "text-left",
      right: "text-right",
    },
  },
  defaultVariants: {
    size: "base",
    align: "left",
  },
});

type Props = React.ComponentPropsWithoutRef<typeof Textarea> &
  VariantProps<typeof variants> & {
    label: string;
    id: string;
  };

export const TextareaWithLabel = ({ id, label, size, align }: Props) => {
  return (
    <div className={variants()}>
      <Label htmlFor={id} className={variants({ size, align })}>
        {label}
      </Label>
      <Textarea id={id} />
    </div>
  );
};
