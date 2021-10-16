import React from "react";
import { render } from "@testing-library/react";
import { ThemePicker, StyleProvider } from "vcc-ui";

import Home from "./Home";

test("test home component", () => {
    const HomeComponent = render(
        <StyleProvider>
            <ThemePicker variant="light">
                <Home />
            </ThemePicker>
        </StyleProvider>
    );

    const searchBar = HomeComponent.getByTestId("filter");
    const carousel = HomeComponent.getByTestId("carousel");

    expect(searchBar).toBeTruthy();
    expect(carousel).toBeTruthy();
});
