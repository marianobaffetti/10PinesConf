import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import NavbarMenu from './NavbarMenu';

require('dotenv').config();

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1
  },
  appbar: {
    background: 'white',
    color: 'black'
  },
  title: {
    flexGrow: 1
  }
}));


function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}><AppBar position="static" className={classes.appbar}>
      <Toolbar><NavbarMenu/><Typography
        variant="h6" className={classes.title}>10 pines conf</Typography>
      </Toolbar></AppBar>
    </div>);

}


export default Header;
