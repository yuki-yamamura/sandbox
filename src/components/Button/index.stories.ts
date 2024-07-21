import { expect, fn, within } from "@storybook/test";
import Button from ".";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof Button>;

const meta: Meta = {
  component: Button,
};

export const Primary: Story = {
  args: {
    type: "button",
    label: "Submit",
    variant: "primary",
    onClick: fn(),
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button", { name: "Submit" });
    expect(button).toBeVisible();

    await button.click();
    expect(args.onClick).toHaveBeenCalledOnce();
  },
};

export const Danger: Story = {
  args: {
    type: "button",
    label: "Delete Account",
    variant: "danger",
    onClick: fn(),
  },
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button", { name: "Delete Account" });
    expect(button).toBeVisible();
    expect(button).toHaveStyle({
      "background-color": "rgb(255, 0, 0)",
    });
  },
};

export default meta;
