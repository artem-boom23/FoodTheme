import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper'

interface Props {
	flag?: boolean
}

// CardTemplate - название компонент
// Paper - базовый компонент
// heightIndependent - новый пропс
export const CardTemplate = styled(Paper, {
	shouldForwardProp: (prop) => prop !== 'heightIndependent',
})<Props>(({ theme, sx, flag = false }) => ({
	// Стили
	padding: theme.spacing(4),
	textAlign: 'left',
	color: theme.palette.text.secondary,
	...(!flag && { height: '100%' }),
	sx,
}))