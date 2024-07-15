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

export default meta;
