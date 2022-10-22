import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper'

// высота независимая от соседнего элемента
interface Props {
	heightIndependent?: boolean
}

export const Card = styled(Paper, {
	shouldForwardProp: (prop) => prop !== 'heightIndependent',
})<Props>(({ theme, sx, heightIndependent = false }) => ({
	padding: theme.spacing(4),
	textAlign: 'left',
	color: theme.palette.text.secondary,
	...(!heightIndependent && { height: '100%' }),
	sx,
}))