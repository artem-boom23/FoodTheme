import * as React from 'react';
import {memo} from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {Box, Typography} from '@mui/material'
import {SwitchModeButton} from './SwitchModeButton';

export const Header = memo(() => {
  return (
    <Card sx={{width: '100%'}}>
      <CardHeader
        action={
          <Box sx={{display: 'flex', flexDirection: 'row', height: "100%"}}>
            <SwitchModeButton/>
            <IconButton aria-label="settings">
              <MoreVertIcon/>
            </IconButton>
          </Box>
        }
        title={<Typography variant={"h1"}>Заголовок</Typography>}
      />
    </Card>
  );
})

Header.displayName = "Header"
