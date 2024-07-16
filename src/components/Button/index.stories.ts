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
};

export const Danger: Story = {
  args: {
    type: "button",
    label: "Delete Account",
    variant: "danger",
    onClick: () => console.log("your account has been deleted"),
  },
};

export default meta;
