import React, { useState } from 'react'
import { StyleProvider, ThemePicker, View, useTheme, Flex, Toggle } from 'vcc-ui';
import "../public/css/styles.css";
import type { AppProps } from 'next/app'

enum ThemeVariants {
    Light = 'light',
    Dark = 'dark'
}

function MyApp({ Component, pageProps }: AppProps) {
    const [variant, setVariant] = useState<ThemeVariants>(ThemeVariants.Light)

    const updateVariant = (type: ThemeVariants) => {
        if (type === ThemeVariants.Light) {
            setVariant(ThemeVariants.Dark)
        } else {
            setVariant(ThemeVariants.Light)
        }
    }

    return (
        <React.StrictMode>
            <StyleProvider>
                <ThemePicker variant={variant}>
                    <PageContainer>
                        <Flex extend={{alignItems: 'flex-end'}}>
                            <Toggle
                                checked={variant === ThemeVariants.Light}
                                onChange={(e) => {
                                    updateVariant(variant);
                                }}
                            />
                        </Flex>
                        <Component {...pageProps} />
                    </PageContainer>
                </ThemePicker>
            </StyleProvider>
        </React.StrictMode>
    )
}

const PageContainer: React.FC = ({ children }) => {
    const theme = useTheme();
    return (
        <View extend={{ backgroundColor: theme.color.background.primary, padding: 15 }}>
            {children}
        </View>
    );
}

export default MyApp;
