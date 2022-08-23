import 'styled-components'

declare module 'styled-components'{
export interface DefaultTheme {
    colors: {
        primary: string,
        title: string,
        secondary: string,
        body: string,
        container: string
    },
    fontFamilies: {
        regular: string // might need single quotes around rubik
    },
    fontSizes: {
        h1: string,
        h2: string,
        h3: string,
        md: string,
        sm: string,
        xsm: string
    },
    fontWeights: {
        regular: string,
        semiBold: string,
        bold: string
    },
    boxShadow: {
    shadow: string
    },
    borderRadius: string,
    transitions: {
        color: string
    }
    }
}