import { expect, within } from "@storybook/test";
import Counter from ".";
import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof Counter>;

const meta: Meta = {
  component: Counter,
};

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    canvas.getByText(0);
  },
};

export const IncrementCount: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const incrementButton = canvas.getByRole("button", { name: "+" });

    // click the increment button twice.
    await incrementButton.click();
    await incrementButton.click();

    expect(canvas.getByText(2)).toBeInTheDocument();
  },
};

export const DecrementCount: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const decrementButton = canvas.getByRole("button", { name: "-" });

    // click the decrement button twice.
    await decrementButton.click();
    await decrementButton.click();

    expect(canvas.getByText(-2)).toBeInTheDocument();
  },
};

export default meta;
