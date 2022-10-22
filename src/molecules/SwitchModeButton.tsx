import {IconButton} from '@mui/material'
import WbSunnyIcon from '@mui/icons-material/WbSunny'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import {useAppDispatch, useAppSelector} from '../services/store/store'
import {themeSliceActions} from '../services/store/theme/themeSlice'
import React, {memo, useCallback} from 'react'

export const SwitchModeButton = memo(() => {
  const colorScheme = useAppSelector((state) => state.theme.mode)
  const appDispatch = useAppDispatch()

  const handleChange = useCallback(() => {
    appDispatch(
      themeSliceActions.changeColorScheme(
        colorScheme === 'light' ? 'dark' : 'light',
      ),
    )
  }, [colorScheme])

  const isChecked = (color: string) => {
    return color === 'light'
  }

  return (
    <IconButton
      sx={{ml: 1}}
      onClick={() => handleChange()}
      color="inherit"
    >
      {isChecked(colorScheme) ? <DarkModeIcon/> : <WbSunnyIcon/>}
    </IconButton>
  )
})

SwitchModeButton.displayName = 'SwitchModeButton'
