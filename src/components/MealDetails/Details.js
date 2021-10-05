import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';





const Details = () => {
    
    // const [expanded, setExpanded] = React.useState(false);

    // const handleExpandClick = () => {
    //   setExpanded(!expanded);
    // };

    const params = useParams();
    const [ details, setDetails] = useState([]);
    const {strMeal,strInstructions,strMealThumb} = details;

    useEffect(()=>{
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.idMeal}`)
        .then(res => res.json())
        .then(data => setDetails(data.meals[0]))
    }, [params])

    return (
    
        <Card sx={{ maxWidth: 345,mx:"auto",mt:8 }} >
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
         { strInstructions?.slice(0,300)}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>


       
    );
};

export default Details;