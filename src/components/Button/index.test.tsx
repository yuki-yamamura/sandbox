import { composeStories } from "@storybook/react";
import { describe, test } from "vitest";
import { render, screen } from "@testing-library/react";

import * as stories from "./index.stories";

const { Primary: PrimaryButton } = composeStories(stories);

describe("Button", () => {
  test("should be rendered with the correct label", async () => {
    render(<PrimaryButton />);

    screen.getByRole("button", { name: /submit/i });
  });
});
