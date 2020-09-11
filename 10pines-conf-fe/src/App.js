import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import 'typeface-roboto';
import CustomerRegister from './components/CustomerRegister';
import Navbar from './components/layout/Navbar';
import rutas from './rutas';

const useStyles = makeStyles({
  container: {
    height: '100vh',
    color: 'black'
  }
});

function App() {
  const classes = useStyles();

  return (
    <Router>
      <Navbar/>
      <Container maxWidth={'xl'} className={classes.container}>
        <Switch>
          <Route exact path={rutas.homePage} component={CustomerRegister}/>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
