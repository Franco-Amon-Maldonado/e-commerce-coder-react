import { Button, CardActionArea, CardActions, Card, CardContent, CardMedia, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

function DetalleProducto({producto}) {
    const {id, title, image, price, description } = producto || {}
	if (!title || !image || !price || !description || !id === undefined) {
		return null
	}
	return (
		<Card sx={{ maxWidth: 345, borderRadius: 10 }} className="flex flex-col justify-between text-center p-5">
			<CardActionArea id="informacion">
				<CardMedia
					component="img"
					image={image}
					style={{ width: '50%', height: 'auto' }}
					className="m-auto"
					alt={`Producto de la imagen ${title}`}
				/>
				<CardContent className="mt-5">
					<Typography gutterBottom component="div" className="titulo">
						{title}
					</Typography>
					<Typography variant="body2" color="text.secondary">
						{description}
					</Typography>
					<Typography style={{ fontWeight: 'bold' }} className="p-5">
						Precio: ${price}
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions className="flex justify-center">
				
				<Button
					variant="contained"
					size="small"
					color="primary"
					sx={{ paddingX: '15px', paddingY: '8px', fontSize: '0.7rem' }}
				>
					<Link> Agregar Al carrito </Link>
				</Button>
			</CardActions>
		</Card>
	)
}

export default DetalleProducto;