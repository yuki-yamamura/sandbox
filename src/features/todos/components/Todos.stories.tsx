import type { Meta, StoryObj } from "@storybook/react";
import Todo from "./Todos";
import { handlers } from "@/mocks/handlers";
import { QueryClientProvider } from "@/lib/tanstack-query";
import { http, HttpResponse } from "msw";
import { fakeTodos } from "@/mocks/todos/fakeData";

const meta = {
  component: Todo,
  parameters: {
    msw: {
      handlers,
    },
  },
} satisfies Meta;

type Story = StoryObj<typeof Todo>;

export const Default: Story = {
  decorators: [
    (Story) => (
      <QueryClientProvider>
        <Story />
      </QueryClientProvider>
    ),
  ],
};

export const UncompletedTodos: Story = {
  parameters: {
    msw: {
      handlers: [
        http.get("https://jsonplaceholder.typicode.com/todos", () => {
          return HttpResponse.json(fakeTodos.filter((todo) => !todo.completed));
        }),
      ],
    },
  },
  decorators: [
    (Story) => (
      <QueryClientProvider>
        <Story />
      </QueryClientProvider>
    ),
  ],
};

export default meta;
