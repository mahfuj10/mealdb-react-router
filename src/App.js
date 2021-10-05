
import { BrowserRouter,Switch ,Route} from 'react-router-dom';
import './App.css';
import SwipeableEdgeDrawer from './components/Header/Header';
import Details from './components/MealDetails/Details';
import Meals from './components/Meals/Meals';
import Error from './components/NoFound/error';
import Resturants from './components/ResturantsImg/Resturants';


function App() {

  return (


    <BrowserRouter>

      <SwipeableEdgeDrawer></SwipeableEdgeDrawer>
    
    <Switch>
    
      <Route exact path="/">
        <Meals></Meals>
      </Route>

      <Route  path="/resturants">
        <Resturants></Resturants>
      </Route>
    
      <Route path="/mealDetails/:idMeal">
        <Details></Details>
      </Route>
      
      <Route path="*">
          <Error></Error>
      </Route>
    
    </Switch>

    </BrowserRouter>
      // <SwipeableEdgeDrawer></SwipeableEdgeDrawer>

  );
}

export default App;
