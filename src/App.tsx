import * as React from 'react'
import {createTheme, ThemeProvider} from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import {useAppSelector} from './services/store/store'
import {Main} from './pages/Main'
import {defaultTheme} from './services/themes/defaultTheme'

export const App = () => {
  const colorScheme = useAppSelector(state => state.theme)
  const theme = React.useMemo(
    () => createTheme(defaultTheme(colorScheme.mode)),
    [colorScheme],
  )

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Main/>
    </ThemeProvider>
  )
}

