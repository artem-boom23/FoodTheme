import {styled} from '@mui/material/styles'
import {Box, List, ListItem, Typography} from "@mui/material";
import * as React from "react";
import {memo} from "react";

export const ContentItemFooterWrapper = styled(Box)(() => ({
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	listStyle: "none",
	justifyContent: "flex-start",
}))

export const FooterList = memo(() => {
  return (
    <ContentItemFooterWrapper>
      <Typography variant={"h1"} sx={{ml: 3}}>Menu</Typography>
      <List>
        <ListItem>Main</ListItem>
        <ListItem>About the company</ListItem>
        <ListItem>Vacancies</ListItem>
        <ListItem>Contacts</ListItem>
      </List>
    </ContentItemFooterWrapper>
  )
})

FooterList.displayName = "FooterList"