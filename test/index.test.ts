import { describe, expect, it } from "vitest";
import { YourAction } from "../src/index";

describe("YourAction", () => {
  it("should be instantiated", () => {
    const action = new YourAction({});
    expect(action).toBeInstanceOf(YourAction);
  });

  it("should have doSomething method", () => {
    const action = new YourAction({});
    expect(action.doSomething).toBeDefined();
  });
});
