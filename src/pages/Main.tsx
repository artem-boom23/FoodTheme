import {Box, Container} from '@mui/material'
import * as React from 'react'
import {memo} from 'react'
import {styled} from "@mui/material/styles";
import {Header} from "../molecules/Header";
import {Footer} from "../molecules/Footer";
import {BestMarketingOffers} from "../templates/BestMarketOffers";
import {MenuItems} from "../templates/MenuItems";

const MainPageWrapper = styled(Box)(() => ({
	display: "grid",
	gridTemplateColumns: "1fr",
	gridTemplateRows: "minmax(min-content, 5vh) auto minmax(min-content, 5vh)",
	gap: "10px",
	gridAutoFlow: "row",
	height: "100vh",
}))

const ContentWrapper = styled(Container)(() => ({
	display: "grid",
	gridTemplateColumns: "1fr",
	gridTemplateRows: "minmax(min-content, 30%) minmax(min-content, 70%)",
	gap: "10px",
	gridAutoFlow: "row",
	height: "100%",
}))

export const Main = memo(() => {
	return (
		<MainPageWrapper>
			<Header/>
			<ContentWrapper maxWidth="lg">
				<BestMarketingOffers/>
				<MenuItems/>
			</ContentWrapper>
			<Footer/>
		</MainPageWrapper>
	)
})

Main.displayName = 'Main'
