import Heading from "@/components/ui/heading";

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
    </div>
  );
}
