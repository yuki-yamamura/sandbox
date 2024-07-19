import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Home from "./page";

describe("Home page", () => {
  test("shows 'Hello, World!' on the display", () => {
    render(<Home />);

    expect(screen.getByText("Hello, World!")).toBeDefined();
  });
});
