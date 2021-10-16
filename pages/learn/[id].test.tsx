import React from "react";
import { render } from "@testing-library/react";
import { ThemePicker, StyleProvider } from "vcc-ui";

import Page from "./[id]";

test("test learn page component", () => {
    const sampleCar = {
        "id": "xc90-recharge",
        "modelName": "XC90 Recharge",
        "bodyType": "suv",
        "modelType": "plug-in hybrid",
        "imageUrl": "/images/xc90_recharge.jpg"
    };

    const LearnPageComponent = render(
        <StyleProvider>
            <ThemePicker variant="light">
                <Page {...sampleCar} />
            </ThemePicker>
        </StyleProvider>
    );

    const carModel = LearnPageComponent.getByTestId("car model");
    const carChargeType = LearnPageComponent.getByTestId("car charge type");
    const carImage = LearnPageComponent.getByTestId("car image");

    expect(carModel.innerHTML).toEqual(sampleCar.modelName);
    expect(carChargeType.innerHTML).toEqual(sampleCar.modelType);
    expect(carImage).toBeTruthy()
});
