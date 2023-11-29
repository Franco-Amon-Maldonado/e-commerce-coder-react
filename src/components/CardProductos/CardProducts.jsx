import { Button, CardActionArea, CardActions, Card, CardContent, CardMedia, Typography } from '@mui/material'
import './CardProducts.css'
import { Link } from 'react-router-dom'

function CardProducts({ producto }) {
	const { id, title, image, price, description } = producto || {}
	if (!title || !image || !price || !description || !id === undefined) {
		return null
	}
	return (
		<Card sx={{ maxWidth: 345, borderRadius: 10 }} className="flex flex-col justify-between text-center px-3 py-2">
			<Link className="h-full" to={`/detalle/${id}`}>
				<CardActionArea id="informacion">
					<CardMedia
						component="img"
						image={image}
						style={{ width: '40%', height: 'auto' }}
						alt={`Producto de la imagen ${title}`}
					/>
					<CardContent className="space-y-4">
						<Typography className="titulo">
							{title}
						</Typography>
						<Typography variant="body2" color="text.secondary" className="parrafo">
							{description}
						</Typography>
						<Typography style={{ fontWeight: 'bold' }}>
							Precio: ${price}
						</Typography>
					</CardContent>
				</CardActionArea>
			</Link>
			<CardActions className="flex justify-center">
				<Button
					variant="contained"
					size="small"
					color="primary"
					sx={{ paddingX: '15px', paddingY: '8px', fontSize: '0.6rem', borderRadius: '999px' }}
				>
					<Link to={`/detalle/${id}`}> Ver producto </Link>
				</Button>
			</CardActions>
		</Card>
	)
}

export default CardProducts
