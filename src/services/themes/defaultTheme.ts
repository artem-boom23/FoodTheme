import { PaletteMode, Theme, ThemeOptions } from '@mui/material'
import { CSSProperties } from 'react'
import { Variant } from '@mui/material/styles/createTypography'

declare module '@mui/material/styles/createPalette' {
  interface Palette {
    modal: {
      backgroundLight: string,
      backgroundDark: string,
    },
    generateButton: {
      backgroundLight: string,
      backgroundDark: string
    },
    listItem: {
      borderColor: string,
    }
  }
}

declare module '@mui/material/styles/createTypography' {
  interface Typography {
    regularGrey: CSSProperties,
    regularBlack: CSSProperties
  }
}

interface ThemeCustom extends ThemeOptions {
  palette: ThemeOptions['palette'] & {
    modal: {
      backgroundLight: string,
      backgroundDark: string,
    },
    generateButton: {
      backgroundLight: string,
      backgroundDark: string
    },
    listItem: {
      borderColor: string,
    }
  },
  typography: ThemeOptions['typography'] & {
    regularGrey: CSSProperties,
    regularBlack: CSSProperties
  }
}

export const isDarkTheme = (theme: Theme) => theme.palette.mode === 'dark'
export const isDarkMode = (mode: PaletteMode, darkColor: string, lightColor: string) => mode === 'dark' ? darkColor : lightColor
export type TypographyVariant = Variant | 'regularGrey' | 'regularBlack'

export const defaultTheme = (mode: PaletteMode) => {
  const theme: ThemeCustom = {
    palette: {
      mode: mode,
      primary: {
        // light: will be calculated from palette.primary.main,
        main: '#4568E4',
        // dark: will be calculated from palette.primary.main,
        // contrastText: will be calculated to contrast with palette.primary.main
      },
      secondary: {
        light: '#0066ff',
        main: '#0044ff',
        // dark: will be calculated from palette.secondary.main,
        contrastText: '#ffcc00',
      },
      background: {
        default: isDarkMode(mode, "#121212", "#F7F7F7")
      },
      modal: {
        backgroundLight: '#F5F5F5',
        backgroundDark: '#4568E4',
      },
      generateButton: {
        backgroundLight: 'rgba(206,206,206,0.8)', // #CECECE
        backgroundDark: 'rgba(30,30,30,0.8)', // #383B40,
      },
      listItem: {
        borderColor: '#C5C0C0',
      },
    },
    typography: {
      allVariants: {
        fontFamily: 'Microsoft Sans Serif',
        fontWeight: 400,
        color: isDarkMode(mode, '#F5F5F5', '#000000'),
      },
      h1: {
        fontSize: "28px",
      },
      h2: {
        fontSize: "1.2rem",
        fontWeight: "400",
      },
      regularGrey: {
        color: isDarkMode(mode, '#F5F5F5', '#000000'),
        fontSize: "0.8rem",
      },
      regularBlack: {
        color: isDarkMode(mode, '#F5F5F5', '#000000'),
      },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: `
			*::-webkit-scrollbar {
				width: 0px;
			};
			*::-webkit-scrollbar-thumb {
				border-radius: 15px;
				background-color: '';
			};
			*::-webkit-scrollbar-thumb:hover {
				background-color: '';
			};
			`,
      },
      MuiTextField: {
        defaultProps: {
          variant: 'standard',
        },
      },
    },
    spacing: 4,
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920,
      },
    },
    shape: {
      borderRadius: 20
    },
  }
  return theme
}