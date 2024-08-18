import { FirstForm } from "@/components/ui/first-form";
import Heading from "@/components/ui/heading";
import { TextareaWithCheckbox } from "@/components/ui/textarea-with-checkbox";
import { TextareaWithLabel } from "@/components/ui/textarea-with-label";
import { User } from "@/features/users";

export default function Home() {
  return (
    <div>
      <div className="grid"></div>
      <Heading>heading</Heading>
      <Heading variant="secondary">heading</Heading>
      <Heading variant="secondary" size="lg">
        heading
      </Heading>
      <Heading interactive>interactive heading</Heading>
      <TextareaWithLabel id="foo" label="Foo" size="lg" />
      <TextareaWithLabel id="bar" label="Boo" size="sm" align="right" />
      <TextareaWithCheckbox />

      {/* Zod */}
      <User />

      {/* React Hook Form */}
      <FirstForm />
    </div>
  );
}
