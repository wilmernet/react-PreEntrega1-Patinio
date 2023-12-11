import "./Categories.css"
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

const Categories= (props)=> {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          //height="140"
          image={props.img}
          alt="Gato"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Ver opciones
        </Button>
      </CardActions>
    </Card>
  );
}


// const Categories = () => {
//   return (

//     <div id="Categories">
//         <div id="CategoriesTitle">CATEGORÍA DE PRODUCTOS XXXXX</div>
//         <div id="CategoriesDescription"><b>Descripción: </b>Esta es la descripción de la Categoría</div>
//         <div id="seccion">
//             <button>Ver Categoría</button>
//         </div>
//     </div>
    
//   )
// }

export default Categories;