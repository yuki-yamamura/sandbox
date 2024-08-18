import type { Meta, StoryObj } from "@storybook/react";

import { FirstForm } from "./";

const meta = {
  component: FirstForm,
} satisfies Meta<typeof FirstForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
