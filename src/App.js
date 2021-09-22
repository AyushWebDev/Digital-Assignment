import React from 'react';
import {BrowserRouter,Switch,Route,withRouter} from 'react-router-dom';
import HomePage from "./Homepage/HomePage";

class App extends React.Component{
  

  render()
  {
    return(
        <BrowserRouter>
        
        
              <Switch>
              <Route exact path="/" component={HomePage}></Route>
                
              </Switch>
          
        </BrowserRouter>
    )
  } 
}
export default App;