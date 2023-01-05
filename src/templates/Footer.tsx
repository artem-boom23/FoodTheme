import * as React from 'react';
import {memo} from 'react';
import Card from '@mui/material/Card';
import {Box, CardHeader, Typography} from '@mui/material'

export const Footer = memo(() => {
  return (
    <Card sx={{width: '100%', height: "100%"}}>
      <CardHeader
        action={
          <Box sx={{display: 'flex', flexDirection: 'row', height: "100%"}}>
            <Typography>Контакты</Typography>
            <Typography>Адреса</Typography>
            <Typography>Сотрудничество</Typography>
          </Box>
        }
        title={<Typography variant={"h1"}>Футер</Typography>}
      />
    </Card>
  );
})

Footer.displayName = "Footer"