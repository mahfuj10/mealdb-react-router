import { Grid, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';

const Meals = () => {


    const [searchText,setSearchText] = useState('');
    const [meals,setMeals] = useState([]);

 

    useEffect(()=>{
        
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
        fetch(url)
        .then(res=>res.json())
        .then(data => setMeals(data.meals))
    },[searchText])
    
    const  searchMeals = (e) => {
        const search = e.target.value;
        setSearchText(search);
    }

 

    return (
        
       <div>
           <aside style={{marginLeft:"50%",marginBottom:"4%"}}>
           <TextField onChange={searchMeals} id="standard-basic" label="Standard" variant="standard" />
           </aside>
      
<Box sx={{ flexGrow: 1 }} style={{marginLeft:"5%",marginBottom:"10%"}}>

      <Grid container spacing={4}>
       
      {
            meals?.map(meal => <Grid item    spacing={1}>
                 <Meal meal={meal}></Meal> 
        </Grid>
                 )
        }
      </Grid>
    </Box>
      

       </div>
    );
};

export default Meals;