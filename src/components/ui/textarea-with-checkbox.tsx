"use client";

import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "./textarea";

export const TextareaWithCheckbox = async () => {
  return (
    <div>
      <div className="mb-5 flex gap-2">
        <Checkbox id="agreement" />
        <Label htmlFor="agreement">I agree the terms and conditions</Label>
        <Textarea className="invisible peer-aria-checked:visible" />
      </div>
    </div>
  );
};
