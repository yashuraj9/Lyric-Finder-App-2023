
import React from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import {Route,Switch} from 'react-router-dom';
import Index from './components/layout/Index';
import Lyrics from './components/tracks/Lyrics';
import Provider from './Provider'


function App() {
  return (

    <React.Fragment>

      <Navbar />


<Provider>
      <div className="container">

      <Switch>
      <Route exact path='/' component={Index} />
      <Route exact path='/lyrics/track/:id' component={Lyrics} />


      </Switch>

      </div>
</Provider>



 </React.Fragment>

  );
}

export default App;
