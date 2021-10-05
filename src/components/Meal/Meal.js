import { Button, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';
import { useHistory } from 'react-router';

const Meal = (props) => {

    const {idMeal,strMeal,strInstructions,strMealThumb } = props.meal;

    const history = useHistory();
    
const seeDeatails = () => {
    history.push(`/mealDetails/${idMeal}`)
   
}

    return (

        <Card sx={{ maxWidth: 305 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="240"
            image={strMealThumb}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {strMeal}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {strInstructions.slice(0,200)}
            </Typography>
            <Button  sx={{ mt: 2 }} onClick={seeDeatails}  variant="contained">SEE DETAILS</Button>
          </CardContent>
        </CardActionArea>
      </Card>  
    )
       
};

export default Meal;