import type { Meta, StoryObj } from "@storybook/react";
import Todo from "./Todos";
import { handlers } from "@/mocks/handlers";
import { QueryClientProvider } from "@/lib/tanstack-query";

const meta = {
  component: Todo,
  parameters: {
    msw: {
      handlers,
    },
  },
  decorators: [
    (Story) => (
      <QueryClientProvider>
        <Story />
      </QueryClientProvider>
    ),
  ],
} satisfies Meta;

type Story = StoryObj<typeof Todo>;

export const Default: Story = {};

export default meta;
