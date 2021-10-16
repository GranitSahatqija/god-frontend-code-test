import React, { useState } from 'react'
import { StyleProvider, ThemePicker, useTheme, Flex, Toggle, Block } from 'vcc-ui';
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
                                aria-label="theme toggler"
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
        <Block extend={{ backgroundColor: theme.color.background.primary, padding: 15 }}>
            {children}
        </Block>
    );
}

export default MyApp;
