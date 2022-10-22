import React, {memo} from 'react'
import {Box, Typography} from '@mui/material'
import {Card} from "../atoms/Card";

export const MenuItems = memo(() => {
  return (
    <Box sx={{
      display: "grid",
      gridTemplateColumns: "minmax(min-content, 1fr) minmax(min-content, 1fr) minmax(min-content, 1fr)",
      gridTemplateRows: "minmax(min-content, 1fr) minmax(min-content, 1fr)",
      gap: "10px",
      gridAutoFlow: "row",
      height: "100%"
    }}>
      <Card>
        <Typography variant={"h1"}>
          Карточка
        </Typography>
      </Card>
      <Card>
        <Typography variant={"h1"}>
          Карточка
        </Typography>
      </Card>
      <Card>
        <Typography variant={"h1"}>
          Карточка
        </Typography>
      </Card>
      <Card>
        <Typography variant={"h1"}>
          Карточка
        </Typography>
      </Card>
      <Card>
        <Typography variant={"h1"}>
          Карточка
        </Typography>
      </Card>
      <Card>
        <Typography variant={"h1"}>
          Карточка
        </Typography>
      </Card>
    </Box>
  )
})

MenuItems.displayName = 'MenuItems'