import React from "react";
import { render } from "@testing-library/react";
import { ThemePicker, StyleProvider } from "vcc-ui";

import Car from "./Car";

test("test car component", () => {
    const sampleCar = {
        "id": "xc90-recharge",
        "modelName": "XC90 Recharge",
        "bodyType": "suv",
        "modelType": "plug-in hybrid",
        "imageUrl": "/images/xc90_recharge.jpg"
    };

    const CarComponent = render(
        <StyleProvider>
            <ThemePicker variant="light">
                <Car {...sampleCar} />
            </ThemePicker>
        </StyleProvider>
    );

    const carBodyType = CarComponent.getByTestId("car body");
    const carModel = CarComponent.getByTestId("car model");
    const carChargeType = CarComponent.getByTestId("car charge type");
    const carImage = CarComponent.getByTestId("car image");
    const learnCarLink = CarComponent.getByTestId("learn link");
    const shopCarLink = CarComponent.getByTestId("shop link");

    expect(carBodyType.innerHTML).toEqual(sampleCar.bodyType);
    expect(carModel.innerHTML).toEqual(sampleCar.modelName);
    expect(carChargeType.innerHTML).toEqual(sampleCar.modelType);
    expect(carImage).toBeTruthy()
    expect(learnCarLink).toHaveProperty('href', `http://localhost/learn/${sampleCar.id}`)
    expect(shopCarLink).toHaveProperty('href', `http://localhost/shop/${sampleCar.id}`)
});
