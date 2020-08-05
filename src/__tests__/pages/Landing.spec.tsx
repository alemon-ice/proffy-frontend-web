import React from "react";
import Landing from "pages/Landing";

import { render } from "@testing-library/react";

describe("Landing Page", () => {
  it("Load the page correctly", () => {
    const { debug } = render(<Landing />);

    debug();
  });
});
