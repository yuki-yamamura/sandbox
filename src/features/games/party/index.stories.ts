import type { Meta, StoryObj } from "@storybook/react";

import { PartyMembers } from "./";

const meta = {
  component: PartyMembers,
} satisfies Meta<typeof PartyMembers>;
export default meta;

type Story = StoryObj<typeof PartyMembers>;

export const Default: Story = {};
