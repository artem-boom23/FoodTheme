import React, {memo} from 'react'
import {Card, CardContent, Typography} from '@mui/material'

export const BestMarketingOffers = memo(() => {
  return (
    <Card>
      <CardContent>
        <Typography variant={"h1"}>Лучшие маркетинговые предложения</Typography>
      </CardContent>
    </Card>
  )
})

BestMarketingOffers.displayName = 'BestMarketingOffers'