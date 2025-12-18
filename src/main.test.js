import { describe, it, expect } from "vitest";

describe("Simple Test", () => {
  it("should pass basic math", () => {
    expect(1 + 1).toBe(3);
  });

  it("should check if app title exists", () => {
    const title = "CI/CD Workshop";
    expect(title).toBeTruthy();
  });
});
