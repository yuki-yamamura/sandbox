import { expect, within } from "@storybook/test";
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
    onClick: () => console.log("this is dummy function"),
  },
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button", { name: "Submit" });
    expect(button).toBeVisible();
    expect(button).toHaveStyle({
      color: "rgb(255, 255, 255)",
    });
  },
};

export const Danger: Story = {
  args: {
    type: "button",
    label: "Delete Account",
    variant: "danger",
    onClick: () => console.log("your account has been deleted"),
  },
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button", { name: "Delete Account" });
    expect(button).toBeVisible();
  },
};

export default meta;
