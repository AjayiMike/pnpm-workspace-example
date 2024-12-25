import { it, expect, describe } from "vitest";
import { add } from ".";

describe("add function", () => {
    it("should add 2 numbers correctly", () => {
        expect(add(2, 1)).toBe(3);
    });
});
