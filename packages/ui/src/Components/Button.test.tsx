import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import Button from "./Button";

describe("button", () => {
    it("renders with the right props", () => {
        render(<Button>button text</Button>);

        expect(screen.getByText(/button text/)).toBeInTheDocument();
    });
});
