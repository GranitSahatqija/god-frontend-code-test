import React from "react";
import { StyleProvider, ThemePicker } from 'vcc-ui';
import Home from "../src/components/Home";

const Index: React.FC = () => {
    return (
        <React.StrictMode>
            <StyleProvider>
                <ThemePicker variant="light">
                    <Home />
                </ThemePicker>
            </StyleProvider>
        </React.StrictMode>
    );
}

export default Index;
