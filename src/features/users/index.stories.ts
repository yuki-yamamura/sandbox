import type { Meta, StoryObj } from "@storybook/react";

import { User } from "./";

const meta = {
  component: User,
} satisfies Meta<typeof User>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
